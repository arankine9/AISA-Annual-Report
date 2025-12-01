import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const QuackHacks = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="quackhacks" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-uo-green font-semibold text-sm uppercase tracking-wider">
            Our Flagship Event
          </span>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-gray-900 mt-4 mb-6">
            QuackHacks
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oregon's largest hackathon in history, bringing together students to build, learn, and compete at the intersection of AI and innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { number: '200+', label: 'Participants', icon: '👨‍💻' },
            { number: '48', label: 'Hours', icon: '⏰' },
            { number: '50+', label: 'Projects Built', icon: '🚀' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-6xl mb-4">{stat.icon}</div>
              <div className="font-display font-bold text-5xl text-uo-green mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-gradient-to-br from-uo-green to-uo-green/90 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display font-bold text-3xl mb-4">Making History</h3>
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                QuackHacks wasn't just an event—it was a statement. Students from across Oregon came together to prove that world-class innovation happens here.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-uo-gold mr-3">✓</span>
                  <span>Largest hackathon in Oregon's history</span>
                </li>
                <li className="flex items-start">
                  <span className="text-uo-gold mr-3">✓</span>
                  <span>Sponsorships from leading tech companies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-uo-gold mr-3">✓</span>
                  <span>Students built real AI applications in 48 hours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-uo-gold mr-3">✓</span>
                  <span>Industry judges and mentors throughout the event</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="font-bold text-uo-gold text-2xl mb-2">Networking</div>
                <div className="text-sm text-white/80">Connected students with industry professionals and each other</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="font-bold text-uo-gold text-2xl mb-2">Learning</div>
                <div className="text-sm text-white/80">Workshops on AI, product design, and pitching</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="font-bold text-uo-gold text-2xl mb-2">Building</div>
                <div className="text-sm text-white/80">Real applications solving real problems</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="font-bold text-uo-gold text-2xl mb-2">Competing</div>
                <div className="text-sm text-white/80">Prizes and recognition for top teams</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 italic">
            "QuackHacks showed me that I don't need to be at a Silicon Valley school to build cutting-edge tech. The energy and talent here is incredible."
          </p>
          <p className="text-gray-500 mt-2">— QuackHacks Participant</p>
        </motion.div>
      </div>
    </section>
  )
}

export default QuackHacks
