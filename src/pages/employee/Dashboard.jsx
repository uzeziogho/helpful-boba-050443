import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Activity, Trophy, Medal, Plus, ArrowRight } from 'lucide-react'
import EmployeeLayout from '../../components/EmployeeLayout'
import ChallengeCard from '../../components/ChallengeCard'
import StatsCard from '../../components/StatsCard'
import { useAuth } from '../../contexts/AuthContext'
import { useCompany } from '../../contexts/CompanyContext'
import toast from 'react-hot-toast'

export default function EmployeeDashboard() {
  const { userProfile } = useAuth()
  const { getChallenges, getMyWorkouts } = useCompany()
  const [challenges, setChallenges] = useState([])
  const [workouts, setWorkouts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!userProfile?.companyId) return
    async function load() {
      try {
        const [chal, myWorkouts] = await Promise.all([
          getChallenges(userProfile.companyId),
          getMyWorkouts(userProfile.id),
        ])
        setChallenges(chal.filter((c) => c.isActive))
        setWorkouts(myWorkouts)
      } catch {
        toast.error('Failed to load dashboard.')
      }
      setLoading(false)
    }
    load()
  }, [userProfile?.companyId])

  const totalMinutes = workouts.reduce((sum, w) => sum + (w.duration || 0), 0)
  const recentWorkouts = workouts.slice(0, 5)

  return (
    <EmployeeLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Hey{userProfile?.displayName ? `, ${userProfile.displayName.split(' ')[0]}` : ''}! 👋
          </h1>
          <p className="text-gray-500 text-sm mt-1">Keep up the great work!</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <StatsCard label="Total sessions" value={workouts.length} icon={Activity} color="brand" />
          <StatsCard label="Total minutes" value={totalMinutes.toLocaleString()} icon={Trophy} color="green" />
          <StatsCard label="Active challenges" value={challenges.length} icon={Medal} color="purple" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Active challenges */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-gray-900">Active challenges</h2>
              <Link to="/me/challenges" className="text-xs text-brand-600 hover:underline flex items-center gap-1">
                View all <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            {loading ? (
              <div className="space-y-3">
                {[...Array(2)].map((_, i) => <div key={i} className="card h-20 animate-pulse bg-gray-100" />)}
              </div>
            ) : challenges.length === 0 ? (
              <div className="card text-center py-10 border-dashed">
                <Trophy className="w-8 h-8 text-gray-200 mx-auto mb-3" />
                <p className="text-sm text-gray-500">No active challenges right now.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {challenges.slice(0, 3).map((c) => <ChallengeCard key={c.id} challenge={c} />)}
              </div>
            )}
          </div>

          {/* Recent workouts */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-gray-900">Recent workouts</h2>
              <Link to="/me/workouts" className="text-xs text-brand-600 hover:underline flex items-center gap-1 ">
                <Plus className="w-3 h-3" /> Log workout
              </Link>
            </div>
            {loading ? (
              <div className="card animate-pulse h-40 bg-gray-100" />
            ) : recentWorkouts.length === 0 ? (
              <div className="card text-center py-10 border-dashed">
                <Activity className="w-8 h-8 text-gray-200 mx-auto mb-3" />
                <p className="text-sm text-gray-500 mb-4">No workouts logged yet.</p>
                <Link to="/me/workouts" className="btn-primary text-sm">Log your first workout</Link>
              </div>
            ) : (
              <div className="card overflow-hidden p-0">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 border-b border-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500">Type</th>
                      <th className="px-4 py-3 text-right text-xs font-semibold text-gray-500">Duration</th>
                      <th className="px-4 py-3 text-right text-xs font-semibold text-gray-500">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {recentWorkouts.map((w) => (
                      <tr key={w.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium text-gray-900 capitalize">{w.type}</td>
                        <td className="px-4 py-3 text-right text-gray-600">{w.duration} min</td>
                        <td className="px-4 py-3 text-right text-gray-400 text-xs">
                          {new Date(w.createdAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
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
