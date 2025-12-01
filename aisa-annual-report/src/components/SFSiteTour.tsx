import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building2, Users, Lightbulb } from 'lucide-react'

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
    <section id="tour" className="relative py-32 bg-gradient-to-br from-uo-green via-uo-green/95 to-uo-green/90 overflow-hidden">
      {/* Diagonal stripes overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(254, 225, 35, 0.3) 35px, rgba(254, 225, 35, 0.3) 70px)',
        }}></div>
      </div>

      {/* Gradient circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-uo-gold/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={isInView ? { scale: 1 } : {}}
            className="inline-block px-6 py-3 bg-uo-gold/30 backdrop-blur-md rounded-full text-uo-gold text-sm font-bold mb-6 border-2 border-uo-gold/40"
          >
            BEYOND THE CLASSROOM
          </motion.div>
          <h2 className="font-display font-black text-7xl md:text-8xl text-white mb-6 tracking-tight">
            San Francisco Site Tour
          </h2>
          <p className="text-2xl text-white/95 max-w-4xl mx-auto font-medium leading-relaxed">
            We took members to Silicon Valley to see firsthand where the future of technology is being built—and to meet the people building it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16"
        >
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="group relative bg-white/15 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/25 transition-all border border-white/20 hover:border-uo-gold/50"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-uo-gold to-yellow-400 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity"></div>
              <div className="relative">
                <div className="font-black text-white text-xl mb-2 group-hover:text-uo-gold transition-colors">{company.name}</div>
                <div className="text-white/70 text-sm font-medium">{company.type}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Building2, title: 'Inside Access', desc: 'Members toured the offices where AI products serving millions are built, seeing firsthand what it takes to ship at scale.' },
            { icon: Users, title: 'Real Connections', desc: 'Face-to-face conversations with engineers, researchers, VCs, and founders who are shaping the industry.' },
            { icon: Lightbulb, title: 'Career Clarity', desc: 'Students left with concrete understanding of what roles exist, what companies value, and how to position themselves.' }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + (i * 0.1), duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/15 backdrop-blur-md rounded-3xl p-10 border border-white/20 hover:bg-white/20 transition-all"
            >
              <div className="mb-6 text-uo-gold">
                <item.icon size={64} strokeWidth={1.5} />
              </div>
              <h3 className="font-display font-black text-3xl text-white mb-5">{item.title}</h3>
              <p className="text-white/90 leading-relaxed text-lg font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-white rounded-3xl p-12 shadow-2xl max-w-4xl mx-auto"
        >
          <p className="text-2xl text-uo-green italic mb-5 leading-relaxed font-bold">
            "Visiting Anthropic and talking to the researchers working on Claude changed how I think about my career. I realized that the work I want to do is happening right now, and I can be part of it."
          </p>
          <p className="text-uo-green/70 font-semibold text-lg">— Site Tour Participant</p>
        </motion.div>
      </div>
    </section>
  )
}

export default SFSiteTour
