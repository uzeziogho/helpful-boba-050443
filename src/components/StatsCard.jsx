export default function StatsCard({ label, value, sub, icon: Icon, color = 'brand' }) {
  const colors = {
    brand: 'bg-brand-50 text-brand-600',
    green: 'bg-green-50 text-green-600',
    orange: 'bg-orange-50 text-orange-600',
    purple: 'bg-purple-50 text-purple-600',
  }
  return (
    <div className="card flex items-start gap-4">
      {Icon && (
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${colors[color]}`}>
          <Icon className="w-5 h-5" />
        </div>
      )}
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-2xl font-bold text-gray-900 mt-0.5">{value}</p>
        {sub && <p className="text-xs text-gray-400 mt-0.5">{sub}</p>}
      </div>
    </div>
  )
}
