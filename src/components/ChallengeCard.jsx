import { Trophy, Calendar, Target } from 'lucide-react'

const typeLabels = {
  steps: 'Steps',
  minutes: 'Minutes',
  workouts: 'Workouts',
  distance: 'Distance (km)',
}

export default function ChallengeCard({ challenge, onToggle }) {
  const start = challenge.startDate ? new Date(challenge.startDate).toLocaleDateString() : '—'
  const end = challenge.endDate ? new Date(challenge.endDate).toLocaleDateString() : '—'

  return (
    <div className="card">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <div className="w-9 h-9 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
            <Trophy className="w-4 h-4 text-brand-600" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 text-sm truncate">{challenge.title}</h3>
            {challenge.description && (
              <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{challenge.description}</p>
            )}
            <div className="flex items-center gap-3 mt-2 flex-wrap">
              <span className="flex items-center gap-1 text-xs text-gray-400">
                <Target className="w-3 h-3" />
                {challenge.goal?.toLocaleString()} {typeLabels[challenge.type] || challenge.type}
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-400">
                <Calendar className="w-3 h-3" />
                {start} – {end}
              </span>
            </div>
          </div>
        </div>

        {onToggle && (
          <button
            onClick={() => onToggle(challenge.id, !challenge.isActive)}
            className={`text-xs px-2.5 py-1 rounded-full font-medium flex-shrink-0 transition-colors ${
              challenge.isActive
                ? 'bg-green-50 text-green-700 hover:bg-green-100'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            {challenge.isActive ? 'Active' : 'Inactive'}
          </button>
        )}
      </div>
    </div>
  )
}
