import { useEffect, useState } from 'react'
import { Plus, Trophy } from 'lucide-react'
import AdminLayout from '../../components/AdminLayout'
import ChallengeCard from '../../components/ChallengeCard'
import { useAuth } from '../../contexts/AuthContext'
import { useCompany } from '../../contexts/CompanyContext'
import toast from 'react-hot-toast'

const TYPES = [
  { value: 'steps', label: 'Steps' },
  { value: 'minutes', label: 'Minutes of exercise' },
  { value: 'workouts', label: 'Number of workouts' },
  { value: 'distance', label: 'Distance (km)' },
]

const defaultForm = {
  title: '', description: '', type: 'steps', goal: '', startDate: '', endDate: '',
}

export default function AdminChallenges() {
  const { userProfile } = useAuth()
  const { getChallenges, createChallenge, toggleChallenge } = useCompany()
  const [challenges, setChallenges] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState(defaultForm)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (!userProfile?.companyId) return
    getChallenges(userProfile.companyId)
      .then(setChallenges)
      .catch(() => toast.error('Failed to load challenges.'))
      .finally(() => setLoading(false))
  }, [userProfile?.companyId])

  async function handleCreate(e) {
    e.preventDefault()
    setSubmitting(true)
    try {
      const challenge = await createChallenge({
        companyId: userProfile.companyId,
        title: form.title,
        description: form.description,
        type: form.type,
        goal: form.goal,
        startDate: form.startDate,
        endDate: form.endDate,
        createdBy: userProfile.id,
      })
      setChallenges((prev) => [challenge, ...prev])
      setForm(defaultForm)
      setShowForm(false)
      toast.success('Challenge created!')
    } catch {
      toast.error('Failed to create challenge.')
    }
    setSubmitting(false)
  }

  async function handleToggle(id, isActive) {
    try {
      await toggleChallenge(id, isActive)
      setChallenges((prev) => prev.map((c) => (c.id === id ? { ...c, isActive } : c)))
      toast.success(`Challenge ${isActive ? 'activated' : 'deactivated'}.`)
    } catch {
      toast.error('Failed to update challenge.')
    }
  }

  const active = challenges.filter((c) => c.isActive)
  const inactive = challenges.filter((c) => !c.isActive)

  return (
    <AdminLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Challenges</h1>
            <p className="text-gray-500 text-sm mt-1">{active.length} active</p>
          </div>
          <button onClick={() => setShowForm(true)} className="btn-primary flex items-center gap-2">
            <Plus className="w-4 h-4" />
            New challenge
          </button>
        </div>

        {/* Create modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-xl max-h-[90vh] overflow-y-auto">
              <h2 className="text-lg font-bold text-gray-900 mb-5">Create challenge</h2>
              <form onSubmit={handleCreate} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title <span className="text-red-500">*</span></label>
                  <input required className="input" placeholder="10,000 Steps Challenge" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea className="input" rows={2} placeholder="Optional description…" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                    <select className="input" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
                      {TYPES.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Goal <span className="text-red-500">*</span></label>
                    <input type="number" required min={1} className="input" placeholder="10000" value={form.goal} onChange={(e) => setForm({ ...form, goal: e.target.value })} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Start date</label>
                    <input type="date" className="input" value={form.startDate} onChange={(e) => setForm({ ...form, startDate: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">End date</label>
                    <input type="date" className="input" value={form.endDate} onChange={(e) => setForm({ ...form, endDate: e.target.value })} />
                  </div>
                </div>
                <div className="flex gap-3 pt-1">
                  <button type="button" onClick={() => { setShowForm(false); setForm(defaultForm) }} className="flex-1 border border-gray-300 rounded-xl py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Cancel
                  </button>
                  <button type="submit" disabled={submitting} className="flex-1 btn-primary py-2">
                    {submitting ? 'Creating…' : 'Create challenge'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {loading ? (
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => <div key={i} className="card h-24 animate-pulse bg-gray-100" />)}
          </div>
        ) : challenges.length === 0 ? (
          <div className="card text-center py-20 border-dashed">
            <Trophy className="w-10 h-10 text-gray-200 mx-auto mb-3" />
            <p className="font-medium text-gray-900 mb-1">No challenges yet</p>
            <p className="text-sm text-gray-500 mb-5">Create your first wellness challenge to get your team moving.</p>
            <button onClick={() => setShowForm(true)} className="btn-primary">Create first challenge</button>
          </div>
        ) : (
          <>
            {active.length > 0 && (
              <div className="mb-8">
                <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Active</h2>
                <div className="space-y-3">
                  {active.map((c) => <ChallengeCard key={c.id} challenge={c} onToggle={handleToggle} />)}
                </div>
              </div>
            )}
            {inactive.length > 0 && (
              <div>
                <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Inactive</h2>
                <div className="space-y-3">
                  {inactive.map((c) => <ChallengeCard key={c.id} challenge={c} onToggle={handleToggle} />)}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </AdminLayout>
  )
}
