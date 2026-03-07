import { useEffect, useState } from 'react'
import { Trophy } from 'lucide-react'
import EmployeeLayout from '../../components/EmployeeLayout'
import ChallengeCard from '../../components/ChallengeCard'
import { useAuth } from '../../contexts/AuthContext'
import { useCompany } from '../../contexts/CompanyContext'
import toast from 'react-hot-toast'

export default function EmployeeChallenges() {
  const { userProfile } = useAuth()
  const { getChallenges } = useCompany()
  const [challenges, setChallenges] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!userProfile?.companyId) return
    getChallenges(userProfile.companyId)
      .then(setChallenges)
      .catch(() => toast.error('Failed to load challenges.'))
      .finally(() => setLoading(false))
  }, [userProfile?.companyId])

  const active = challenges.filter((c) => c.isActive)
  const past = challenges.filter((c) => !c.isActive)

  return (
    <EmployeeLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Challenges</h1>
          <p className="text-gray-500 text-sm mt-1">{active.length} active right now</p>
        </div>

        {loading ? (
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => <div key={i} className="card h-24 animate-pulse bg-gray-100" />)}
          </div>
        ) : challenges.length === 0 ? (
          <div className="card text-center py-20 border-dashed">
            <Trophy className="w-10 h-10 text-gray-200 mx-auto mb-3" />
            <p className="font-medium text-gray-900 mb-1">No challenges yet</p>
            <p className="text-sm text-gray-500">Your HR admin will create challenges for the team.</p>
          </div>
        ) : (
          <>
            {active.length > 0 && (
              <div className="mb-8">
                <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Active</h2>
                <div className="space-y-3">
                  {active.map((c) => <ChallengeCard key={c.id} challenge={c} />)}
                </div>
              </div>
            )}
            {past.length > 0 && (
              <div>
                <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Past</h2>
                <div className="space-y-3">
                  {past.map((c) => <ChallengeCard key={c.id} challenge={c} />)}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </EmployeeLayout>
  )
}
