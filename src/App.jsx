import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext'

import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import CompanySetup from './pages/CompanySetup'
import AcceptInvite from './pages/AcceptInvite'

import AdminDashboard from './pages/admin/Dashboard'
import AdminEmployees from './pages/admin/Employees'
import AdminChallenges from './pages/admin/Challenges'
import AdminReports from './pages/admin/Reports'

import EmployeeDashboard from './pages/employee/Dashboard'
import EmployeeWorkouts from './pages/employee/Workouts'
import EmployeeChallenges from './pages/employee/Challenges'
import EmployeeLeaderboard from './pages/employee/Leaderboard'

function LoadingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-8 h-8 border-4 border-brand-600 border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

function RequireAuth({ children }) {
  const { currentUser, authLoading } = useAuth()
  if (authLoading) return <LoadingScreen />
  if (!currentUser) return <Navigate to="/login" replace />
  return children
}

function RequireAdmin({ children }) {
  const { currentUser, userProfile, authLoading } = useAuth()
  if (authLoading) return <LoadingScreen />
  if (!currentUser) return <Navigate to="/login" replace />
  if (currentUser && userProfile === null) return <LoadingScreen />
  if (userProfile?.role !== 'admin') return <Navigate to="/me" replace />
  return children
}

function RequireEmployee({ children }) {
  const { currentUser, userProfile, authLoading } = useAuth()
  if (authLoading) return <LoadingScreen />
  if (!currentUser) return <Navigate to="/login" replace />
  if (currentUser && userProfile === null) return <LoadingScreen />
  if (userProfile?.role === 'admin') return <Navigate to="/admin" replace />
  return children
}

export default function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/invite/:token" element={<AcceptInvite />} />

      {/* Onboarding — auth required, no role yet */}
      <Route path="/setup" element={<RequireAuth><CompanySetup /></RequireAuth>} />

      {/* Admin routes */}
      <Route path="/admin" element={<RequireAdmin><AdminDashboard /></RequireAdmin>} />
      <Route path="/admin/employees" element={<RequireAdmin><AdminEmployees /></RequireAdmin>} />
      <Route path="/admin/challenges" element={<RequireAdmin><AdminChallenges /></RequireAdmin>} />
      <Route path="/admin/reports" element={<RequireAdmin><AdminReports /></RequireAdmin>} />

      {/* Employee routes */}
      <Route path="/me" element={<RequireEmployee><EmployeeDashboard /></RequireEmployee>} />
      <Route path="/me/workouts" element={<RequireEmployee><EmployeeWorkouts /></RequireEmployee>} />
      <Route path="/me/challenges" element={<RequireEmployee><EmployeeChallenges /></RequireEmployee>} />
      <Route path="/me/leaderboard" element={<RequireEmployee><EmployeeLeaderboard /></RequireEmployee>} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
