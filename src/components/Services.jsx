import { Music2, TrendingUp, Handshake, Coins } from 'lucide-react'

const services = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Streaming Platform Strategy & Monetisation',
    desc: 'Build a tailored plan to grow your presence across streaming platforms. From release schedules to platform optimisation, we make sure your music reaches the right audience, consistently.',
  },
  {
    icon: <Music2 className="w-6 h-6" />,
    title: 'Online Beats Strategy & Release Planning',
    desc: 'Develop and optimise your online beat store strategy — from release planning and pricing to marketing funnels that convert listeners into loyal customers.',
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    title: 'Placement Negotiation',
    desc: 'We help producers navigate negotiations for placements and collaborations — ensuring fair, transparent, and beneficial outcomes every time.',
  },
  {
    icon: <Coins className="w-6 h-6" />,
    title: 'Royalty Collection',
    desc: 'Set up and manage your royalty infrastructure so you never miss out on income. From publishing to neighbouring rights, we make sure you’re paid properly for your work.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between gap-6 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">What We Do</h2>
          <a href="#contact" className="hidden md:inline-flex items-center rounded-full bg-white text-slate-900 px-5 py-2 font-medium hover:bg-slate-200">QUOTE</a>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6 transition hover:border-white/20">
              <div className="text-white/90">{s.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-slate-300/90 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 md:hidden">
          <a href="#contact" className="inline-flex items-center rounded-full bg-white text-slate-900 px-5 py-2 font-medium hover:bg-slate-200">QUOTE</a>
        </div>
      </div>
    </section>
  )
}
