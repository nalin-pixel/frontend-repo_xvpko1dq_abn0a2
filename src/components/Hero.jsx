import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Play, Star } from 'lucide-react'

export default function Hero() {
  const { scrollY } = useScroll()
  const yParallax = useTransform(scrollY, [0, 400], [0, -40])
  const yParallaxSlow = useTransform(scrollY, [0, 400], [0, -20])

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
      {/* Core background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      {/* Aurora blobs */}
      <motion.div
        aria-hidden
        className="absolute -top-32 -left-32 w-[60vw] h-[60vw] rounded-full blur-3xl opacity-30"
        style={{ y: yParallax }}
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        <div className="w-full h-full rounded-full bg-[conic-gradient(at_top_left,_#22d3ee,_#6366f1,_#22d3ee)]" />
      </motion.div>
      <motion.div
        aria-hidden
        className="absolute -bottom-40 -right-40 w-[55vw] h-[55vw] rounded-full blur-3xl opacity-25"
        style={{ y: yParallaxSlow }}
        initial={{ rotate: 0 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
      >
        <div className="w-full h-full rounded-full bg-[conic-gradient(at_bottom_right,_#8b5cf6,_#0ea5e9,_#8b5cf6)]" />
      </motion.div>

      {/* Fine grid + vignette */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)',
          backgroundSize: '36px 36px'
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(80% 60% at 50% 100%, rgba(0,0,0,0.7), transparent 60%)'
        }}
      />

      {/* Background image with cinematic treatment */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <img
          src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2000&auto=format&fit=crop"
          alt="Studio console and monitors"
          className="w-full h-full object-cover opacity-15 mix-blend-lighten"
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-4 md:px-6 py-28">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          {/* Left: Messaging */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur">
              <Star className="h-3.5 w-3.5 text-amber-400" />
              Trusted growth partner for producers
            </div>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
              <span className="bg-gradient-to-b from-white to-slate-300 bg-clip-text text-transparent">Path One</span>
            </h1>
            <p className="mt-5 text-lg md:text-xl text-slate-200/90 max-w-xl">
              Strategy, branding, and execution for music producers building long-term growth.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a href="#contact" className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-900 font-semibold px-6 py-3 shadow-lg shadow-cyan-500/20 hover:shadow-indigo-500/30 transition-all">
                <span className="text-slate-950">Book a Free Strategy Call</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="#about" className="inline-flex items-center justify-center rounded-full border border-white/15 text-white px-6 py-3 font-medium hover:border-white/30 transition-colors">
                Learn more
              </a>
            </div>

            {/* Social proof */}
            <div className="mt-8 flex items-center gap-4 text-sm text-slate-300/90">
              <div className="flex -space-x-2">
                {["MJ","AK","LT","RS"].map((i) => (
                  <div key={i} className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 ring-2 ring-slate-950 text-[11px] font-semibold">{i}</div>
                ))}
              </div>
              <p>
                150+ producers advised • Avg +38% streams in 90 days
              </p>
            </div>
          </motion.div>

          {/* Right: Visual stack */}
          <div className="relative hidden lg:block">
            {/* Floating primary card */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="relative ml-auto w-[520px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl"
              style={{ y: yParallaxSlow }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-300/80">Release Strategy</p>
                  <h3 className="text-xl font-semibold text-white">Q1 Campaign</h3>
                </div>
                <span className="rounded-full bg-emerald-400/20 text-emerald-300 text-xs px-3 py-1">Live</span>
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between text-xs text-slate-300/80">
                  <span>Goals</span>
                  <span>82%</span>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500" />
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { label: 'Saves', value: '12.4k' },
                  { label: 'Streams', value: '3.1M' },
                  { label: 'Reach', value: '9.8M' }
                ].map((m) => (
                  <div key={m.label} className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <p className="text-[11px] uppercase tracking-wide text-slate-300/70">{m.label}</p>
                    <p className="mt-1 text-lg font-semibold text-white">{m.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Secondary floating chip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="absolute -left-8 top-10 rounded-2xl border border-white/10 bg-white/10 backdrop-blur p-3 shadow-xl"
              style={{ y: yParallax }}
            >
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500 flex items-center justify-center text-slate-950">
                  <Play className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-300/80">Content Sprint</p>
                  <p className="text-sm font-semibold text-white">+21% CTR</p>
                </div>
              </div>
            </motion.div>

            {/* Accent glow */}
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-60 w-60 rounded-full bg-cyan-400/20 blur-3xl" />
          </div>
        </div>

        {/* Scroll cue */}
        <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block">
          <div className="flex flex-col items-center text-slate-300/70 text-xs">
            <div className="h-8 w-[1px] bg-gradient-to-b from-transparent via-white/40 to-transparent" />
            Scroll
          </div>
        </div>
      </div>
    </section>
  )
}
