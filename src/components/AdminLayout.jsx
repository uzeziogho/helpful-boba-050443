import { NavLink, useNavigate } from 'react-router-dom'
import { LayoutDashboard, Users, Trophy, BarChart2, CreditCard, LogOut, Zap, ChevronRight } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { useCompany } from '../contexts/CompanyContext'
import { PLANS } from '../contexts/CompanyContext'
import toast from 'react-hot-toast'

const NAV = [
  { to: '/admin', icon: LayoutDashboard, label: 'Overview' },
  { to: '/admin/employees', icon: Users, label: 'Employees' },
  { to: '/admin/challenges', icon: Trophy, label: 'Challenges' },
  { to: '/admin/reports', icon: BarChart2, label: 'Reports' },
  { to: '/admin/billing', icon: CreditCard, label: 'Billing' },
]

export default function AdminLayout({ children }) {
  const { currentUser, userProfile, logout } = useAuth()
  const { company } = useCompany()
  const navigate = useNavigate()

  async function handleLogout() {
    await logout()
    toast.success('Signed out')
    navigate('/')
  }

  const planLabel = company?.plan ? PLANS[company.plan]?.name : null

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-60 bg-white border-r border-gray-200 flex flex-col fixed h-full">
        {/* Logo */}
        <div className="px-5 py-5 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-brand-600 rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-gray-900 text-sm">FitSquad <span className="text-brand-600">Business</span></span>
          </div>
          {company && (
            <div className="mt-3">
              <p className="text-xs font-semibold text-gray-900 truncate">{company.name}</p>
              {planLabel && (
                <span className="text-xs text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full font-medium">
                  {planLabel} plan
                </span>
              )}
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {NAV.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/admin'}
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

        {/* User */}
        <div className="px-3 py-4 border-t border-gray-100">
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg">
            <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-brand-700 text-xs font-bold">
                {(userProfile?.displayName || currentUser?.email || 'A')[0].toUpperCase()}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-gray-900 truncate">{userProfile?.displayName || 'Admin'}</p>
              <p className="text-xs text-gray-400 truncate">{currentUser?.email}</p>
            </div>
            <button onClick={handleLogout} className="text-gray-400 hover:text-red-500 transition-colors" title="Sign out">
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 ml-60 min-h-screen">
        {children}
      </main>
    </div>
  )
}
