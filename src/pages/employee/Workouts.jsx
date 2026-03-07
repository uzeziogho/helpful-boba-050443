import { useEffect, useState } from 'react'
import { Plus, Dumbbell } from 'lucide-react'
import EmployeeLayout from '../../components/EmployeeLayout'
import { useAuth } from '../../contexts/AuthContext'
import { useCompany } from '../../contexts/CompanyContext'
import toast from 'react-hot-toast'

const WORKOUT_TYPES = ['Running', 'Cycling', 'Swimming', 'Yoga', 'Strength', 'HIIT', 'Walking', 'Other']

const defaultForm = { type: 'Running', duration: '', challengeId: '', notes: '' }

export default function EmployeeWorkouts() {
  const { userProfile } = useAuth()
  const { getChallenges, logWorkout, getMyWorkouts } = useCompany()
  const [workouts, setWorkouts] = useState([])
  const [challenges, setChallenges] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState(defaultForm)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (!userProfile?.companyId) return
    async function load() {
      try {
        const [myWorkouts, chal] = await Promise.all([
          getMyWorkouts(userProfile.id),
          getChallenges(userProfile.companyId),
        ])
        setWorkouts(myWorkouts)
        setChallenges(chal.filter((c) => c.isActive))
      } catch {
        toast.error('Failed to load workouts.')
      }
      setLoading(false)
    }
    load()
  }, [userProfile?.companyId])

  async function handleLog(e) {
    e.preventDefault()
    if (!form.duration || Number(form.duration) <= 0) {
      toast.error('Please enter a valid duration.')
      return
    }
    setSubmitting(true)
    try {
      const result = await logWorkout({
        userId: userProfile.id,
        userName: userProfile.displayName || 'Unknown',
        companyId: userProfile.companyId,
        challengeId: form.challengeId || null,
        type: form.type,
        duration: form.duration,
        notes: form.notes,
      })
      const newWorkout = {
        id: result.id,
        type: form.type,
        duration: Number(form.duration),
        notes: form.notes,
        createdAt: new Date().toISOString(),
      }
      setWorkouts((prev) => [newWorkout, ...prev])
      setForm(defaultForm)
      setShowForm(false)
      toast.success('Workout logged!')
    } catch {
      toast.error('Failed to log workout.')
    }
    setSubmitting(false)
  }

  const totalMinutes = workouts.reduce((sum, w) => sum + (w.duration || 0), 0)

  return (
    <EmployeeLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Workouts</h1>
            <p className="text-gray-500 text-sm mt-1">
              {workouts.length} sessions · {totalMinutes.toLocaleString()} minutes total
            </p>
          </div>
          <button onClick={() => setShowForm(true)} className="btn-primary flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Log workout
          </button>
        </div>

        {/* Log modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
              <h2 className="text-lg font-bold text-gray-900 mb-5">Log workout</h2>
              <form onSubmit={handleLog} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                    <select className="input" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
                      {WORKOUT_TYPES.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Duration (min) <span className="text-red-500">*</span></label>
                    <input type="number" required min={1} className="input" placeholder="30" value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} />
                  </div>
                </div>
                {challenges.length > 0 && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Link to challenge <span className="text-gray-400">(optional)</span></label>
                    <select className="input" value={form.challengeId} onChange={(e) => setForm({ ...form, challengeId: e.target.value })}>
                      <option value="">— none —</option>
                      {challenges.map((c) => <option key={c.id} value={c.id}>{c.title}</option>)}
                    </select>
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Notes <span className="text-gray-400">(optional)</span></label>
                  <textarea className="input" rows={2} placeholder="How did it go?" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
                </div>
                <div className="flex gap-3 pt-1">
                  <button type="button" onClick={() => { setShowForm(false); setForm(defaultForm) }} className="flex-1 border border-gray-300 rounded-xl py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Cancel
                  </button>
                  <button type="submit" disabled={submitting} className="flex-1 btn-primary py-2">
                    {submitting ? 'Saving…' : 'Log workout'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Workout list */}
        {loading ? (
          <div className="space-y-3">
            {[...Array(4)].map((_, i) => <div key={i} className="card h-16 animate-pulse bg-gray-100" />)}
          </div>
        ) : workouts.length === 0 ? (
          <div className="card text-center py-20 border-dashed">
            <Dumbbell className="w-10 h-10 text-gray-200 mx-auto mb-3" />
            <p className="font-medium text-gray-900 mb-1">No workouts yet</p>
            <p className="text-sm text-gray-500 mb-5">Log your first workout to start tracking your progress.</p>
            <button onClick={() => setShowForm(true)} className="btn-primary">Log first workout</button>
          </div>
        ) : (
          <div className="card overflow-hidden p-0">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500">Type</th>
                  <th className="px-6 py-3 text-right text-xs font-semibold text-gray-500">Duration</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 hidden sm:table-cell">Notes</th>
                  <th className="px-6 py-3 text-right text-xs font-semibold text-gray-500">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {workouts.map((w) => (
                  <tr key={w.id} className="hover:bg-gray-50">
                    <td className="px-6 py-3 font-medium text-gray-900">{w.type}</td>
                    <td className="px-6 py-3 text-right text-gray-600">{w.duration} min</td>
                    <td className="px-6 py-3 text-gray-400 text-xs hidden sm:table-cell">{w.notes || '—'}</td>
                    <td className="px-6 py-3 text-right text-gray-400 text-xs">
                      {new Date(w.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </EmployeeLayout>
  )
}
