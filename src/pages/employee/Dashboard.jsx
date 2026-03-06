import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Dumbbell, Trophy, ArrowRight, Flame, Clock } from 'lucide-react'
import EmployeeLayout from '../../components/EmployeeLayout'
import StatsCard from '../../components/StatsCard'
import ChallengeCard from '../../components/ChallengeCard'
import { useAuth } from '../../contexts/AuthContext'
import { useCompany } from '../../contexts/CompanyContext'
import toast from 'react-hot-toast'

export default function EmployeeDashboard() {
  const { currentUser, userProfile } = useAuth()
  const { company, fetchCompany, getMyWorkouts, getChallenges } = useCompany()
  const [workouts, setWorkouts] = useState([])
  const [challenges, setChallenges] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      if (!userProfile?.companyId || !currentUser) return
      try {
        if (!company) await fetchCompany(userProfile.companyId)
        const [wks, chal] = await Promise.all([
          getMyWorkouts(currentUser.uid),
          getChallenges(userProfile.companyId),
        ])
        setWorkouts(wks)
        setChallenges(chal.filter((c) => c.isActive))
      } catch {
        toast.error('Failed to load dashboard.')
      }
      setLoading(false)
    }
    load()
  }, [userProfile?.companyId, currentUser?.uid])

  // Compute streak
  function getStreak() {
    if (!workouts.length) return 0
    const dates = workouts
      .map((w) => {
        const d = w.createdAt?.toDate ? w.createdAt.toDate() : new Date(w.createdAt)
        return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime()
      })
      .filter((v, i, a) => a.indexOf(v) === i)
      .sort((a, b) => b - a)

    let streak = 0
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    let expected = today.getTime()

    for (const date of dates) {
      if (date === expected) {
        streak++
        expected -= 86400000
      } else if (date === expected + 86400000) {
        // yesterday counts — start streak from yesterday
        streak++
        expected = date - 86400000
      } else {
        break
      }
    }
    return streak
  }

  // Compute challenge progress for a given challenge
  function getChallengeProgress(challenge) {
    const start = challenge.startDate?.toDate ? challenge.startDate.toDate() : new Date(challenge.startDate)
    const end = challenge.endDate?.toDate ? challenge.endDate.toDate() : new Date(challenge.endDate)
    const relevant = workouts.filter((w) => {
      const d = w.createdAt?.toDate ? w.createdAt.toDate() : new Date(w.createdAt)
      return d >= start && d <= end
    })
    if (challenge.type === 'workouts') return relevant.length
    if (challenge.type === 'minutes') return relevant.reduce((s, w) => s + (w.duration || 0), 0)
    if (challenge.type === 'streak') return getStreak()
    return 0
  }

  const totalMinutes = workouts.reduce((s, w) => s + (w.duration || 0), 0)
  const streak = getStreak()
  const recentWorkouts = workouts.slice(0, 5)

  return (
    <EmployeeLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Hey{userProfile?.displayName ? `, ${userProfile.displayName.split(' ')[0]}` : ''}! 👋
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            {company?.name} · Keep up the great work
          </p>
        </div>

        {/* Stats */}
        {loading ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[...Array(4)].map((_, i) => <div key={i} className="card h-24 animate-pulse bg-gray-100" />)}
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatsCard label="Total sessions" value={workouts.length} icon={Dumbbell} color="brand" />
            <StatsCard label="Total minutes" value={`${totalMinutes}m`} sub={`${(totalMinutes / 60).toFixed(1)} hours`} icon={Clock} color="green" />
            <StatsCard label="Current streak" value={`${streak}d`} sub={streak > 0 ? 'Keep going!' : 'Log a workout to start'} icon={Flame} color="orange" />
            <StatsCard label="Active challenges" value={challenges.length} icon={Trophy} color="purple" />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Active challenges */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-gray-900">Your challenges</h2>
              <Link to="/me/challenges" className="text-xs text-brand-600 hover:underline flex items-center gap-1">
                See all <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            {loading ? (
              <div className="space-y-3">{[...Array(2)].map((_, i) => <div key={i} className="card h-24 animate-pulse bg-gray-100" />)}</div>
            ) : challenges.length === 0 ? (
              <div className="card text-center py-10 border-dashed">
                <Trophy className="w-8 h-8 text-gray-300 mx-auto mb-3" />
                <p className="text-sm text-gray-500">No active challenges right now.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {challenges.slice(0, 3).map((c) => (
                  <ChallengeCard key={c.id} challenge={c} progress={getChallengeProgress(c)} />
                ))}
              </div>
            )}
          </div>

          {/* Recent workouts */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-gray-900">Recent workouts</h2>
              <Link to="/me/workouts" className="text-xs text-brand-600 hover:underline flex items-center gap-1">
                Log workout <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            {loading ? (
              <div className="card h-48 animate-pulse bg-gray-100" />
            ) : recentWorkouts.length === 0 ? (
              <div className="card text-center py-10 border-dashed">
                <Dumbbell className="w-8 h-8 text-gray-300 mx-auto mb-3" />
                <p className="text-sm text-gray-500 mb-4">No workouts logged yet.</p>
                <Link to="/me/workouts" className="btn-primary text-sm">Log your first workout</Link>
              </div>
            ) : (
              <div className="card overflow-hidden p-0">
                <div className="divide-y divide-gray-50">
                  {recentWorkouts.map((w) => {
                    const date = w.createdAt?.toDate ? w.createdAt.toDate() : new Date(w.createdAt)
                    return (
                      <div key={w.id} className="px-4 py-3 flex items-center gap-3">
                        <div className="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Dumbbell className="w-4 h-4 text-brand-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 capitalize">{w.type}</p>
                          <p className="text-xs text-gray-400">{w.notes || 'No notes'}</p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="text-sm font-semibold text-gray-700">{w.duration}m</p>
                          <p className="text-xs text-gray-400">{date.toLocaleDateString()}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </EmployeeLayout>
  )
}
