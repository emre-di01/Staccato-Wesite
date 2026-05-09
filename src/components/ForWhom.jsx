import { motion } from 'framer-motion'

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
}

export default function ForWhom({ t }) {
  return (
    <section id="for-whom" className="py-24 sm:py-32 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-4">
            Für wen
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {t.forWhom.title}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">{t.forWhom.subtitle}</p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.forWhom.cards.map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="relative group p-6 rounded-2xl bg-white/3 border border-white/8 hover:border-violet-500/30 transition-all cursor-default overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-violet-600/0 group-hover:from-violet-600/5 group-hover:to-purple-600/5 transition-all rounded-2xl" />
              <div className="relative z-10">
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{card.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
