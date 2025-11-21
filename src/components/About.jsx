export default function About() {
  return (
    <section id="about" className="relative py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">About</h2>
            <p className="mt-6 text-slate-200 leading-relaxed">
              At Path One, we guide producers to move beyond short-term wins and build something that lasts. We provide structure, clarity, and strategy so producers can grow their streaming platforms effectively.
            </p>
            <p className="mt-4 text-slate-300/90">
              Whether you’re looking to build traction on streaming platforms, managing placements, or enhance your online beats strategy, Path One will help you put the pieces together so you can focus on making great music.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              {['Authenticity','Transparency','Growth','Producer-first'].map((value) => (
                <div key={value} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-white font-medium">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
