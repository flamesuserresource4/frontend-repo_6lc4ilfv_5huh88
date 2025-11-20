import { motion } from 'framer-motion'

const testimonials = Array.from({ length: 9 }).map((_, i) => ({
  name: `Alex Parker ${i + 1}`,
  role: 'Ops Lead',
  quote: 'This platform transformed how we automate. It just flows.',
  avatar: `https://i.pravatar.cc/150?img=${i + 10}`,
}))

function Testimonials() {
  return (
    <section className="relative bg-[#0a0a0b] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Loved by modern teams</h2>
          <p className="mt-3 text-gray-400">Real people. Real results.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur-md"
            >
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-xl object-cover" />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-200">“{t.quote}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
