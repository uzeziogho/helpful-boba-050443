import { useEffect, useState } from 'react'
import { Users, UserPlus, Mail, Search } from 'lucide-react'
import AdminLayout from '../../components/AdminLayout'
import { useAuth } from '../../contexts/AuthContext'
import { useCompany } from '../../contexts/CompanyContext'
import toast from 'react-hot-toast'

const ROLES = ['employee', 'admin']
const DEPARTMENTS = ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance', 'Operations', 'Design', 'Other']

export default function AdminEmployees() {
  const { userProfile } = useAuth()
  const { getEmployees, inviteEmployee, deactivateEmployee, updateEmployeeRole } = useCompany()
  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [showInvite, setShowInvite] = useState(false)
  const [invite, setInvite] = useState({ email: '', role: 'employee', department: '' })
  const [inviting, setInviting] = useState(false)

  useEffect(() => {
    if (!userProfile?.companyId) return
    getEmployees(userProfile.companyId)
      .then(setEmployees)
      .catch(() => toast.error('Failed to load employees.'))
      .finally(() => setLoading(false))
  }, [userProfile?.companyId])

  async function handleInvite(e) {
    e.preventDefault()
    setInviting(true)
    try {
      await inviteEmployee({
        companyId: userProfile.companyId,
        email: invite.email,
        role: invite.role,
        department: invite.department,
        invitedBy: userProfile.id,
      })
      toast.success(`Invitation sent to ${invite.email}`)
      setInvite({ email: '', role: 'employee', department: '' })
      setShowInvite(false)
    } catch (err) {
      toast.error(err.message || 'Failed to send invitation.')
    }
    setInviting(false)
  }

  async function handleDeactivate(uid, name) {
    if (!window.confirm(`Deactivate ${name}? They will lose access.`)) return
    try {
      await deactivateEmployee(uid)
      setEmployees((prev) => prev.map((e) => e.id === uid ? { ...e, isActive: false } : e))
      toast.success(`${name} deactivated.`)
    } catch {
      toast.error('Failed to deactivate employee.')
    }
  }

  async function handleRoleChange(uid, role) {
    try {
      await updateEmployeeRole(uid, role, employees.find((e) => e.id === uid)?.department || '')
      setEmployees((prev) => prev.map((e) => e.id === uid ? { ...e, role } : e))
      toast.success('Role updated.')
    } catch {
      toast.error('Failed to update role.')
    }
  }

  const filtered = employees.filter((e) =>
    e.displayName?.toLowerCase().includes(search.toLowerCase()) ||
    e.email?.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <AdminLayout>
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Employees</h1>
            <p className="text-gray-500 text-sm mt-1">{employees.length} team members</p>
          </div>
          <button onClick={() => setShowInvite(true)} className="btn-primary flex items-center gap-2">
            <UserPlus className="w-4 h-4" />
            Invite employee
          </button>
        </div>

        {/* Invite modal */}
        {showInvite && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Invite employee</h2>
              <form onSubmit={handleInvite} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                  <input type="email" required className="input" placeholder="jane@company.com" value={invite.email} onChange={(e) => setInvite({ ...invite, email: e.target.value })} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                    <select className="input" value={invite.role} onChange={(e) => setInvite({ ...invite, role: e.target.value })}>
                      {ROLES.map((r) => <option key={r} value={r} className="capitalize">{r}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                    <select className="input" value={invite.department} onChange={(e) => setInvite({ ...invite, department: e.target.value })}>
                      <option value="">— none —</option>
                      {DEPARTMENTS.map((d) => <option key={d} value={d}>{d}</option>)}
                    </select>
                  </div>
                </div>
                <div className="flex gap-3 pt-1">
                  <button type="button" onClick={() => setShowInvite(false)} className="flex-1 border border-gray-300 rounded-xl py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Cancel
                  </button>
                  <button type="submit" disabled={inviting} className="flex-1 btn-primary py-2">
                    {inviting ? 'Sending…' : 'Send invite'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input className="input pl-9" placeholder="Search employees…" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>

        {/* Table */}
        <div className="card overflow-hidden p-0">
          {loading ? (
            <div className="p-8 text-center text-gray-400 text-sm">Loading…</div>
          ) : filtered.length === 0 ? (
            <div className="py-16 text-center">
              <Users className="w-10 h-10 text-gray-200 mx-auto mb-3" />
              <p className="text-sm text-gray-500">
                {employees.length === 0 ? 'No employees yet. Invite your team!' : 'No employees match your search.'}
              </p>
            </div>
          ) : (
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500">Name</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500">Department</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500">Role</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500">Status</th>
                  <th className="px-4 py-3" />
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.map((emp) => (
                  <tr key={emp.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center text-brand-700 font-semibold text-sm flex-shrink-0">
                          {emp.displayName?.[0]?.toUpperCase() || '?'}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{emp.displayName || '—'}</p>
                          <p className="text-xs text-gray-400">{emp.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{emp.department || '—'}</td>
                    <td className="px-4 py-3">
                      <select
                        value={emp.role || 'employee'}
                        onChange={(e) => handleRoleChange(emp.id, e.target.value)}
                        className="text-xs border border-gray-200 rounded-lg px-2 py-1 bg-white focus:outline-none focus:ring-1 focus:ring-brand-500"
                      >
                        {ROLES.map((r) => <option key={r} value={r} className="capitalize">{r}</option>)}
                      </select>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${emp.isActive ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-400'}`}>
                        {emp.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      {emp.isActive && (
                        <button
                          onClick={() => handleDeactivate(emp.id, emp.displayName)}
                          className="text-xs text-red-500 hover:text-red-700 font-medium"
                        >
                          Deactivate
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </AdminLayout>
  )
}
