import { useEffect, useState } from 'react'
import { BarChart2, Download, Users, Activity, TrendingUp, Clock } from 'lucide-react'
import AdminLayout from '../../components/AdminLayout'
import StatsCard from '../../components/StatsCard'
import { useAuth } from '../../contexts/AuthContext'
import { useCompany } from '../../contexts/CompanyContext'
import { PLANS } from '../../contexts/CompanyContext'
import toast from 'react-hot-toast'

export default function AdminReports() {
  const { userProfile } = useAuth()
  const { company, getParticipationReport, getWorkouts, getEmployees } = useCompany()
  const [report, setReport] = useState(null)
  const [workouts, setWorkouts] = useState([])
  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      if (!userProfile?.companyId) return
      try {
        const [rep, wks, emps] = await Promise.all([
          getParticipationReport(userProfile.companyId),
          getWorkouts(userProfile.companyId, 200),
          getEmployees(userProfile.companyId),
        ])
        setReport(rep)
        setWorkouts(wks)
        setEmployees(emps)
      } catch {
        toast.error('Failed to load reports.')
      }
      setLoading(false)
    }
    load()
  }, [userProfile?.companyId])

  // Group workouts by week for trend display
  function getWeeklyTrend() {
    const weeks = {}
    workouts.forEach((w) => {
      const date = w.createdAt?.toDate ? w.createdAt.toDate() : new Date(w.createdAt)
      const week = getWeekKey(date)
      if (!weeks[week]) weeks[week] = { sessions: 0, minutes: 0 }
      weeks[week].sessions += 1
      weeks[week].minutes += w.duration || 0
    })
    return Object.entries(weeks)
      .sort(([a], [b]) => a.localeCompare(b))
      .slice(-8)
  }

  function getWeekKey(date) {
    const d = new Date(date)
    d.setHours(0, 0, 0, 0)
    d.setDate(d.getDate() - d.getDay())
    return d.toISOString().split('T')[0]
  }

  function getWorkoutsByType() {
    const types = {}
    workouts.forEach((w) => {
      types[w.type] = (types[w.type] || 0) + 1
    })
    return Object.entries(types).sort(([, a], [, b]) => b - a).slice(0, 6)
  }

  function exportCSV() {
    if (!report?.leaderboard?.length) {
      toast.error('No data to export.')
      return
    }
    const rows = [
      ['Employee', 'Sessions', 'Minutes'],
      ...report.leaderboard.map((e) => [e.name, e.sessions, e.minutes]),
    ]
    const csv = rows.map((r) => r.join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `wellness-report-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    URL.revokeObjectURL(url)
    toast.success('Report downloaded.')
  }

  const weeklyTrend = getWeeklyTrend()
  const maxWeeklySessions = Math.max(...weeklyTrend.map(([, v]) => v.sessions), 1)
  const workoutTypes = getWorkoutsByType()
  const maxTypeCount = Math.max(...workoutTypes.map(([, v]) => v), 1)

  const planDetails = company?.plan ? PLANS[company.plan] : null

  return (
    <AdminLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Wellness Reports</h1>
            <p className="text-gray-500 text-sm mt-1">Participation and activity data for your team</p>
          </div>
          <button onClick={exportCSV} className="btn-secondary flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export CSV
          </button>
        </div>

        {/* Plan usage banner */}
        {company && planDetails && (
          <div className="card bg-gray-50 border-gray-200 mb-6 flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-900">{company.name} · <span className="capitalize text-brand-600">{planDetails.name} Plan</span></p>
              <p className="text-xs text-gray-500 mt-0.5">
                {report?.totalEmployees || 0} / {planDetails.seats === Infinity ? '∞' : planDetails.seats} seats used ·{' '}
                ${planDetails.price}/employee/month
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-400">Monthly cost estimate</p>
              <p className="text-lg font-bold text-gray-900">
                ${(planDetails.price * (report?.totalEmployees || 0)).toLocaleString()}
              </p>
            </div>
          </div>
        )}

        {loading ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => <div key={i} className="card h-24 animate-pulse bg-gray-100" />)}
          </div>
        ) : report && (
          <>
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <StatsCard label="Total employees" value={report.totalEmployees} icon={Users} color="brand" />
              <StatsCard label="Active participants" value={report.activeParticipants} sub={`${report.participationRate}% rate`} icon={TrendingUp} color="green" />
              <StatsCard label="Total sessions" value={report.totalSessions.toLocaleString()} icon={Activity} color="orange" />
              <StatsCard label="Total minutes" value={`${(report.totalMinutes / 60).toFixed(0)}h`} sub={`${report.totalMinutes} minutes`} icon={Clock} color="purple" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Weekly trend */}
              <div className="card">
                <h2 className="font-semibold text-gray-900 mb-4">Weekly sessions trend</h2>
                {weeklyTrend.length === 0 ? (
                  <p className="text-sm text-gray-400 py-8 text-center">No workout data yet.</p>
                ) : (
                  <div className="flex items-end gap-2 h-32">
                    {weeklyTrend.map(([week, data]) => (
                      <div key={week} className="flex-1 flex flex-col items-center gap-1">
                        <span className="text-xs text-gray-500">{data.sessions}</span>
                        <div
                          className="w-full bg-brand-500 rounded-t-sm min-h-1"
                          style={{ height: `${(data.sessions / maxWeeklySessions) * 96}px` }}
                        />
                        <span className="text-xs text-gray-400 rotate-45 origin-left whitespace-nowrap" style={{ fontSize: '9px' }}>
                          {week.slice(5)}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Workout types */}
              <div className="card">
                <h2 className="font-semibold text-gray-900 mb-4">Top workout types</h2>
                {workoutTypes.length === 0 ? (
                  <p className="text-sm text-gray-400 py-8 text-center">No workout data yet.</p>
                ) : (
                  <div className="space-y-3">
                    {workoutTypes.map(([type, count]) => (
                      <div key={type}>
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="text-gray-700 capitalize">{type}</span>
                          <span className="text-gray-500">{count} sessions</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2">
                          <div
                            className="bg-brand-500 h-2 rounded-full"
                            style={{ width: `${(count / maxTypeCount) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Full leaderboard */}
            <div className="card overflow-hidden p-0">
              <div className="px-6 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-900">Full participation leaderboard</h2>
              </div>
              {!report.leaderboard?.length ? (
                <div className="p-8 text-center text-gray-400 text-sm">No workout activity recorded yet.</div>
              ) : (
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
                    {report.leaderboard.map((emp, i) => (
                      <tr key={emp.name} className="hover:bg-gray-50">
                        <td className="px-6 py-3 text-gray-400 font-medium text-xs">
                          {i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `#${i + 1}`}
                        </td>
                        <td className="px-6 py-3 font-medium text-gray-900">{emp.name}</td>
                        <td className="px-6 py-3 text-right text-gray-600">{emp.sessions}</td>
                        <td className="px-6 py-3 text-right text-gray-600">{emp.minutes} min</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </>
        )}
      </div>
    </AdminLayout>
  )
}
