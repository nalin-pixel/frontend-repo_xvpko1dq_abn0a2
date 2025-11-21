import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const { scrollY } = useScroll()
  const yParallax = useTransform(scrollY, [0, 400], [0, -50])
  const scaleParallax = useTransform(scrollY, [0, 600], [1, 1.06])

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
      {/* Background image: cinematic mountain path */}
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ y: yParallax, scale: scaleParallax }}
        initial={{ scale: 1.04, opacity: 0.85 }}
        animate={{ scale: 1.02, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2400&auto=format&fit=crop"
          alt="A lone figure walking a mountain path at dawn"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Color grade + vignette for a filmic look */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-slate-950/70 via-slate-900/20 to-slate-950/80" />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(120% 80% at 50% 120%, rgba(2,6,23,0.85) 20%, transparent 60%)'
        }}
      />

      {/* Subtle film grain */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            'url(https://grainy-gradients.vercel.app/noise.svg)'
        }}
      />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-6xl px-4 md:px-6 py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-b from-white to-slate-300 bg-clip-text text-transparent">
              Path One
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-200/95 max-w-2xl">
            Strategy, branding, and execution for music producers building long-term growth.
          </p>

          <div className="mt-8">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-6 py-3 font-semibold shadow-lg shadow-black/20 hover:bg-slate-100 transition-colors"
            >
              Book a Free Strategy Call
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
