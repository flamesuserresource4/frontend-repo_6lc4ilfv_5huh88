import { motion } from 'framer-motion'
import { Sparkles, Share2, Rocket } from 'lucide-react'

const templates = [
  {
    title: 'Social Media Automation',
    description: 'Auto-generate posts, schedule, and cross-publish in one flow.',
    icon: Share2,
  },
  {
    title: 'Lead Generation',
    description: 'Capture, enrich, and route leads to your CRM instantly.',
    icon: Rocket,
  },
  {
    title: 'Smart Notifications',
    description: 'Send context-aware alerts based on custom rules and signals.',
    icon: Sparkles,
  },
]

function Templates() {
  return (
    <section className="relative bg-[#0a0a0b] py-24">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Templates to kickstart</h2>
          <p className="mt-3 text-gray-400">Choose a starting point and customize in minutes.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map(({ title, description, icon: Icon }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur-md"
            >
              <div className="mb-4 inline-flex rounded-xl border border-white/10 bg-black/30 p-3">
                <Icon className="h-6 w-6 text-white drop-shadow-[0_0_8px_rgba(255,90,0,0.7)]" />
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-gray-300">{description}</p>

              <button className="mt-6 inline-flex rounded-lg border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-500/20">
                Use Template
              </button>

              <div className="pointer-events-none absolute -bottom-24 right-0 h-48 w-48 rounded-full bg-gradient-to-tr from-orange-600/30 to-red-600/30 blur-3xl transition-transform group-hover:translate-y-4" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Templates
