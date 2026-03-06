import { Trophy, Clock, Target } from 'lucide-react'

const TYPE_LABELS = {
  workouts: 'Workout sessions',
  minutes: 'Active minutes',
  streak: 'Day streak',
}

function isActive(challenge) {
  const now = new Date()
  const start = challenge.startDate?.toDate ? challenge.startDate.toDate() : new Date(challenge.startDate)
  const end = challenge.endDate?.toDate ? challenge.endDate.toDate() : new Date(challenge.endDate)
  return now >= start && now <= end && challenge.isActive
}

function daysLeft(challenge) {
  const end = challenge.endDate?.toDate ? challenge.endDate.toDate() : new Date(challenge.endDate)
  const diff = Math.ceil((end - new Date()) / (1000 * 60 * 60 * 24))
  return diff > 0 ? diff : 0
}

export default function ChallengeCard({ challenge, progress = null, onToggle = null }) {
  const active = isActive(challenge)
  const left = daysLeft(challenge)

  return (
    <div className={`card border-l-4 ${active ? 'border-l-brand-500' : 'border-l-gray-200'}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${active ? 'bg-brand-50' : 'bg-gray-100'}`}>
            <Trophy className={`w-4 h-4 ${active ? 'text-brand-600' : 'text-gray-400'}`} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-gray-900 text-sm truncate">{challenge.title}</p>
            <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{challenge.description}</p>
            <div className="flex items-center gap-3 mt-2 flex-wrap">
              <span className="flex items-center gap-1 text-xs text-gray-500">
                <Target className="w-3 h-3" />
                Goal: {challenge.goal} {TYPE_LABELS[challenge.type] || challenge.type}
              </span>
              {left > 0 && (
                <span className="flex items-center gap-1 text-xs text-gray-500">
                  <Clock className="w-3 h-3" />
                  {left} day{left !== 1 ? 's' : ''} left
                </span>
              )}
              {left === 0 && <span className="text-xs text-red-500 font-medium">Ended</span>}
            </div>

            {/* Progress bar (employee view) */}
            {progress !== null && (
              <div className="mt-3">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                  <span>Your progress</span>
                  <span>{Math.min(progress, challenge.goal)} / {challenge.goal}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div
                    className="bg-brand-600 h-1.5 rounded-full transition-all"
                    style={{ width: `${Math.min((progress / challenge.goal) * 100, 100)}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col items-end gap-2 flex-shrink-0">
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
            active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
          }`}>
            {active ? 'Active' : 'Inactive'}
          </span>
          {onToggle && (
            <button
              onClick={() => onToggle(challenge.id, !challenge.isActive)}
              className="text-xs text-gray-400 hover:text-gray-700 underline"
            >
              {challenge.isActive ? 'Deactivate' : 'Activate'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
