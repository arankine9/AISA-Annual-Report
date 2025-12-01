import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const PresidentLetter = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="letter" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <span className="text-uo-green font-semibold text-sm uppercase tracking-wider">
              A Letter from the President
            </span>
            <h2 className="font-display font-bold text-5xl md:text-6xl text-gray-900 mt-4 mb-6">
              Privilege in Action
            </h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Dear UO AISA Members, Alumni, Friends, and Supporters,</strong>
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              It is my honor to present the first semiannual report on behalf of the Artificial Intelligence Student Association at the University of Oregon.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              When we founded this organization in 2024, we were looking for an outlet for passion around technology at the University of Oregon. What started as a few people in a room, literally just talking about AI, has grown into something far more significant than any of us present in those early days could have imagined.
            </p>

            <div className="bg-uo-green/5 border-l-4 border-uo-green p-6 my-8">
              <p className="text-gray-800 leading-relaxed italic">
                "While we are the AI Club, I'd like us to be thought of more broadly as the club where <strong>technology</strong>, the application of knowledge to practical purposes, is happening at the University of Oregon."
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Technology has always been the leading edge of change. What starts at the frontier eventually reshapes every field. The tools being built today will become the infrastructure of law, medicine, journalism, business, and the arts tomorrow.
            </p>

            <h3 className="font-display font-bold text-2xl text-gray-900 mt-12 mb-6">
              Since Our Reinvention
            </h3>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-uo-green rounded-full mr-3 mt-2"></span>
                <span className="text-gray-700">We became the <strong>first program in the United States</strong> (beating Stanford and Harvard) to build and deploy a university student-led teaching assistant program</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-uo-green rounded-full mr-3 mt-2"></span>
                <span className="text-gray-700">We launched QuackHacks, leading to the <strong>largest hackathon in Oregon's history</strong></span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-uo-green rounded-full mr-3 mt-2"></span>
                <span className="text-gray-700">We started building tools and solutions for the university and real companies</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-uo-green rounded-full mr-3 mt-2"></span>
                <span className="text-gray-700">We brought in incredible speakers and learned from industry leaders</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-uo-green rounded-full mr-3 mt-2"></span>
                <span className="text-gray-700">We connected students with jobs and career opportunities</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-uo-green rounded-full mr-3 mt-2"></span>
                <span className="text-gray-700">We had a lot of fun</span>
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              I see this position as an opportunity to expand what's possible when you choose to come to the University of Oregon by creating an environment where students realize they can build, create, and lead.
            </p>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-700 leading-relaxed mb-8">
                Privilege does not do enough to encapsulate how I feel about the opportunity to represent Oregon, entrepreneurship, and technology. This letter is not goodbye; it is hello to 2026, where bigger and brighter things lie ahead for UO AISA.
              </p>

              <div className="flex items-center space-x-4">
                <div className="h-px bg-gray-300 flex-1"></div>
                <p className="text-gray-600 font-semibold">Maggie Byrne</p>
                <div className="h-px bg-gray-300 flex-1"></div>
              </div>
              <p className="text-gray-500 text-center mt-2">President, UO AISA</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PresidentLetter
