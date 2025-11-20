import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-[#0b0b0c]">
      {/* Spline 3D cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for depth - ensure they don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(255,84,0,0.18),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_80%,rgba(255,40,0,0.12),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-md">
            <div className="h-1.5 w-1.5 rounded-full bg-orange-500 shadow-[0_0_12px_2px_rgba(255,94,0,0.8)] mr-2" />
            <span className="text-xs tracking-wider text-gray-300">Automation, reimagined</span>
          </div>

          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
            Connect. Automate. Scale.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-300">
            Build powerful workflows visually and run them at planet-scale — all in a high‑performance, modern automation platform.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="#pricing"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 text-white shadow-[0_0_30px_rgba(255,90,0,0.45)] transition-transform hover:scale-[1.02]"
            >
              <span className="relative z-10 font-semibold">Get Started</span>
              <span className="absolute inset-0 opacity-0 blur-xl transition-opacity group-hover:opacity-50 bg-white/20" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-white/90 backdrop-blur-md hover:bg-white/10"
            >
              Explore Features
            </a>
          </div>
        </motion.div>

        {/* Trust logos band */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 rounded-2xl border border-white/10 bg-black/30 p-4 backdrop-blur-md"
        >
          <p className="mb-4 text-center text-xs uppercase tracking-[0.2em] text-gray-400">Trusted by teams using</p>
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 text-gray-300 sm:grid-cols-3 md:grid-cols-6">
            {['Slack', 'Notion', 'Airtable', 'Zapier', 'Linear', 'Figma'].map((logo) => (
              <div key={logo} className="flex items-center justify-center">
                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm tracking-wide text-gray-200/90 shadow-inner">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
