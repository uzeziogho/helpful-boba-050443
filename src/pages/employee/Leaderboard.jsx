import { useEffect, useState } from 'react'
import { Medal } from 'lucide-react'
import EmployeeLayout from '../../components/EmployeeLayout'
import { useAuth } from '../../contexts/AuthContext'
import { useCompany } from '../../contexts/CompanyContext'
import toast from 'react-hot-toast'

export default function EmployeeLeaderboard() {
  const { userProfile } = useAuth()
  const { getParticipationReport } = useCompany()
  const [leaderboard, setLeaderboard] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!userProfile?.companyId) return
    getParticipationReport(userProfile.companyId)
      .then((r) => setLeaderboard(r.leaderboard || []))
      .catch(() => toast.error('Failed to load leaderboard.'))
      .finally(() => setLoading(false))
  }, [userProfile?.companyId])

  const myEntry = leaderboard.find((e) => e.name === userProfile?.displayName)
  const myRank = myEntry ? leaderboard.indexOf(myEntry) + 1 : null

  return (
    <EmployeeLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Leaderboard</h1>
          <p className="text-gray-500 text-sm mt-1">
            {myRank ? `You're ranked #${myRank} on your team` : 'Log workouts to appear on the leaderboard'}
          </p>
        </div>

        {loading ? (
          <div className="space-y-2">
            {[...Array(5)].map((_, i) => <div key={i} className="card h-14 animate-pulse bg-gray-100" />)}
          </div>
        ) : leaderboard.length === 0 ? (
          <div className="card text-center py-20 border-dashed">
            <Medal className="w-10 h-10 text-gray-200 mx-auto mb-3" />
            <p className="font-medium text-gray-900 mb-1">No data yet</p>
            <p className="text-sm text-gray-500">Be the first to log a workout and claim the top spot!</p>
          </div>
        ) : (
          <div className="card overflow-hidden p-0">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500">Rank</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500">Employee</th>
                  <th className="px-6 py-3 text-right text-xs font-semibold text-gray-500">Sessions</th>
                  <th className="px-6 py-3 text-right text-xs font-semibold text-gray-500">Minutes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {leaderboard.map((emp, i) => {
                  const isMe = emp.name === userProfile?.displayName
                  return (
                    <tr key={emp.name} className={`${isMe ? 'bg-brand-50' : 'hover:bg-gray-50'}`}>
                      <td className="px-6 py-3 text-sm font-medium">
                        {i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : <span className="text-gray-400">{i + 1}.</span>}
                      </td>
                      <td className="px-6 py-3">
                        <span className={`font-medium ${isMe ? 'text-brand-700' : 'text-gray-900'}`}>
                          {emp.name}{isMe && ' (you)'}
                        </span>
                      </td>
                      <td className="px-6 py-3 text-right text-gray-600">{emp.sessions}</td>
                      <td className="px-6 py-3 text-right text-gray-600">{emp.minutes}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </EmployeeLayout>
  )
}
