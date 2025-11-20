import Hero from './components/Hero'
import Features from './components/Features'
import Templates from './components/Templates'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-sm bg-gradient-to-br from-orange-500 to-red-600 shadow-[0_0_20px_rgba(255,90,0,0.6)]" />
            <span className="text-sm font-semibold tracking-wide text-white">Connect</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-gray-300 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#templates" className="hover:text-white">Templates</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="/test" className="rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 hover:bg-white/20">Status</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <div id="features">
          <Features />
        </div>
        <div id="templates">
          <Templates />
        </div>
        <Testimonials />
        <div id="pricing">
          <Pricing />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/40 py-10 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Connect — Built for high‑velocity teams</p>
      </footer>
    </div>
  )
}

export default App
