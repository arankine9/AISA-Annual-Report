import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { Users, Building2, Mic2, Calendar, Rocket, Briefcase } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const AnimatedCounter = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 2000 })
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, motionValue, value])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        (ref.current as HTMLSpanElement).textContent = Math.floor(latest).toLocaleString() + suffix
      }
    })
  }, [springValue, suffix])

  return <span ref={ref} />
}

const StatsSnapshot = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats: Array<{
    label: string
    value: number
    suffix: string
    icon: LucideIcon
    color: string
  }> = [
    { label: 'Total Members', value: 250, suffix: '+', icon: Users, color: 'from-emerald-400 to-uo-green' },
    { label: 'Site Visits', value: 14, suffix: '', icon: Building2, color: 'from-uo-gold to-yellow-500' },
    { label: 'Guest Speakers', value: 8, suffix: '', icon: Mic2, color: 'from-blue-400 to-blue-600' },
    { label: 'Weekly Meetings', value: 10, suffix: '', icon: Calendar, color: 'from-purple-400 to-purple-600' },
    { label: 'Projects Completed', value: 6, suffix: '+', icon: Rocket, color: 'from-orange-400 to-red-500' },
    { label: 'Jobs Landed', value: 12, suffix: '+', icon: Briefcase, color: 'from-teal-400 to-cyan-600' },
  ]

  return (
    <section id="stats" className="relative py-32 bg-gradient-to-br from-gray-900 via-uo-green to-gray-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(254, 225, 35, 0.15) 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}></div>
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
            transition={{ duration: 0.6 }}
            className="inline-block px-6 py-3 bg-uo-gold/20 backdrop-blur-md rounded-full text-uo-gold text-sm font-bold mb-6 border border-uo-gold/30"
          >
            THE NUMBERS
          </motion.div>
          <h2 className="font-display font-black text-6xl md:text-8xl text-white mb-6 tracking-tight">
            2024-2025 at a Glance
          </h2>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto font-medium">
            Explosive growth, national recognition, and real impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/20 hover:border-uo-gold/50 transition-all hover:shadow-2xl hover:shadow-uo-gold/20"
            >
              {/* Gradient glow */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity`}></div>

              <div className="relative">
                <div className="mb-6 group-hover:scale-110 transition-transform">
                  <stat.icon size={56} className="text-uo-gold" strokeWidth={1.5} />
                </div>
                <div className={`font-display font-black text-7xl md:text-8xl bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-4 tracking-tighter`}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-lg text-gray-300 font-bold uppercase tracking-wider">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-uo-gold rounded-full animate-pulse"></div>
              <span className="text-white/80 font-medium">
                <span className="text-uo-gold font-bold">25x growth</span> in membership •
                <span className="text-uo-gold font-bold ml-2">#1 in the nation</span> for student-led AI TAs •
                <span className="text-uo-gold font-bold ml-2">Largest hackathon</span> in Oregon history
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StatsSnapshot
