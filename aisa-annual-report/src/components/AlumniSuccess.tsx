import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const AlumniSuccess = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-uo-green font-semibold text-sm uppercase tracking-wider">
              Alumni Spotlight
            </span>
            <h2 className="font-display font-bold text-5xl md:text-6xl text-gray-900 mt-4 mb-6">
              From UO to Amazon AGI Labs
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Annika's journey shows what's possible when talented students find the right community and opportunities.
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-uo-green to-uo-green/80 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  A
                </div>
                <div>
                  <div className="font-bold text-xl text-gray-900">Annika</div>
                  <div className="text-gray-600">Amazon AGI Labs</div>
                </div>
              </div>

              <blockquote className="text-gray-700 leading-relaxed italic mb-6">
                "The AI Club gave me the confidence to pursue roles I never thought possible. From weekly meetings to hands-on projects, I learned that building at the frontier of technology isn't reserved for students at Stanford or MIT—it's available to anyone willing to show up and do the work."
              </blockquote>

              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-uo-gold mr-3 mt-1">→</span>
                  <span className="text-gray-700">Currently working on cutting-edge AI agents and AGI research</span>
                </div>
                <div className="flex items-start">
                  <span className="text-uo-gold mr-3 mt-1">→</span>
                  <span className="text-gray-700">Built portfolio through AISA tech team projects</span>
                </div>
                <div className="flex items-start">
                  <span className="text-uo-gold mr-3 mt-1">→</span>
                  <span className="text-gray-700">Connected with industry leaders through site visits</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-uo-green rounded-3xl p-8 md:p-12 text-white"
          >
            <h3 className="font-display font-bold text-3xl mb-6">The Path Forward</h3>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Our alumni are proving that Oregon students can compete and win at the highest levels of technology and innovation.
            </p>

            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="font-bold text-uo-gold text-4xl mb-2">12+</div>
                <div className="text-white/80">Members landed jobs in tech</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="font-bold text-uo-gold text-4xl mb-2">100%</div>
                <div className="text-white/80">Of dedicated members report increased confidence</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="font-bold text-uo-gold text-4xl mb-2">National</div>
                <div className="text-white/80">Recognition for student-led innovations</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AlumniSuccess
