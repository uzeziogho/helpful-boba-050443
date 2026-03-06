import { useEffect, useState } from 'react'
import { Dumbbell, Plus } from 'lucide-react'
import EmployeeLayout from '../../components/EmployeeLayout'
import { useAuth } from '../../contexts/AuthContext'
import { useCompany } from '../../contexts/CompanyContext'
import toast from 'react-hot-toast'

const WORKOUT_TYPES = [
  'Running', 'Walking', 'Cycling', 'Swimming', 'Strength training',
  'HIIT', 'Yoga', 'Pilates', 'CrossFit', 'Rowing', 'Elliptical',
  'Hiking', 'Boxing', 'Dance', 'Other',
]

const DEFAULT_FORM = { type: 'Running', duration: '', notes: '' }

export default function EmployeeWorkouts() {
  const { currentUser, userProfile } = useAuth()
  const { logWorkout, getMyWorkouts, getChallenges } = useCompany()
  const [workouts, setWorkouts] = useState([])
  const [challenges, setChallenges] = useState([])
  const [form, setForm] = useState(DEFAULT_FORM)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    async function load() {
      if (!currentUser || !userProfile?.companyId) return
      try {
        const [wks, chal] = await Promise.all([
          getMyWorkouts(currentUser.uid),
          getChallenges(userProfile.companyId),
        ])
        setWorkouts(wks)
        setChallenges(chal.filter((c) => c.isActive))
      } catch {
        toast.error('Failed to load workouts.')
      }
      setLoading(false)
    }
    load()
  }, [currentUser?.uid, userProfile?.companyId])

  async function handleLog(e) {
    e.preventDefault()
    if (!form.duration || Number(form.duration) <= 0) {
      toast.error('Enter a valid duration.')
      return
    }
    setSaving(true)
    try {
      const ref = await logWorkout({
        userId: currentUser.uid,
        userName: userProfile?.displayName || currentUser.email,
        companyId: userProfile.companyId,
        type: form.type,
        duration: form.duration,
        notes: form.notes,
      })
      const newWorkout = {
        id: ref.id,
        userId: currentUser.uid,
        userName: userProfile?.displayName || currentUser.email,
        ...form,
        duration: Number(form.duration),
        createdAt: new Date(),
      }
      setWorkouts((prev) => [newWorkout, ...prev])
      setForm(DEFAULT_FORM)
      toast.success('Workout logged! 💪')
    } catch (err) {
      toast.error(err.message || 'Failed to log workout.')
    }
    setSaving(false)
  }

  return (
    <EmployeeLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Log a Workout</h1>
          <p className="text-gray-500 text-sm mt-1">Every session counts toward your challenges.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Log form */}
          <div className="lg:col-span-1">
            <div className="card">
              <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Plus className="w-4 h-4 text-brand-600" />
                New workout
              </h2>
              <form onSubmit={handleLog} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Workout type</label>
                  <select
                    className="input"
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                  >
                    {WORKOUT_TYPES.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Duration (minutes)</label>
                  <input
                    type="number"
                    required
                    min={1}
                    max={600}
                    className="input"
                    placeholder="e.g. 30"
                    value={form.duration}
                    onChange={(e) => setForm({ ...form, duration: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Notes <span className="text-gray-400">(optional)</span></label>
                  <textarea
                    className="input resize-none"
                    rows={2}
                    placeholder="How did it go?"
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  />
                </div>
                <button type="submit" disabled={saving} className="btn-primary w-full py-2.5">
                  {saving ? 'Logging…' : 'Log workout'}
                </button>
              </form>
            </div>

            {/* Active challenges reminder */}
            {challenges.length > 0 && (
              <div className="card mt-4 bg-brand-50 border-brand-200">
                <p className="text-xs font-semibold text-brand-700 mb-2">Your active challenges</p>
                <ul className="space-y-1">
                  {challenges.map((c) => (
                    <li key={c.id} className="text-xs text-brand-600 flex items-center gap-1">
                      <span>•</span> {c.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* History */}
          <div className="lg:col-span-2">
            <h2 className="font-semibold text-gray-900 mb-4">Workout history</h2>
            {loading ? (
              <div className="space-y-3">{[...Array(4)].map((_, i) => <div key={i} className="card h-16 animate-pulse bg-gray-100" />)}</div>
            ) : workouts.length === 0 ? (
              <div className="card text-center py-16 border-dashed">
                <Dumbbell className="w-10 h-10 text-gray-200 mx-auto mb-3" />
                <p className="text-gray-500 text-sm">No workouts logged yet. Start your first one!</p>
              </div>
            ) : (
              <div className="card overflow-hidden p-0">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 border-b border-gray-100">
                    <tr>
                      <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500">Type</th>
                      <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500">Duration</th>
                      <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500">Notes</th>
                      <th className="px-5 py-3 text-right text-xs font-semibold text-gray-500">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {workouts.map((w) => {
                      const date = w.createdAt?.toDate ? w.createdAt.toDate() : new Date(w.createdAt)
                      return (
                        <tr key={w.id} className="hover:bg-gray-50">
                          <td className="px-5 py-3 font-medium text-gray-900 capitalize">{w.type}</td>
                          <td className="px-5 py-3 text-gray-600">{w.duration} min</td>
                          <td className="px-5 py-3 text-gray-400 max-w-xs truncate">{w.notes || '—'}</td>
                          <td className="px-5 py-3 text-right text-gray-500 text-xs whitespace-nowrap">
                            {date.toLocaleDateString()}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </EmployeeLayout>
  )
}
