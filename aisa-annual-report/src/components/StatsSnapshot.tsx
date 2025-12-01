import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useEffect } from 'react'

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

  const stats = [
    { label: 'Total Members', value: 250, suffix: '+', icon: '👥' },
    { label: 'Site Visits', value: 14, suffix: '', icon: '🏢' },
    { label: 'Guest Speakers', value: 8, suffix: '', icon: '🎤' },
    { label: 'Weekly Meetings', value: 10, suffix: '', icon: '📅' },
    { label: 'Projects Completed', value: 6, suffix: '+', icon: '🚀' },
    { label: 'Jobs Landed', value: 12, suffix: '+', icon: '💼' },
  ]

  return (
    <section id="stats" className="py-24 bg-gradient-to-br from-uo-green to-uo-green/90">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-5xl md:text-6xl text-white mb-4">
            2024-2025 Snapshot
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Numbers that tell the story of our growth and impact
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/15 transition-all hover:scale-105"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="font-display font-bold text-4xl md:text-5xl text-uo-gold mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-white/80 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-white/60 text-sm">
            Growth from 10 members to 250+ in one year • First in the nation for student-led AI TAs
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default StatsSnapshot
