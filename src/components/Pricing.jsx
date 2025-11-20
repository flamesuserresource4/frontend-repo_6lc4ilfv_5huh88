import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Free',
    price: '$0',
    description: 'For getting started',
    features: ['1 project', 'Community support', 'Basic runs'],
    highlighted: false,
  },
  {
    name: 'Premium',
    price: '$29',
    description: 'For growing teams',
    features: ['Unlimited projects', 'Priority support', 'Advanced runs'],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Let’s talk',
    description: 'For at-scale orgs',
    features: ['SSO/SAML', 'Onboarding', 'Custom SLAs'],
    highlighted: false,
  },
]

function Pricing() {
  return (
    <section id="pricing" className="relative bg-[#0a0a0b] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Pricing that scales with you</h2>
          <p className="mt-3 text-gray-400">Choose a plan and start automating in minutes.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl border ${t.highlighted ? 'border-orange-500/60 shadow-[0_0_30px_rgba(255,90,0,0.35)]' : 'border-white/10'} bg-white/5 p-6 text-white backdrop-blur-md`}
            >
              {t.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-orange-500/50 bg-orange-500/10 px-3 py-1 text-xs text-orange-200">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <p className="mt-1 text-sm text-gray-300">{t.description}</p>
              <p className="mt-6 text-4xl font-extrabold">{t.price}</p>
              <ul className="mt-6 space-y-2 text-sm text-gray-200">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(255,90,0,0.8)]" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full rounded-xl px-4 py-2 font-semibold transition ${t.highlighted ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-[0_0_25px_rgba(255,90,0,0.4)] hover:opacity-95' : 'border border-white/15 bg-white/10 text-white/90 hover:bg-white/15'}`}>
                {t.highlighted ? 'Start Premium' : 'Choose'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
