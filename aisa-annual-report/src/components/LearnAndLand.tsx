import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, BookOpen, Zap, Handshake } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const LearnAndLand = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const weeks = [
    { week: 1, title: 'Networking Fundamentals', description: 'Building relationships that matter and creating opportunities through genuine connection' },
    { week: 2, title: 'Talha - iMovie Creator → AI Oncology', description: 'Journey from Apple to building an AI oncology startup, bridging product development and healthcare innovation' },
    { week: 3, title: 'Andrea - BeReal Head of Growth', description: 'Growth strategy masterclass from BeReal and Polymarket advisor on launching ventures and joining early-stage companies' },
    { week: 4, title: 'Annika - Amazon AGI Labs', description: 'Featured alumni showcase of the path from UO AISA to cutting-edge AI research and agents' },
    { week: 5, title: 'Local AI Workshop', description: 'Building AI models on your own devices with no API costs, better privacy, and full control' },
    { week: 6, title: 'Airtable AI Lead', description: 'Former Netflix/Pinterest leader who sold his company for $40M shares insights on building and scaling AI products' },
    { week: 7, title: 'Anil - Former Apple ML Platform Lead', description: '"You have to win to win" - Finding your spike and layering AI as leverage from Uttara Labs co-founder/CTO' },
    { week: 8, title: 'San Francisco Site Tour', description: 'Visiting Google, Anthropic, Airbnb, Amazon AGI Labs and meeting the companies shaping technology' },
  ]

  return (
    <section id="learn" className="relative py-32 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(21, 71, 51, 0.2) 1px, transparent 0)',
          backgroundSize: '40px 40px'
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
            className="inline-block px-6 py-3 bg-gradient-to-r from-uo-green/10 to-uo-gold/10 backdrop-blur-sm rounded-full text-uo-green text-sm font-bold mb-6 border border-uo-green/20"
          >
            OUR STRATEGY IN ACTION
          </motion.div>
          <h2 className="font-display font-black text-6xl md:text-8xl bg-gradient-to-r from-uo-green to-uo-green/70 bg-clip-text text-transparent mb-6 tracking-tight">
            Learn & Land
          </h2>
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto font-medium leading-relaxed">
            We compress the timeline from <span className="text-uo-green font-bold">"I'm interested in tech"</span> to <span className="text-uo-gold font-bold">"I'm building something real"</span> by exposing members to world-class builders, teaching practical skills, and creating real opportunities.
          </p>
        </motion.div>

        <div className="mb-20">
          <h3 className="font-display font-black text-5xl text-gray-900 mb-12 text-center">
            Fall 2024: What We Learned
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {weeks.map((week, index) => (
              <motion.div
                key={week.week}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="group relative bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all hover:border-uo-gold/30"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-uo-green to-uo-gold rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <div className="relative flex items-start space-x-5">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-uo-green to-uo-green/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-uo-gold font-black text-2xl">W{week.week}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-uo-green transition-colors">{week.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{week.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="bg-gradient-to-br from-uo-green via-uo-green/95 to-uo-green/90 rounded-[3rem] p-12 md:p-16 text-white shadow-2xl border-4 border-white/20"
        >
          <h3 className="font-display font-black text-5xl mb-6 text-center">The Tech Team</h3>
          <p className="text-2xl text-white/95 mb-12 leading-relaxed text-center max-w-4xl mx-auto font-medium">
            A smaller cohort of members who are ready to go deeper. If you're on the tech team, you're working on a project. This is where ideas become reality and where our most ambitious work happens.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {([
              { title: 'Exposing', desc: 'World-class builders & thinkers', icon: Target },
              { title: 'Teaching', desc: 'Practical, applicable skills', icon: BookOpen },
              { title: 'Building', desc: 'Real projects that matter', icon: Zap },
              { title: 'Connecting', desc: 'Opportunities & co-founders', icon: Handshake }
            ] as Array<{ title: string; desc: string; icon: LucideIcon }>).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + (i * 0.1) }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/15 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/25 transition-all text-center"
              >
                <div className="mb-4 flex justify-center">
                  <item.icon size={48} className="text-uo-gold" strokeWidth={1.5} />
                </div>
                <div className="font-display font-black text-4xl text-uo-gold mb-3">{item.title}</div>
                <div className="text-white/90 font-medium">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default LearnAndLand
