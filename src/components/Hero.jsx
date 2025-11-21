import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient + subtle grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950"/>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.15),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.15),transparent_35%)]"/>
      <div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage:'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize:'40px 40px'}} />

      {/* Hero image */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1920&auto=format&fit=crop" alt="Cinematic mountain path" className="w-full h-full object-cover opacity-20" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-24 w-full">
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.7}} className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">Path One</h1>
          <p className="mt-6 text-lg md:text-xl text-slate-200 max-w-2xl">
            Strategy, branding, and execution for music producers building long-term growth.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-6 py-3 font-medium hover:bg-slate-200 transition-colors">
              Book a Free Strategy Call
            </a>
            <a href="#about" className="inline-flex items-center justify-center rounded-full border border-white/20 text-white px-6 py-3 font-medium hover:border-white/40 transition-colors">
              Learn more
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
