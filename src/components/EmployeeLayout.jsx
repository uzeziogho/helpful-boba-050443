import { NavLink, useNavigate } from 'react-router-dom'
import { LayoutDashboard, Dumbbell, Trophy, BarChart2, LogOut, Zap } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { useCompany } from '../contexts/CompanyContext'
import toast from 'react-hot-toast'

const NAV = [
  { to: '/me', icon: LayoutDashboard, label: 'My Dashboard' },
  { to: '/me/workouts', icon: Dumbbell, label: 'Log Workout' },
  { to: '/me/challenges', icon: Trophy, label: 'Challenges' },
  { to: '/me/leaderboard', icon: BarChart2, label: 'Leaderboard' },
]

export default function EmployeeLayout({ children }) {
  const { currentUser, userProfile, logout } = useAuth()
  const { company } = useCompany()
  const navigate = useNavigate()

  async function handleLogout() {
    await logout()
    toast.success('Signed out')
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-60 bg-white border-r border-gray-200 flex flex-col fixed h-full">
        <div className="px-5 py-5 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-brand-600 rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-gray-900 text-sm">FitBud <span className="text-brand-600">Business</span></span>
          </div>
          {company && (
            <p className="text-xs text-gray-500 mt-2 truncate">{company.name}</p>
          )}
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {NAV.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/me'}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-brand-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`
              }
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="px-3 py-4 border-t border-gray-100">
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg">
            <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-brand-700 text-xs font-bold">
                {(userProfile?.displayName || currentUser?.email || 'U')[0].toUpperCase()}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-gray-900 truncate">{userProfile?.displayName || 'Employee'}</p>
              <p className="text-xs text-gray-400 truncate capitalize">{userProfile?.department || 'No department'}</p>
            </div>
            <button onClick={handleLogout} className="text-gray-400 hover:text-red-500 transition-colors" title="Sign out">
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      <main className="flex-1 ml-60 min-h-screen">
        {children}
      </main>
    </div>
  )
}
