import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const PresidentLetter = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="letter" className="relative py-28 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23154733' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-uo-green via-uo-gold to-uo-green"></div>

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={isInView ? { scale: 1 } : {}}
              className="inline-block px-6 py-3 bg-gradient-to-r from-uo-green/10 to-uo-gold/10 backdrop-blur-sm rounded-full text-uo-green text-sm font-bold mb-6 border border-uo-green/20"
            >
              A LETTER FROM THE PRESIDENT
            </motion.div>
            <h2 className="font-display font-black text-6xl md:text-7xl bg-gradient-to-r from-uo-green to-uo-green/70 bg-clip-text text-transparent mb-6">
              Privilege in Action
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-uo-gold to-uo-green mx-auto rounded-full"></div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-14 border border-gray-100">
            <div className="prose prose-lg prose-gray max-w-none">
              <p className="text-gray-800 leading-relaxed mb-6 text-lg font-medium">
                <strong className="text-uo-green text-2xl">Dear UO AISA Members, Alumni, Friends, and Supporters,</strong>
              </p>

              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                It is my honor to present the first semiannual report on behalf of the Artificial Intelligence Student Association at the University of Oregon.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                When we founded this organization in 2024, we were looking for an outlet for passion around technology at the University of Oregon. What started as a few people in a room, literally just talking about AI, has grown into something far more significant than any of us present in those early days could have imagined.
              </p>

              <div className="my-10 p-8 bg-gradient-to-r from-uo-green/10 via-uo-gold/10 to-uo-green/10 border-l-4 border-uo-green rounded-r-2xl">
                <p className="text-gray-900 leading-relaxed text-xl italic font-medium mb-0">
                  "While we are the AI Club, I'd like us to be thought of more broadly as the club where <strong className="text-uo-green">technology</strong>, the application of knowledge to practical purposes, is happening at the University of Oregon."
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                Technology has always been the leading edge of change. What starts at the frontier eventually reshapes every field. The tools being built today will become the infrastructure of law, medicine, journalism, business, and the arts tomorrow.
              </p>

              <h3 className="font-display font-bold text-4xl text-uo-green mt-14 mb-8">
                Since Our Reinvention
              </h3>

              <div className="grid md:grid-cols-2 gap-4 mb-10">
                {[
                  'First program in the United States (beating Stanford and Harvard) to build and deploy a university student-led teaching assistant program',
                  'Launched QuackHacks, leading to the largest hackathon in Oregon\'s history',
                  'Started building tools and solutions for the university and real companies',
                  'Brought in incredible speakers and learned from industry leaders',
                  'Connected students with jobs and career opportunities',
                  'Had a lot of fun'
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="flex items-start gap-3 p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:border-uo-gold/30 hover:shadow-lg transition-all"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-uo-green to-uo-gold flex items-center justify-center text-white text-sm font-bold">✓</div>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                I see this position as an opportunity to expand what's possible when you choose to come to the University of Oregon by creating an environment where students realize they can build, create, and lead.
              </p>

              <div className="mt-14 pt-10 border-t-2 border-gradient-to-r from-transparent via-gray-200 to-transparent">
                <p className="text-gray-700 leading-relaxed mb-10 text-lg">
                  Privilege does not do enough to encapsulate how I feel about the opportunity to represent Oregon, entrepreneurship, and technology. This letter is not goodbye; it is hello to 2026, where bigger and brighter things lie ahead for UO AISA.
                </p>

                <div className="text-center">
                  <p className="text-2xl font-display font-bold text-uo-green mb-2">Maggie Byrne</p>
                  <p className="text-gray-600 font-medium">President, UO AISA</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PresidentLetter
