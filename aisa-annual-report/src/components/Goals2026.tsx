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
    <section id="goals" className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(254, 225, 35, 0.15) 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      {/* Gradient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-uo-gold/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-uo-green/20 rounded-full blur-3xl"></div>

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
            className="inline-block px-6 py-3 bg-uo-gold/20 backdrop-blur-md rounded-full text-uo-gold text-sm font-bold mb-6 border border-uo-gold/30"
          >
            LOOKING FORWARD
          </motion.div>
          <h2 className="font-display font-black text-7xl md:text-8xl text-white mb-6 tracking-tight">
            Goals for 2026
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-medium leading-relaxed">
            We're not slowing down—we're <span className="text-uo-gold font-bold">accelerating</span>. Here's what's next for UO AISA.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {goals.map((goal, index) => (
            <motion.div
              key={goal.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group bg-white/10 backdrop-blur-lg border-2 border-white/20 rounded-3xl p-10 hover:bg-white/15 transition-all hover:border-uo-gold/40"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-uo-gold to-yellow-400 rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity"></div>
              <h3 className="relative font-display font-black text-3xl text-uo-gold mb-8 group-hover:text-yellow-300 transition-colors">{goal.title}</h3>
              <ul className="relative space-y-4">
                {goal.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + (index * 0.2) + (i * 0.1) }}
                    className="flex items-start text-gray-300"
                  >
                    <span className="text-uo-gold mr-3 mt-1 flex-shrink-0 font-bold text-lg">→</span>
                    <span className="leading-relaxed font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-gradient-to-br from-uo-green via-uo-green/95 to-uo-green/90 rounded-[3rem] p-12 md:p-16 border-4 border-white/20 shadow-2xl"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-display font-black text-5xl text-white mb-8">
                Building the Future at UO
              </h3>
              <p className="text-2xl text-white/95 leading-relaxed mb-8 font-medium">
                This isn't just about one club having a good year. This is about fundamentally changing what's possible for students who choose to come here—showing them they can build, lead, and create impact from Eugene.
              </p>
              <p className="text-xl text-white/90 leading-relaxed font-medium">
                The next six months will be our biggest yet. If you want to be part of it—as a member, mentor, partner, or supporter—<span className="text-uo-gold font-bold">now is the time to get involved</span>.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { word: 'More', desc: 'Speakers, events, opportunities', emoji: '📈' },
                { word: 'Deeper', desc: 'Projects, learning, impact', emoji: '🎯' },
                { word: 'Bigger', desc: 'Ambition, reach, vision', emoji: '🚀' },
                { word: 'National', desc: 'Leadership and recognition', emoji: '🏆' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + (i * 0.1) }}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  className="bg-white/15 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:bg-white/25 transition-all"
                >
                  <div className="text-5xl mb-4">{item.emoji}</div>
                  <div className="font-display font-black text-4xl text-uo-gold mb-3">{item.word}</div>
                  <div className="text-white/90 text-sm font-medium">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Goals2026
