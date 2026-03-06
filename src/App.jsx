import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext'
import { BillingProvider } from './contexts/BillingContext'

import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import CompanySetup from './pages/CompanySetup'
import AcceptInvite from './pages/AcceptInvite'

import AdminDashboard from './pages/admin/Dashboard'
import AdminEmployees from './pages/admin/Employees'
import AdminChallenges from './pages/admin/Challenges'
import AdminReports from './pages/admin/Reports'
import AdminBilling from './pages/admin/Billing'

import EmployeeDashboard from './pages/employee/Dashboard'
import EmployeeWorkouts from './pages/employee/Workouts'
import EmployeeChallenges from './pages/employee/Challenges'
import EmployeeLeaderboard from './pages/employee/Leaderboard'

function RequireAuth({ children }) {
  const { currentUser } = useAuth()
  if (!currentUser) return <Navigate to="/login" replace />
  return children
}

function RequireRole({ role, children }) {
  const { userProfile } = useAuth()
  if (!userProfile) return <Navigate to="/login" replace />
  if (userProfile.role !== role && !(role === 'admin' && userProfile.role === 'manager')) {
    return <Navigate to="/dashboard" replace />
  }
  return children
}

function RootRedirect() {
  const { currentUser, userProfile } = useAuth()
  if (!currentUser) return <Navigate to="/" replace />
  if (!userProfile?.companyId) return <Navigate to="/setup" replace />
  if (userProfile.role === 'admin' || userProfile.role === 'manager') {
    return <Navigate to="/admin" replace />
  }
  return <Navigate to="/dashboard" replace />
}

export default function App() {
  return (
    <BillingProvider>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/invite/:token" element={<AcceptInvite />} />

        {/* Onboarding */}
        <Route path="/setup" element={<RequireAuth><CompanySetup /></RequireAuth>} />

        {/* Role redirect */}
        <Route path="/dashboard" element={<RequireAuth><RootRedirect /></RequireAuth>} />

        {/* Admin / HR */}
        <Route path="/admin" element={<RequireAuth><RequireRole role="admin"><AdminDashboard /></RequireRole></RequireAuth>} />
        <Route path="/admin/employees" element={<RequireAuth><RequireRole role="admin"><AdminEmployees /></RequireRole></RequireAuth>} />
        <Route path="/admin/challenges" element={<RequireAuth><RequireRole role="admin"><AdminChallenges /></RequireRole></RequireAuth>} />
        <Route path="/admin/reports" element={<RequireAuth><RequireRole role="admin"><AdminReports /></RequireRole></RequireAuth>} />
        <Route path="/admin/billing" element={<RequireAuth><RequireRole role="admin"><AdminBilling /></RequireRole></RequireAuth>} />

        {/* Employee */}
        <Route path="/me" element={<RequireAuth><EmployeeDashboard /></RequireAuth>} />
        <Route path="/me/workouts" element={<RequireAuth><EmployeeWorkouts /></RequireAuth>} />
        <Route path="/me/challenges" element={<RequireAuth><EmployeeChallenges /></RequireAuth>} />
        <Route path="/me/leaderboard" element={<RequireAuth><EmployeeLeaderboard /></RequireAuth>} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BillingProvider>
  )
}
