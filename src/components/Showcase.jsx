export default function Showcase() {
  const producers = [
    {
      name: 'Nova Keys',
      img: 'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=600&auto=format&fit=crop',
      link: '#'
    },
    {
      name: 'Echo Lane',
      img: 'https://images.unsplash.com/photo-1461782296612-0a9217714693?q=80&w=600&auto=format&fit=crop',
      link: '#'
    },
    {
      name: 'Waveform',
      img: 'https://images.unsplash.com/photo-1516280030429-27679b3dc9cf?q=80&w=600&auto=format&fit=crop',
      link: '#'
    },
    {
      name: 'Polar Sun',
      img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop',
      link: '#'
    },
  ]

  return (
    <section id="showcase" className="relative py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Producer Showcase</h2>
        <p className="mt-3 text-slate-300/90">A selection of producers we've helped shape strategy and growth.</p>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {producers.map((p) => (
            <a key={p.name} href={p.link} className="group relative rounded-xl overflow-hidden border border-white/10">
              <img src={p.img} alt={p.name} className="w-full h-40 object-cover transition duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
              <div className="absolute bottom-2 left-2 text-white text-sm font-medium">{p.name}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
