import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const SFSiteTour = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const companies = [
    { name: 'Google', type: 'Search & AI' },
    { name: 'Anthropic', type: 'AI Safety' },
    { name: 'Airbnb', type: 'Hospitality Tech' },
    { name: 'Amazon AGI Labs', type: 'AGI Research' },
    { name: 'CVC', type: 'Venture Capital' },
    { name: 'IVP', type: 'Growth Equity' },
    { name: 'Broadcom', type: 'Semiconductors' },
    { name: 'AWS', type: 'Cloud Computing' },
    { name: 'Salesforce', type: 'Enterprise Software' },
    { name: 'South Park Commons', type: 'Builder Community' },
  ]

  return (
    <section id="tour" className="py-24 bg-gradient-to-br from-uo-green via-uo-green/95 to-uo-green/90">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-uo-gold font-semibold text-sm uppercase tracking-wider">
            Beyond the Classroom
          </span>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-white mt-4 mb-6">
            San Francisco Site Tour
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We took members to Silicon Valley to see firsthand where the future of technology is being built—and to meet the people building it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12"
        >
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center hover:bg-white/20 transition-all"
            >
              <div className="font-bold text-white text-lg mb-1">{company.name}</div>
              <div className="text-white/60 text-xs">{company.type}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8"
          >
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="font-display font-bold text-2xl text-white mb-4">Inside Access</h3>
            <p className="text-white/80 leading-relaxed">
              Members toured the offices where AI products serving millions are built, seeing firsthand what it takes to ship at scale.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8"
          >
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="font-display font-bold text-2xl text-white mb-4">Real Connections</h3>
            <p className="text-white/80 leading-relaxed">
              Face-to-face conversations with engineers, researchers, VCs, and founders who are shaping the industry.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8"
          >
            <div className="text-4xl mb-4">💡</div>
            <h3 className="font-display font-bold text-2xl text-white mb-4">Career Clarity</h3>
            <p className="text-white/80 leading-relaxed">
              Students left with concrete understanding of what roles exist, what companies value, and how to position themselves.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center"
        >
          <p className="text-xl text-white italic mb-4">
            "Visiting Anthropic and talking to the researchers working on Claude changed how I think about my career. I realized that the work I want to do is happening right now, and I can be part of it."
          </p>
          <p className="text-white/60">— Site Tour Participant</p>
        </motion.div>
      </div>
    </section>
  )
}

export default SFSiteTour
