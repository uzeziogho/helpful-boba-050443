import { useEffect, useState } from 'react'
import { BarChart2, Download, Users, Activity, TrendingUp, Clock } from 'lucide-react'
import AdminLayout from '../../components/AdminLayout'
import StatsCard from '../../components/StatsCard'
import { useAuth } from '../../contexts/AuthContext'
import { useCompany } from '../../contexts/CompanyContext'
import toast from 'react-hot-toast'

export default function AdminReports() {
  const { userProfile } = useAuth()
  const { getParticipationReport } = useCompany()
  const [report, setReport] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!userProfile?.companyId) return
    getParticipationReport(userProfile.companyId)
      .then(setReport)
      .catch(() => toast.error('Failed to load report.'))
      .finally(() => setLoading(false))
  }, [userProfile?.companyId])

  function downloadCSV() {
    if (!report?.leaderboard?.length) return
    const headers = ['Rank', 'Employee', 'Sessions', 'Total Minutes']
    const rows = report.leaderboard.map((emp, i) => [i + 1, emp.name, emp.sessions, emp.minutes])
    const csv = [headers, ...rows].map((r) => r.join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `wellness-report-${new Date().toISOString().slice(0, 10)}.csv`
    a.click()
    URL.revokeObjectURL(url)
    toast.success('Report downloaded.')
  }

  return (
    <AdminLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
            <p className="text-gray-500 text-sm mt-1">Wellness participation overview</p>
          </div>
          <button onClick={downloadCSV} disabled={!report} className="flex items-center gap-2 border border-gray-300 rounded-xl px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-40">
            <Download className="w-4 h-4" />
            Export CSV
          </button>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => <div key={i} className="card h-24 animate-pulse bg-gray-100" />)}
          </div>
        ) : !report ? (
          <div className="card text-center py-20">
            <BarChart2 className="w-10 h-10 text-gray-200 mx-auto mb-3" />
            <p className="text-sm text-gray-500">No data available yet.</p>
          </div>
        ) : (
          <>
            {/* Summary stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <StatsCard label="Total employees" value={report.totalEmployees} icon={Users} color="brand" />
              <StatsCard label="Active participants" value={report.activeParticipants} sub={`${report.participationRate}% of team`} icon={TrendingUp} color="green" />
              <StatsCard label="Total sessions" value={report.totalSessions.toLocaleString()} icon={Activity} color="orange" />
              <StatsCard label="Total minutes" value={report.totalMinutes.toLocaleString()} icon={Clock} color="purple" />
            </div>

            {/* Participation bar */}
            <div className="card mb-8">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-semibold text-gray-900">Participation rate</h2>
                <span className="text-2xl font-bold text-brand-600">{report.participationRate}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-4">
                <div
                  className="bg-brand-600 h-4 rounded-full transition-all"
                  style={{ width: `${report.participationRate}%` }}
                />
              </div>
              <p className="text-xs text-gray-400 mt-2">
                {report.activeParticipants} of {report.totalEmployees} active employees have logged at least one workout
              </p>
            </div>

            {/* Leaderboard */}
            {report.leaderboard.length > 0 && (
              <div className="card overflow-hidden p-0">
                <div className="px-6 py-4 border-b border-gray-100">
                  <h2 className="font-semibold text-gray-900">Top performers</h2>
                </div>
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 border-b border-gray-100">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500">Rank</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500">Employee</th>
                      <th className="px-6 py-3 text-right text-xs font-semibold text-gray-500">Sessions</th>
                      <th className="px-6 py-3 text-right text-xs font-semibold text-gray-500">Minutes</th>
                      <th className="px-6 py-3 text-right text-xs font-semibold text-gray-500">Avg/session</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {report.leaderboard.map((emp, i) => (
                      <tr key={emp.name} className="hover:bg-gray-50">
                        <td className="px-6 py-3 text-gray-400 font-medium text-sm">
                          {i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i + 1}.`}
                        </td>
                        <td className="px-6 py-3 font-medium text-gray-900">{emp.name}</td>
                        <td className="px-6 py-3 text-right text-gray-600">{emp.sessions}</td>
                        <td className="px-6 py-3 text-right text-gray-600">{emp.minutes}</td>
                        <td className="px-6 py-3 text-right text-gray-400">
                          {emp.sessions > 0 ? Math.round(emp.minutes / emp.sessions) : 0} min
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </div>
    </AdminLayout>
  )
}
