import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

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
    <section id="learn" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-uo-green font-semibold text-sm uppercase tracking-wider">
            Our Strategy in Action
          </span>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-gray-900 mt-4 mb-6">
            Learn & Land
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We compress the timeline from "I'm interested in tech" to "I'm building something real" by exposing members to world-class builders, teaching practical skills, and creating real opportunities.
          </p>
        </motion.div>

        <div className="mb-16">
          <h3 className="font-display font-bold text-3xl text-gray-900 mb-8 text-center">
            Fall 2024: What We Learned
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {weeks.map((week, index) => (
              <motion.div
                key={week.week}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all hover:scale-[1.02]"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-uo-green rounded-xl flex items-center justify-center">
                      <span className="text-uo-gold font-bold text-lg">W{week.week}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">{week.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{week.description}</p>
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
          className="bg-uo-green rounded-3xl p-8 md:p-12 text-white"
        >
          <h3 className="font-display font-bold text-3xl mb-6">The Tech Team</h3>
          <p className="text-lg text-white/90 mb-6 leading-relaxed">
            A smaller cohort of members who are ready to go deeper. If you're on the tech team, you're working on a project. This is where ideas become reality and where our most ambitious work happens.
          </p>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="font-display font-bold text-3xl text-uo-gold mb-2">Exposing</div>
              <div className="text-sm text-white/80">World-class builders & thinkers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="font-display font-bold text-3xl text-uo-gold mb-2">Teaching</div>
              <div className="text-sm text-white/80">Practical, applicable skills</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="font-display font-bold text-3xl text-uo-gold mb-2">Building</div>
              <div className="text-sm text-white/80">Real projects that matter</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="font-display font-bold text-3xl text-uo-gold mb-2">Connecting</div>
              <div className="text-sm text-white/80">Opportunities & co-founders</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default LearnAndLand
