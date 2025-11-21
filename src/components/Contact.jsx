import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      // Simulate success
      await new Promise((r) => setTimeout(r, 800))
      setStatus('success')
      e.currentTarget.reset()
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Ready to grow your streaming platforms? Let’s Build Your Path.</h2>
            <p className="mt-4 text-slate-300/90 max-w-xl">Book a free strategy call or leave a message. We’ll get back within 24 hours.</p>

            <div className="mt-6 flex items-center gap-4 text-slate-300/90">
              <a href="#" className="underline">hello@pathone.co</a>
              <span className="opacity-30">•</span>
              <a href="#" className="underline">Instagram</a>
              <span className="opacity-30">•</span>
              <a href="#" className="underline">Twitter</a>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm text-slate-300/90 mb-1">Name</label>
                <input name="name" required className="w-full bg-transparent border border-white/15 rounded-lg px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:border-white/30" placeholder="Your name"/>
              </div>
              <div>
                <label className="block text-sm text-slate-300/90 mb-1">Email</label>
                <input name="email" type="email" required className="w-full bg-transparent border border-white/15 rounded-lg px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:border-white/30" placeholder="you@email.com"/>
              </div>
              <div>
                <label className="block text-sm text-slate-300/90 mb-1">Message</label>
                <textarea name="message" rows="4" required className="w-full bg-transparent border border-white/15 rounded-lg px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:border-white/30" placeholder="Tell us about your goals"/>
              </div>
              <button disabled={status==='loading'} className="inline-flex justify-center rounded-full bg-white text-slate-900 px-5 py-2 font-medium hover:bg-slate-200 disabled:opacity-60">
                {status==='loading' ? 'Sending…' : 'Get in Touch'}
              </button>
              {status==='success' && <p className="text-emerald-400 text-sm">Thanks! We’ll be in touch shortly.</p>}
              {status==='error' && <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>}
            </div>
          </form>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-sm text-slate-400 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Path One • All rights reserved</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </section>
  )
}
