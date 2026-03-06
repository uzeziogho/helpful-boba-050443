import { useEffect, useState } from 'react'
import { Plus, Trophy } from 'lucide-react'
import AdminLayout from '../../components/AdminLayout'
import ChallengeCard from '../../components/ChallengeCard'
import { useAuth } from '../../contexts/AuthContext'
import { useCompany } from '../../contexts/CompanyContext'
import toast from 'react-hot-toast'

const CHALLENGE_TYPES = [
  { value: 'workouts', label: 'Workout sessions' },
  { value: 'minutes', label: 'Active minutes' },
  { value: 'streak', label: 'Day streak' },
]

const DEFAULT_FORM = {
  title: '',
  description: '',
  type: 'workouts',
  goal: '',
  startDate: '',
  endDate: '',
}

export default function AdminChallenges() {
  const { currentUser, userProfile } = useAuth()
  const { getChallenges, createChallenge, toggleChallenge } = useCompany()

  const [challenges, setChallenges] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState(DEFAULT_FORM)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    async function load() {
      if (!userProfile?.companyId) return
      try {
        const data = await getChallenges(userProfile.companyId)
        setChallenges(data)
      } catch {
        toast.error('Failed to load challenges.')
      }
      setLoading(false)
    }
    load()
  }, [userProfile?.companyId])

  async function handleCreate(e) {
    e.preventDefault()
    if (new Date(form.endDate) <= new Date(form.startDate)) {
      toast.error('End date must be after start date.')
      return
    }
    setSaving(true)
    try {
      const ref = await createChallenge({
        companyId: userProfile.companyId,
        ...form,
        createdBy: currentUser.uid,
      })
      const newChallenge = {
        id: ref.id,
        ...form,
        companyId: userProfile.companyId,
        createdBy: currentUser.uid,
        isActive: true,
        createdAt: new Date(),
      }
      setChallenges((prev) => [newChallenge, ...prev])
      toast.success('Challenge created!')
      setShowForm(false)
      setForm(DEFAULT_FORM)
    } catch (err) {
      toast.error(err.message || 'Failed to create challenge.')
    }
    setSaving(false)
  }

  async function handleToggle(id, isActive) {
    await toggleChallenge(id, isActive)
    setChallenges((prev) => prev.map((c) => (c.id === id ? { ...c, isActive } : c)))
    toast.success(`Challenge ${isActive ? 'activated' : 'deactivated'}.`)
  }

  return (
    <AdminLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Wellness Challenges</h1>
            <p className="text-gray-500 text-sm mt-1">
              {challenges.filter((c) => c.isActive).length} active · {challenges.length} total
            </p>
          </div>
          <button onClick={() => setShowForm(true)} className="btn-primary flex items-center gap-2">
            <Plus className="w-4 h-4" />
            New challenge
          </button>
        </div>

        {/* Create challenge modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4 overflow-y-auto py-8">
            <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-xl my-auto">
              <h2 className="font-bold text-gray-900 mb-1">Create wellness challenge</h2>
              <p className="text-sm text-gray-500 mb-5">Challenges appear on all employee dashboards.</p>
              <form onSubmit={handleCreate} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Challenge name</label>
                  <input
                    required
                    className="input"
                    placeholder="e.g. March Step Challenge"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    className="input resize-none"
                    rows={2}
                    placeholder="Tell employees what this challenge is about…"
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Challenge type</label>
                    <select
                      className="input"
                      value={form.type}
                      onChange={(e) => setForm({ ...form, type: e.target.value })}
                    >
                      {CHALLENGE_TYPES.map((t) => (
                        <option key={t.value} value={t.value}>{t.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Goal</label>
                    <input
                      type="number"
                      required
                      min={1}
                      className="input"
                      placeholder="e.g. 20"
                      value={form.goal}
                      onChange={(e) => setForm({ ...form, goal: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Start date</label>
                    <input
                      type="date"
                      required
                      className="input"
                      value={form.startDate}
                      onChange={(e) => setForm({ ...form, startDate: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">End date</label>
                    <input
                      type="date"
                      required
                      className="input"
                      value={form.endDate}
                      onChange={(e) => setForm({ ...form, endDate: e.target.value })}
                    />
                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  <button type="button" onClick={() => { setShowForm(false); setForm(DEFAULT_FORM) }} className="btn-secondary flex-1">Cancel</button>
                  <button type="submit" disabled={saving} className="btn-primary flex-1">
                    {saving ? 'Creating…' : 'Create challenge'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Challenge list */}
        {loading ? (
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => <div key={i} className="card h-28 animate-pulse bg-gray-100" />)}
          </div>
        ) : challenges.length === 0 ? (
          <div className="card text-center py-16 border-dashed">
            <Trophy className="w-12 h-12 text-gray-200 mx-auto mb-4" />
            <p className="text-gray-500 mb-2 font-medium">No challenges yet</p>
            <p className="text-sm text-gray-400 mb-6">Create your first wellness challenge to engage your team.</p>
            <button onClick={() => setShowForm(true)} className="btn-primary">Create challenge</button>
          </div>
        ) : (
          <div className="space-y-3">
            {challenges.map((c) => (
              <ChallengeCard key={c.id} challenge={c} onToggle={handleToggle} />
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  )
}
