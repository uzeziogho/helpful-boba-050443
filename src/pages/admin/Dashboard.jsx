import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Users, Activity, Trophy, TrendingUp, ArrowRight, Plus } from 'lucide-react'
import AdminLayout from '../../components/AdminLayout'
import StatsCard from '../../components/StatsCard'
import ChallengeCard from '../../components/ChallengeCard'
import { useAuth } from '../../contexts/AuthContext'
import { useCompany } from '../../contexts/CompanyContext'
import toast from 'react-hot-toast'

export default function AdminDashboard() {
  const { userProfile } = useAuth()
  const { company, fetchCompany, getParticipationReport, getChallenges, toggleChallenge } = useCompany()
  const [report, setReport] = useState(null)
  const [challenges, setChallenges] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!userProfile?.companyId) return
    async function load() {
      try {
        if (!company) await fetchCompany(userProfile.companyId)
        const [rep, chal] = await Promise.all([
          getParticipationReport(userProfile.companyId),
          getChallenges(userProfile.companyId),
        ])
        setReport(rep)
        setChallenges(chal)
      } catch {
        toast.error('Failed to load dashboard data.')
      }
      setLoading(false)
    }
    load()
  }, [userProfile?.companyId])

  async function handleToggle(id, isActive) {
    try {
      await toggleChallenge(id, isActive)
      setChallenges((prev) => prev.map((c) => (c.id === id ? { ...c, isActive } : c)))
      toast.success(`Challenge ${isActive ? 'activated' : 'deactivated'}.`)
    } catch {
      toast.error('Failed to update challenge.')
    }
  }

  const activeChallenges = challenges.filter((c) => c.isActive)

  return (
    <AdminLayout>
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome back{userProfile?.displayName ? `, ${userProfile.displayName.split(' ')[0]}` : ''}
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              {company?.name ? `${company.name} · ` : ''}HR Admin Dashboard
            </p>
          </div>
          <Link to="/admin/challenges" className="btn-primary flex items-center gap-2">
            <Plus className="w-4 h-4" />
            New challenge
          </Link>
        </div>

        {/* Stats */}
        {loading ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[...Array(4)].map((_, i) => <div key={i} className="card animate-pulse h-24 bg-gray-100" />)}
          </div>
        ) : report && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatsCard label="Total employees" value={report.totalEmployees} icon={Users} color="brand" />
            <StatsCard label="Active participants" value={report.activeParticipants} sub={`${report.participationRate}% participation`} icon={TrendingUp} color="green" />
            <StatsCard label="Workout sessions" value={report.totalSessions.toLocaleString()} sub="All time" icon={Activity} color="orange" />
            <StatsCard label="Active challenges" value={activeChallenges.length} icon={Trophy} color="purple" />
          </div>
        )}

        {/* Participation banner */}
        {report && (
          <div className="card mb-8 bg-gradient-to-r from-brand-600 to-brand-700 border-0 text-white">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-brand-200 text-sm font-medium">Current participation rate</p>
                <p className="text-4xl font-bold mt-1">{report.participationRate}%</p>
                <p className="text-brand-200 text-sm mt-1">
                  {report.activeParticipants} of {report.totalEmployees} employees active
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-48 bg-brand-800 rounded-full h-3">
                  <div className="bg-white h-3 rounded-full" style={{ width: `${report.participationRate}%` }} />
                </div>
                <Link to="/admin/reports" className="text-white text-sm flex items-center gap-1 hover:underline">
                  View full report <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Active challenges */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-gray-900">Active challenges</h2>
              <Link to="/admin/challenges" className="text-xs text-brand-600 hover:underline flex items-center gap-1">
                Manage <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            {loading ? (
              <div className="space-y-3">
                {[...Array(2)].map((_, i) => <div key={i} className="card h-24 animate-pulse bg-gray-100" />)}
              </div>
            ) : activeChallenges.length === 0 ? (
              <div className="card text-center py-10 border-dashed">
                <Trophy className="w-8 h-8 text-gray-300 mx-auto mb-3" />
                <p className="text-sm text-gray-500 mb-4">No active challenges yet.</p>
                <Link to="/admin/challenges" className="btn-primary text-sm">Create your first challenge</Link>
              </div>
            ) : (
              <div className="space-y-3">
                {activeChallenges.slice(0, 3).map((c) => (
                  <ChallengeCard key={c.id} challenge={c} onToggle={handleToggle} />
                ))}
              </div>
            )}
          </div>

          {/* Top performers */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-gray-900">Top performers</h2>
              <Link to="/admin/reports" className="text-xs text-brand-600 hover:underline flex items-center gap-1">
                Full report <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            {loading ? (
              <div className="card animate-pulse h-48 bg-gray-100" />
            ) : !report?.leaderboard?.length ? (
              <div className="card text-center py-10 border-dashed">
                <Activity className="w-8 h-8 text-gray-300 mx-auto mb-3" />
                <p className="text-sm text-gray-500">No workout data yet.</p>
              </div>
            ) : (
              <div className="card overflow-hidden p-0">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 border-b border-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500">#</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500">Employee</th>
                      <th className="px-4 py-3 text-right text-xs font-semibold text-gray-500">Sessions</th>
                      <th className="px-4 py-3 text-right text-xs font-semibold text-gray-500">Minutes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {report.leaderboard.slice(0, 5).map((emp, i) => (
                      <tr key={emp.name} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-gray-400 font-medium text-xs">
                          {i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i + 1}.`}
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900">{emp.name}</td>
                        <td className="px-4 py-3 text-right text-gray-600">{emp.sessions}</td>
                        <td className="px-4 py-3 text-right text-gray-600">{emp.minutes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
