import { useEffect, useState } from 'react'
import { Trophy } from 'lucide-react'
import EmployeeLayout from '../../components/EmployeeLayout'
import ChallengeCard from '../../components/ChallengeCard'
import { useAuth } from '../../contexts/AuthContext'
import { useCompany } from '../../contexts/CompanyContext'
import toast from 'react-hot-toast'

export default function EmployeeChallenges() {
  const { currentUser, userProfile } = useAuth()
  const { getChallenges, getMyWorkouts } = useCompany()
  const [challenges, setChallenges] = useState([])
  const [workouts, setWorkouts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      if (!userProfile?.companyId || !currentUser) return
      try {
        const [chal, wks] = await Promise.all([
          getChallenges(userProfile.companyId),
          getMyWorkouts(currentUser.uid),
        ])
        setChallenges(chal)
        setWorkouts(wks)
      } catch {
        toast.error('Failed to load challenges.')
      }
      setLoading(false)
    }
    load()
  }, [userProfile?.companyId, currentUser?.uid])

  function getChallengeProgress(challenge) {
    const start = challenge.startDate?.toDate ? challenge.startDate.toDate() : new Date(challenge.startDate)
    const end = challenge.endDate?.toDate ? challenge.endDate.toDate() : new Date(challenge.endDate)
    const relevant = workouts.filter((w) => {
      const d = w.createdAt?.toDate ? w.createdAt.toDate() : new Date(w.createdAt)
      return d >= start && d <= end
    })
    if (challenge.type === 'workouts') return relevant.length
    if (challenge.type === 'minutes') return relevant.reduce((s, w) => s + (w.duration || 0), 0)
    return 0
  }

  const active = challenges.filter((c) => c.isActive)
  const past = challenges.filter((c) => !c.isActive)

  return (
    <EmployeeLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Wellness Challenges</h1>
          <p className="text-gray-500 text-sm mt-1">
            {active.length} active challenge{active.length !== 1 ? 's' : ''} from your company
          </p>
        </div>

        {loading ? (
          <div className="space-y-3">{[...Array(3)].map((_, i) => <div key={i} className="card h-28 animate-pulse bg-gray-100" />)}</div>
        ) : (
          <>
            {active.length === 0 && past.length === 0 ? (
              <div className="card text-center py-16 border-dashed">
                <Trophy className="w-12 h-12 text-gray-200 mx-auto mb-4" />
                <p className="text-gray-500 font-medium mb-1">No challenges yet</p>
                <p className="text-sm text-gray-400">Your HR admin will create wellness challenges here.</p>
              </div>
            ) : (
              <>
                {active.length > 0 && (
                  <div className="mb-8">
                    <h2 className="font-semibold text-gray-900 mb-3">Active challenges</h2>
                    <div className="space-y-3">
                      {active.map((c) => (
                        <ChallengeCard key={c.id} challenge={c} progress={getChallengeProgress(c)} />
                      ))}
                    </div>
                  </div>
                )}
                {past.length > 0 && (
                  <div>
                    <h2 className="font-semibold text-gray-700 mb-3 text-sm">Past challenges</h2>
                    <div className="space-y-3 opacity-60">
                      {past.map((c) => (
                        <ChallengeCard key={c.id} challenge={c} progress={getChallengeProgress(c)} />
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </EmployeeLayout>
  )
}
