import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Showcase from './components/Showcase'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Showcase />
        <Contact />
      </main>
    </div>
  )
}

export default App
