import { useEffect, useState } from 'react'
import { UserPlus, Mail, MoreVertical, Search, UserX, Shield } from 'lucide-react'
import AdminLayout from '../../components/AdminLayout'
import { useAuth } from '../../contexts/AuthContext'
import { useCompany } from '../../contexts/CompanyContext'
import toast from 'react-hot-toast'

const ROLES = ['employee', 'manager', 'admin']

export default function AdminEmployees() {
  const { currentUser, userProfile } = useAuth()
  const { inviteEmployee, getEmployees, deactivateEmployee, updateEmployeeRole } = useCompany()

  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [showInvite, setShowInvite] = useState(false)
  const [invite, setInvite] = useState({ email: '', role: 'employee', department: '' })
  const [inviting, setInviting] = useState(false)

  useEffect(() => {
    async function load() {
      if (!userProfile?.companyId) return
      try {
        const data = await getEmployees(userProfile.companyId)
        setEmployees(data)
      } catch {
        toast.error('Failed to load employees.')
      }
      setLoading(false)
    }
    load()
  }, [userProfile?.companyId])

  async function handleInvite(e) {
    e.preventDefault()
    setInviting(true)
    try {
      const inviteRef = await inviteEmployee({
        companyId: userProfile.companyId,
        email: invite.email,
        role: invite.role,
        department: invite.department,
        invitedBy: currentUser.uid,
      })
      toast.success(
        `Invitation ready! Share this link: ${window.location.origin}/invite/${inviteRef.id}`,
        { duration: 8000 }
      )
      setShowInvite(false)
      setInvite({ email: '', role: 'employee', department: '' })
    } catch (err) {
      toast.error(err.message || 'Failed to send invitation.')
    }
    setInviting(false)
  }

  async function handleDeactivate(uid, name) {
    if (!confirm(`Deactivate ${name}? They will lose access.`)) return
    await deactivateEmployee(uid)
    setEmployees((prev) => prev.map((e) => (e.id === uid ? { ...e, isActive: false } : e)))
    toast.success(`${name} deactivated.`)
  }

  async function handleRoleChange(uid, role) {
    await updateEmployeeRole(uid, role, employees.find((e) => e.id === uid)?.department || '')
    setEmployees((prev) => prev.map((e) => (e.id === uid ? { ...e, role } : e)))
    toast.success('Role updated.')
  }

  const filtered = employees.filter(
    (e) =>
      e.displayName?.toLowerCase().includes(search.toLowerCase()) ||
      e.email?.toLowerCase().includes(search.toLowerCase()) ||
      e.department?.toLowerCase().includes(search.toLowerCase())
  )

  const activeCount = employees.filter((e) => e.isActive).length

  return (
    <AdminLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Employees</h1>
            <p className="text-gray-500 text-sm mt-1">{activeCount} active member{activeCount !== 1 ? 's' : ''}</p>
          </div>
          <button onClick={() => setShowInvite(true)} className="btn-primary flex items-center gap-2">
            <UserPlus className="w-4 h-4" />
            Invite employee
          </button>
        </div>

        {/* Invite modal */}
        {showInvite && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
              <h2 className="font-bold text-gray-900 mb-1">Invite employee</h2>
              <p className="text-sm text-gray-500 mb-5">
                They'll receive a unique invite link to create their account.
              </p>
              <form onSubmit={handleInvite} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                  <input
                    type="email"
                    required
                    className="input"
                    placeholder="employee@company.com"
                    value={invite.email}
                    onChange={(e) => setInvite({ ...invite, email: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                    <select
                      className="input"
                      value={invite.role}
                      onChange={(e) => setInvite({ ...invite, role: e.target.value })}
                    >
                      {ROLES.map((r) => <option key={r} value={r} className="capitalize">{r}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                    <input
                      className="input"
                      placeholder="e.g. Engineering"
                      value={invite.department}
                      onChange={(e) => setInvite({ ...invite, department: e.target.value })}
                    />
                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  <button type="button" onClick={() => setShowInvite(false)} className="btn-secondary flex-1">Cancel</button>
                  <button type="submit" disabled={inviting} className="btn-primary flex-1">
                    {inviting ? 'Sending…' : 'Generate invite link'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Search */}
        <div className="relative mb-6 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            className="input pl-9"
            placeholder="Search employees…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Table */}
        <div className="card overflow-hidden p-0">
          {loading ? (
            <div className="p-8 text-center text-gray-400 text-sm">Loading employees…</div>
          ) : filtered.length === 0 ? (
            <div className="p-12 text-center">
              <UserPlus className="w-10 h-10 text-gray-200 mx-auto mb-3" />
              <p className="text-gray-500 text-sm mb-2">No employees yet.</p>
              <p className="text-gray-400 text-xs">Invite your team to get started.</p>
            </div>
          ) : (
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500">Employee</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500">Department</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500">Role</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500">Status</th>
                  <th className="px-6 py-3 text-right text-xs font-semibold text-gray-500">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.map((emp) => (
                  <tr key={emp.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-brand-700 text-xs font-bold">
                            {(emp.displayName || emp.email || 'U')[0].toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{emp.displayName || '—'}</p>
                          <p className="text-xs text-gray-400">{emp.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{emp.department || '—'}</td>
                    <td className="px-6 py-4">
                      <select
                        className="text-xs border border-gray-200 rounded px-2 py-1 capitalize focus:outline-none focus:ring-1 focus:ring-brand-500"
                        value={emp.role || 'employee'}
                        onChange={(e) => handleRoleChange(emp.id, e.target.value)}
                      >
                        {ROLES.map((r) => <option key={r} value={r} className="capitalize">{r}</option>)}
                      </select>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        emp.isActive !== false ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-400'
                      }`}>
                        {emp.isActive !== false ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      {emp.isActive !== false && emp.id !== currentUser?.uid && (
                        <button
                          onClick={() => handleDeactivate(emp.id, emp.displayName || emp.email)}
                          className="text-xs text-red-500 hover:text-red-700 hover:underline"
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
