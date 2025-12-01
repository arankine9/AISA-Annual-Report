import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, Briefcase, TrendingUp, Trophy } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const AlumniSuccess = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(254, 225, 35, 0.15) 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      {/* Gradient accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-uo-green/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-uo-gold/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={isInView ? { scale: 1 } : {}}
              className="inline-block px-6 py-3 bg-uo-gold/20 backdrop-blur-md rounded-full text-uo-gold text-sm font-bold mb-6 border border-uo-gold/30"
            >
              ALUMNI SPOTLIGHT
            </motion.div>
            <h2 className="font-display font-black text-6xl md:text-7xl text-white mb-6 tracking-tight leading-none">
              From UO to<br />
              <span className="bg-gradient-to-r from-uo-gold via-yellow-300 to-uo-gold bg-clip-text text-transparent">Amazon AGI Labs</span>
            </h2>
            <p className="text-2xl text-gray-300 mb-10 leading-relaxed font-medium">
              Annika's journey shows what's possible when talented students find the right community and opportunities.
            </p>

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border-2 border-white/20 shadow-2xl">
              <div className="flex items-center space-x-5 mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-uo-gold via-yellow-400 to-uo-gold rounded-full flex items-center justify-center text-uo-green font-black text-3xl shadow-lg">
                  A
                </div>
                <div>
                  <div className="font-black text-2xl text-white">Annika</div>
                  <div className="text-uo-gold font-bold text-lg">Amazon AGI Labs</div>
                </div>
              </div>

              <blockquote className="text-white/95 text-lg leading-relaxed italic mb-8 font-medium">
                "The AI Club gave me the confidence to pursue roles I never thought possible. From weekly meetings to hands-on projects, I learned that building at the frontier of technology isn't reserved for students at Stanford or MIT—it's available to anyone willing to show up and do the work."
              </blockquote>

              <div className="space-y-4">
                {[
                  'Currently working on cutting-edge AI agents and AGI research',
                  'Built portfolio through AISA tech team projects',
                  'Connected with industry leaders through site visits'
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-uo-gold flex items-center justify-center mt-0.5">
                      <Check size={18} className="text-uo-green" strokeWidth={3} />
                    </div>
                    <span className="text-white/90 leading-relaxed font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-uo-green via-uo-green/95 to-uo-green/90 rounded-[3rem] p-12 md:p-14 text-white border-4 border-white/20 shadow-2xl"
          >
            <h3 className="font-display font-black text-5xl mb-6">The Path Forward</h3>
            <p className="text-2xl text-white/95 mb-12 leading-relaxed font-medium">
              Our alumni are proving that Oregon students can compete and win at the highest levels of technology and innovation.
            </p>

            <div className="space-y-6">
              {([
                { number: '12+', label: 'Members landed jobs in tech', color: 'from-blue-400 to-blue-600', icon: Briefcase },
                { number: '100%', label: 'Of dedicated members report increased confidence', color: 'from-purple-400 to-purple-600', icon: TrendingUp },
                { number: 'Top 1%', label: 'National recognition for student-led innovations', color: 'from-orange-400 to-red-500', icon: Trophy }
              ] as Array<{ number: string; label: string; color: string; icon: LucideIcon }>).map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + (i * 0.15) }}
                  whileHover={{ scale: 1.05, x: 8 }}
                  className="group relative bg-white/15 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/25 transition-all"
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity`}></div>
                  <div className="relative flex items-center gap-5">
                    <div>
                      <stat.icon size={48} className="text-uo-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className={`font-display font-black text-6xl bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-2`}>{stat.number}</div>
                      <div className="text-white/90 font-medium text-lg">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AlumniSuccess
