import { useEffect, useState } from 'react'
import { Trophy, Medal } from 'lucide-react'
import EmployeeLayout from '../../components/EmployeeLayout'
import { useAuth } from '../../contexts/AuthContext'
import { useCompany } from '../../contexts/CompanyContext'
import toast from 'react-hot-toast'

export default function EmployeeLeaderboard() {
  const { currentUser, userProfile } = useAuth()
  const { getParticipationReport } = useCompany()
  const [report, setReport] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      if (!userProfile?.companyId) return
      try {
        const rep = await getParticipationReport(userProfile.companyId)
        setReport(rep)
      } catch {
        toast.error('Failed to load leaderboard.')
      }
      setLoading(false)
    }
    load()
  }, [userProfile?.companyId])

  const medals = ['🥇', '🥈', '🥉']

  return (
    <EmployeeLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Company Leaderboard</h1>
          <p className="text-gray-500 text-sm mt-1">Top performers across all time</p>
        </div>

        {loading ? (
          <div className="card h-64 animate-pulse bg-gray-100" />
        ) : !report?.leaderboard?.length ? (
          <div className="card text-center py-16 border-dashed">
            <Trophy className="w-12 h-12 text-gray-200 mx-auto mb-4" />
            <p className="text-gray-500">No workout data yet. Be the first to log one!</p>
          </div>
        ) : (
          <>
            {/* Top 3 podium */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {report.leaderboard.slice(0, 3).map((emp, i) => (
                <div
                  key={emp.name}
                  className={`card text-center ${i === 0 ? 'ring-2 ring-yellow-400' : ''}`}
                >
                  <div className="text-3xl mb-2">{medals[i]}</div>
                  <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-brand-700 font-bold text-lg">
                      {emp.name[0].toUpperCase()}
                    </span>
                  </div>
                  <p className="font-semibold text-gray-900 text-sm truncate">{emp.name}</p>
                  <p className="text-2xl font-bold text-brand-600 mt-1">{emp.minutes}</p>
                  <p className="text-xs text-gray-400">minutes</p>
                  <p className="text-xs text-gray-500 mt-1">{emp.sessions} session{emp.sessions !== 1 ? 's' : ''}</p>
                </div>
              ))}
            </div>

            {/* Full table */}
            <div className="card overflow-hidden p-0">
              <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-2">
                <Medal className="w-4 h-4 text-brand-600" />
                <h2 className="font-semibold text-gray-900">Full rankings</h2>
                <span className="text-xs text-gray-400 ml-auto">{report.leaderboard.length} participants</span>
              </div>
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500">Rank</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500">Employee</th>
                    <th className="px-6 py-3 text-right text-xs font-semibold text-gray-500">Sessions</th>
                    <th className="px-6 py-3 text-right text-xs font-semibold text-gray-500">Total minutes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {report.leaderboard.map((emp, i) => {
                    const isMe = emp.name === userProfile?.displayName
                    return (
                      <tr key={emp.name} className={`hover:bg-gray-50 ${isMe ? 'bg-brand-50' : ''}`}>
                        <td className="px-6 py-3 text-gray-400 font-medium text-xs">
                          {i < 3 ? medals[i] : `#${i + 1}`}
                        </td>
                        <td className="px-6 py-3 font-medium text-gray-900">
                          {emp.name}
                          {isMe && <span className="ml-2 text-xs text-brand-600 font-semibold">(You)</span>}
                        </td>
                        <td className="px-6 py-3 text-right text-gray-600">{emp.sessions}</td>
                        <td className="px-6 py-3 text-right text-gray-600">{emp.minutes} min</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </EmployeeLayout>
  )
}
