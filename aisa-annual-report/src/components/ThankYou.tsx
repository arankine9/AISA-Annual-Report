import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const ThankYou = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-5xl md:text-6xl text-gray-900 mb-6">
            Thank You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            To our members, alumni, guest speakers, industry partners, university supporters, and everyone who believed in what we're building—this is just the beginning.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 text-center">
            <h3 className="font-display font-bold text-2xl text-gray-900 mb-4">Join Us</h3>
            <p className="text-gray-600 mb-6">
              Whether you're a student, alumni, or industry professional, there's a place for you in AISA.
            </p>
            <a
              href="mailto:aisa@uoregon.edu"
              className="inline-block px-6 py-3 bg-uo-green text-white rounded-lg font-semibold hover:bg-uo-green/90 transition-all"
            >
              Get Involved
            </a>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 text-center">
            <h3 className="font-display font-bold text-2xl text-gray-900 mb-4">Partner With Us</h3>
            <p className="text-gray-600 mb-6">
              Companies and organizations interested in sponsorship, speaking, or collaboration.
            </p>
            <a
              href="mailto:partnerships@uoaisa.org"
              className="inline-block px-6 py-3 bg-uo-green text-white rounded-lg font-semibold hover:bg-uo-green/90 transition-all"
            >
              Partner With Us
            </a>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 text-center">
            <h3 className="font-display font-bold text-2xl text-gray-900 mb-4">Stay Connected</h3>
            <p className="text-gray-600 mb-6">
              Follow our journey and see what we're building next.
            </p>
            <a
              href="https://www.linkedin.com/company/uo-aisa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-uo-green text-white rounded-lg font-semibold hover:bg-uo-green/90 transition-all"
            >
              Follow on LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-gradient-to-br from-uo-green to-uo-green/90 rounded-3xl p-8 md:p-12 text-center text-white"
        >
          <p className="text-2xl font-display font-bold mb-4">
            "Do not let cynicism win. The impact that a small group of committed students can have should never be underestimated."
          </p>
          <p className="text-white/60">— Maggie Byrne, President, UO AISA</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-uo-green rounded-lg flex items-center justify-center">
              <span className="text-uo-gold font-bold text-2xl">AI</span>
            </div>
            <span className="font-display font-bold text-2xl text-uo-green">UO AISA</span>
          </div>
          <p className="text-gray-600">
            University of Oregon • Eugene, OR 97403
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            © 2024-2025 AI Student Association • Building the future, one student at a time
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ThankYou
