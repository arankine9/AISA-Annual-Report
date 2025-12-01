import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Goals2026 = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const goals = [
    {
      title: 'Scale What Works',
      items: [
        'More world-class speakers and industry connections',
        'Expanded workshop offerings with monetizable skills',
        'Additional site tours to leading tech companies',
        'Bigger events bringing the tech ecosystem to Eugene'
      ]
    },
    {
      title: 'Launch Venture Arm',
      items: [
        'Create student-run VC training program',
        'Teach investment thinking and deal analysis',
        'Build partnerships with funds and startups',
        'Position UO in national builder/funder ecosystem'
      ]
    },
    {
      title: 'Expand Impact',
      items: [
        'Grow tech team with more ambitious projects',
        'Strengthen industry and alumni connections',
        'Lead a national body of AI clubs',
        'Host major spring event in Eugene'
      ]
    }
  ]

  return (
    <section id="goals" className="py-24 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-uo-gold font-semibold text-sm uppercase tracking-wider">
            Looking Forward
          </span>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-white mt-4 mb-6">
            Goals for 2026
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're not slowing down—we're accelerating. Here's what's next for UO AISA.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {goals.map((goal, index) => (
            <motion.div
              key={goal.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all"
            >
              <h3 className="font-display font-bold text-2xl text-uo-gold mb-6">{goal.title}</h3>
              <ul className="space-y-3">
                {goal.items.map((item, i) => (
                  <li key={i} className="flex items-start text-gray-300">
                    <span className="text-uo-gold mr-3 mt-1 flex-shrink-0">→</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-gradient-to-br from-uo-green to-uo-green/90 rounded-3xl p-8 md:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display font-bold text-4xl text-white mb-6">
                Building the Future at UO
              </h3>
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                This isn't just about one club having a good year. This is about fundamentally changing what's possible for students who choose to come here—showing them they can build, lead, and create impact from Eugene.
              </p>
              <p className="text-white/80 leading-relaxed">
                The next six months will be our biggest yet. If you want to be part of it—as a member, mentor, partner, or supporter—now is the time to get involved.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="font-display font-bold text-4xl text-uo-gold mb-2">More</div>
                <div className="text-white/80 text-sm">Speakers, events, opportunities</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="font-display font-bold text-4xl text-uo-gold mb-2">Deeper</div>
                <div className="text-white/80 text-sm">Projects, learning, impact</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="font-display font-bold text-4xl text-uo-gold mb-2">Bigger</div>
                <div className="text-white/80 text-sm">Ambition, reach, vision</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="font-display font-bold text-4xl text-uo-gold mb-2">National</div>
                <div className="text-white/80 text-sm">Leadership and recognition</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Goals2026
