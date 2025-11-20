import { motion } from 'framer-motion'
import { Bolt, Workflow, Gauge } from 'lucide-react'

const features = [
  {
    title: 'Build visually',
    description: 'Drag, drop, and connect steps. Your logic is compiled into ultra-fast automations.',
    icon: Workflow,
  },
  {
    title: 'Run and scale',
    description: 'Execute millions of jobs reliably with built-in retries, logs, and monitoring.',
    icon: Gauge,
  },
  {
    title: 'Instant triggers',
    description: 'Webhooks, schedules, and app events fire your flows the moment things happen.',
    icon: Bolt,
  },
]

function Features() {
  return (
    <section id="features" className="relative bg-[#0a0a0b] py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_20%,rgba(255,90,0,0.12),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_80%_80%,rgba(255,40,0,0.12),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Automation that feels effortless</h2>
          <p className="mt-3 text-gray-400">Design flows, connect apps, and let the platform handle the heavy lifting.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description, icon: Icon }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur-md"
            >
              <div className="mb-4 inline-flex rounded-xl border border-white/10 bg-black/30 p-3 shadow-inner">
                <Icon className="h-6 w-6 text-white drop-shadow-[0_0_8px_rgba(255,90,0,0.7)]" />
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-gray-300">{description}</p>

              <div className="pointer-events-none absolute -bottom-24 right-0 h-48 w-48 rounded-full bg-gradient-to-tr from-orange-600/30 to-red-600/30 blur-3xl transition-transform group-hover:translate-y-4" />
            </motion.div>
          ))}
        </div>

        {/* Simple dotted workflow visual */}
        <div className="relative mt-16 overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6">
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-300">
            {['Trigger', 'Action', 'Branch', 'Wait', 'Webhook', 'Finish'].map((step, i) => (
              <div key={step} className="relative">
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-2">{step}</div>
                {i < 5 && (
                  <div className="absolute left-full top-1/2 ml-3 hidden translate-y-[-50%] items-center gap-1 sm:flex">
                    {Array.from({ length: 5 }).map((_, d) => (
                      <span key={d} className="h-1 w-1 rounded-full bg-orange-500/70 shadow-[0_0_12px_rgba(255,90,0,0.6)]" />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
