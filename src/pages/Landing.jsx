import { Link } from 'react-router-dom'
import { CheckCircle, BarChart2, Users, Zap, Shield, TrendingUp } from 'lucide-react'
import { PLANS } from '../contexts/CompanyContext'

const FEATURES = [
  {
    icon: Users,
    title: 'Team Wellness Challenges',
    desc: 'Create company-wide and department-level fitness challenges that drive participation and friendly competition.',
  },
  {
    icon: BarChart2,
    title: 'HR Analytics Dashboard',
    desc: 'Track participation rates, active employees, and wellness trends with real-time reporting designed for HR teams.',
  },
  {
    icon: Zap,
    title: 'Employee Accountability',
    desc: 'Employees log workouts, track streaks, and see how they rank — building habits that stick.',
  },
  {
    icon: TrendingUp,
    title: 'Leaderboards & Recognition',
    desc: 'Public leaderboards and milestone badges keep employees motivated and engaged month over month.',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    desc: 'Granular privacy controls. Employees choose what to share. HR only sees aggregate participation data.',
  },
  {
    icon: CheckCircle,
    title: 'Easy Onboarding',
    desc: 'Invite your team by email in minutes. No app downloads required — works entirely in the browser.',
  },
]

const STATS = [
  { value: '34%', label: 'Average reduction in sick days' },
  { value: '2.4×', label: 'ROI on wellness spend' },
  { value: '78%', label: 'Employee participation rate' },
]

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-gray-100 sticky top-0 bg-white z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-gray-900 text-lg">FitSquad <span className="text-brand-600">Business</span></span>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/login" className="text-sm text-gray-600 hover:text-gray-900">Sign in</Link>
            <Link to="/register" className="btn-primary text-sm">Start free trial</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full mb-6">
          <span>Corporate Wellness Platform</span>
        </div>
        <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
          Healthy teams are<br />
          <span className="text-brand-600">more productive teams.</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
          FitSquad Business gives HR teams the tools to run engaging wellness programs, track participation, and prove ROI — without the enterprise price tag.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link to="/register" className="btn-primary px-8 py-3 text-base">
            Start your 30-day free trial
          </Link>
          <a href="#pricing" className="btn-secondary px-8 py-3 text-base">
            See pricing
          </a>
        </div>
        <p className="text-sm text-gray-400 mt-4">No credit card required · Cancel anytime</p>
      </section>

      {/* Stats */}
      <section className="bg-brand-600">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-bold text-white mb-1">{s.value}</div>
              <div className="text-brand-200 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything your HR team needs</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Built specifically for companies that want results, not just a checkbox on their benefits page.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-xl border border-gray-100 hover:border-brand-200 hover:shadow-sm transition-all">
              <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-brand-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, per-seat pricing</h2>
            <p className="text-gray-500">Billed monthly per active employee. Scale up or down anytime.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(PLANS).map(([key, plan]) => (
              <div
                key={key}
                className={`bg-white rounded-2xl p-8 border-2 ${key === 'growth' ? 'border-brand-600 shadow-lg relative' : 'border-gray-200'}`}
              >
                {key === 'growth' && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-400 text-sm">/employee/month</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">
                    {plan.seats === Infinity ? 'Unlimited employees' : `Up to ${plan.seats} employees`}
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/register"
                  className={`block text-center py-3 rounded-lg font-medium text-sm transition-colors ${
                    key === 'growth'
                      ? 'bg-brand-600 text-white hover:bg-brand-700'
                      : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {key === 'enterprise' ? 'Contact sales' : 'Start free trial'}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-8">
            All plans include a 30-day free trial. No credit card required to start.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to build a healthier team?</h2>
        <p className="text-gray-500 mb-8">Join companies already using FitSquad Business to improve employee wellbeing.</p>
        <Link to="/register" className="btn-primary px-10 py-4 text-base">
          Get started free
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-brand-600 rounded flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-semibold text-gray-700">FitSquad Business</span>
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} FitSquad Business. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
