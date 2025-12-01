import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Clock, Rocket, Check, Handshake, BookOpen, Zap, Trophy } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const QuackHacks = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="quackhacks" className="relative py-32 bg-gradient-to-br from-uo-gold via-yellow-400 to-uo-gold overflow-hidden">
      {/* Diagonal stripes overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(21, 71, 51, 0.4) 35px, rgba(21, 71, 51, 0.4) 70px)',
        }}></div>
      </div>

      {/* Animated circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-uo-green/20 rounded-full blur-3xl"></div>
      </div>

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
            className="inline-block px-6 py-3 bg-uo-green/90 backdrop-blur-md rounded-full text-white text-sm font-bold mb-6 border-2 border-white/30"
          >
            OUR FLAGSHIP EVENT
          </motion.div>
          <h2 className="font-display font-black text-7xl md:text-9xl text-uo-green mb-6 tracking-tighter drop-shadow-lg">
            QuackHacks
          </h2>
          <p className="text-2xl md:text-3xl text-uo-green/90 max-w-4xl mx-auto font-bold leading-relaxed">
            Oregon's <span className="underline decoration-4 decoration-uo-green">largest hackathon</span> in history
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {([
            { number: '200+', label: 'Participants', icon: Code2, color: 'from-blue-500 to-blue-700' },
            { number: '48', label: 'Hours of Building', icon: Clock, color: 'from-purple-500 to-purple-700' },
            { number: '50+', label: 'Projects Built', icon: Rocket, color: 'from-orange-500 to-red-600' },
          ] as Array<{ number: string; label: string; icon: LucideIcon; color: string }>).map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="group relative bg-white rounded-3xl p-10 shadow-2xl border-4 border-white hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all"
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity -z-10`}></div>
              <div className="mb-6 group-hover:scale-125 transition-transform">
                <stat.icon size={64} className="text-uo-green" strokeWidth={1.5} />
              </div>
              <div className="font-display font-black text-8xl text-transparent bg-gradient-to-br from-uo-green to-uo-green/70 bg-clip-text mb-4">
                {stat.number}
              </div>
              <div className="text-lg text-uo-green font-bold uppercase tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="bg-gradient-to-br from-uo-green via-uo-green/95 to-uo-green/90 rounded-[3rem] p-12 md:p-16 text-white shadow-2xl border-4 border-white/20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-display font-black text-5xl mb-6">Making History</h3>
              <p className="text-xl text-white/95 mb-8 leading-relaxed font-medium">
                QuackHacks wasn't just an event—it was a statement. Students from across Oregon came together to prove that world-class innovation happens here.
              </p>
              <ul className="space-y-4">
                {[
                  'Largest hackathon in Oregon\'s history',
                  'Sponsorships from leading tech companies',
                  'Students built real AI applications in 48 hours',
                  'Industry judges and mentors throughout'
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7 + (i * 0.1) }}
                    className="flex items-center gap-4 text-lg"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-uo-gold flex items-center justify-center">
                      <Check size={20} className="text-uo-green" strokeWidth={3} />
                    </div>
                    <span className="font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {([
                { title: 'Networking', desc: 'Connected students with industry professionals', icon: Handshake },
                { title: 'Learning', desc: 'Workshops on AI, product design, and pitching', icon: BookOpen },
                { title: 'Building', desc: 'Real applications solving real problems', icon: Zap },
                { title: 'Competing', desc: 'Prizes and recognition for top teams', icon: Trophy },
              ] as Array<{ title: string; desc: string; icon: LucideIcon }>).map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + (i * 0.1) }}
                  whileHover={{ scale: 1.1 }}
                  className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/25 transition-all"
                >
                  <div className="mb-3">
                    <item.icon size={40} className="text-uo-gold" strokeWidth={1.5} />
                  </div>
                  <div className="font-bold text-uo-gold text-xl mb-2">{item.title}</div>
                  <div className="text-sm text-white/90 leading-relaxed">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white rounded-3xl p-10 shadow-2xl max-w-3xl">
            <p className="text-2xl text-uo-green italic font-bold mb-3">
              "QuackHacks showed me that I don't need to be at a Silicon Valley school to build cutting-edge tech. The energy and talent here is incredible."
            </p>
            <p className="text-uo-green/70 font-semibold">— QuackHacks Participant</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default QuackHacks
