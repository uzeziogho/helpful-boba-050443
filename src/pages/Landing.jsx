import { Link } from 'react-router-dom'
import { Zap, Users, Trophy, BarChart2, Check, ArrowRight, Star } from 'lucide-react'
import { PLANS } from '../contexts/CompanyContext'

const features = [
  { icon: Users, title: 'Team Management', desc: 'Invite employees, set departments, manage roles from one dashboard.' },
  { icon: Trophy, title: 'Wellness Challenges', desc: 'Create steps, workout, and distance challenges that keep teams motivated.' },
  { icon: BarChart2, title: 'Real-time Analytics', desc: 'Track participation rates, top performers, and wellness trends live.' },
]

const stats = [
  { value: '2,500+', label: 'Companies using FitSquad' },
  { value: '87%', label: 'Average participation rate' },
  { value: '$3,200', label: 'Average annual savings per employee' },
  { value: '4.9★', label: 'Average customer rating' },
]

const testimonials = [
  { name: 'Sarah Chen', role: 'VP People, Acme Corp', text: 'Our participation rate jumped from 22% to 91% in three months. The challenge system is genius.' },
  { name: 'Marcus Reid', role: 'HR Director, Globex', text: 'Setup took 10 minutes. The ROI data we got in the first quarter justified the entire annual cost.' },
  { name: 'Priya Nair', role: 'Head of Benefits, NovaTech', text: 'Employees actually look forward to Monday wellness updates. That alone is worth everything.' },
]

function PlanCard({ planKey, plan, highlighted }) {
  return (
    <div className={`rounded-2xl border-2 p-8 flex flex-col ${highlighted ? 'border-brand-600 bg-brand-600 text-white shadow-xl scale-105' : 'border-gray-200 bg-white'}`}>
      <div className="mb-6">
        <p className={`text-sm font-semibold uppercase tracking-wide mb-1 ${highlighted ? 'text-brand-200' : 'text-brand-600'}`}>{plan.name}</p>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold">${plan.price}</span>
          <span className={`text-sm ${highlighted ? 'text-brand-200' : 'text-gray-400'}`}>/seat/mo</span>
        </div>
        <p className={`text-sm mt-1 ${highlighted ? 'text-brand-200' : 'text-gray-500'}`}>
          {plan.seats === Infinity ? 'Unlimited employees' : `Up to ${plan.seats} employees`}
        </p>
      </div>

      <ul className="space-y-3 flex-1 mb-8">
        {plan.features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-sm">
            <Check className={`w-4 h-4 flex-shrink-0 ${highlighted ? 'text-brand-200' : 'text-brand-600'}`} />
            <span className={highlighted ? 'text-white' : 'text-gray-700'}>{f}</span>
          </li>
        ))}
      </ul>

      <Link
        to={`/register?plan=${planKey}`}
        className={`block text-center py-3 px-6 rounded-xl font-semibold text-sm transition-colors ${
          highlighted
            ? 'bg-white text-brand-600 hover:bg-brand-50'
            : 'bg-brand-600 text-white hover:bg-brand-700'
        }`}
      >
        Get started
      </Link>
    </div>
  )
}

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-gray-900">FitSquad <span className="text-brand-600">Business</span></span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-sm text-gray-600 hover:text-gray-900 font-medium">Sign in</Link>
            <Link to="/register" className="btn-primary text-sm">Start free trial</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
          <Star className="w-3.5 h-3.5" /> Trusted by 2,500+ companies
        </div>
        <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6 max-w-3xl mx-auto">
          Corporate wellness that actually <span className="text-brand-600">moves the needle</span>
        </h1>
        <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
          FitSquad Business gives HR teams the tools to run engaging wellness programs, track participation, and prove ROI — all in one platform.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link to="/register" className="btn-primary px-8 py-3 text-base flex items-center gap-2">
            Start free trial <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/login" className="text-gray-600 font-medium text-base hover:text-gray-900">
            Sign in to your account
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-3xl font-bold text-brand-600">{value}</p>
              <p className="text-sm text-gray-500 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything your wellness program needs</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">One platform for HR admins and employees — no complex setup required.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-2xl border border-gray-100 hover:border-brand-200 hover:shadow-sm transition-all">
              <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-50 py-24" id="pricing">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, transparent pricing</h2>
            <p className="text-gray-500 text-lg">Per seat, per month. No hidden fees. Cancel any time.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 items-center">
            {Object.entries(PLANS).map(([key, plan], i) => (
              <PlanCard key={key} planKey={key} plan={plan} highlighted={i === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Loved by HR teams</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(({ name, role, text }) => (
            <div key={name} className="card">
              <p className="text-gray-600 text-sm leading-relaxed mb-4">"{text}"</p>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{name}</p>
                <p className="text-gray-400 text-xs">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-600 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to build a healthier workplace?</h2>
          <p className="text-brand-200 text-lg mb-8">Join 2,500+ companies running wellness programs on FitSquad Business.</p>
          <Link to="/register" className="inline-flex items-center gap-2 bg-white text-brand-600 font-semibold px-8 py-3 rounded-xl hover:bg-brand-50 transition-colors">
            Start your free trial <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-brand-600 rounded-md flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-semibold text-gray-700 text-sm">FitSquad Business</span>
          </div>
          <p className="text-gray-400 text-xs">© {new Date().getFullYear()} FitSquad Business. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
