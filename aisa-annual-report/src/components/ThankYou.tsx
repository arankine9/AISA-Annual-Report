import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { UserPlus, Handshake, Link2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const ThankYou = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="relative py-32 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(21, 71, 51, 0.2) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Gradient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-uo-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-uo-green/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-display font-black text-7xl md:text-8xl bg-gradient-to-r from-uo-green to-uo-green/70 bg-clip-text text-transparent mb-8 tracking-tight">
            Thank You
          </h2>
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            To our members, alumni, guest speakers, industry partners, university supporters, and everyone who believed in what we're building—<span className="text-uo-green font-bold">this is just the beginning</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {([
            { title: 'Join Us', icon: UserPlus, desc: "Whether you're a student, alumni, or industry professional, there's a place for you in AISA.", link: 'mailto:aisa@uoregon.edu', cta: 'Get Involved' },
            { title: 'Partner With Us', icon: Handshake, desc: 'Companies and organizations interested in sponsorship, speaking, or collaboration.', link: 'mailto:partnerships@uoaisa.org', cta: 'Partner With Us' },
            { title: 'Stay Connected', icon: Link2, desc: "Follow our journey and see what we're building next.", link: 'https://www.linkedin.com/company/uo-aisa', cta: 'Follow on LinkedIn', external: true }
          ] as Array<{ title: string; icon: LucideIcon; desc: string; link: string; cta: string; external?: boolean }>).map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + (i * 0.1) }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="group relative bg-white border-2 border-gray-200 rounded-3xl p-10 text-center hover:shadow-2xl transition-all hover:border-uo-green/30"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-uo-green to-uo-gold rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative">
                <div className="mb-6 group-hover:scale-110 transition-transform flex justify-center">
                  <card.icon size={56} className="text-uo-green" strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-black text-3xl text-gray-900 mb-5 group-hover:text-uo-green transition-colors">{card.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  {card.desc}
                </p>
                <a
                  href={card.link}
                  {...(card.external && { target: "_blank", rel: "noopener noreferrer" })}
                  className="inline-block px-8 py-4 bg-gradient-to-r from-uo-green to-uo-green/90 text-white rounded-xl font-bold hover:scale-105 transition-all shadow-lg hover:shadow-xl text-lg"
                >
                  {card.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-gradient-to-br from-uo-green via-uo-green/95 to-uo-green/90 rounded-[3rem] p-12 md:p-16 text-center text-white border-4 border-white/20 shadow-2xl mb-20"
        >
          <p className="text-3xl md:text-4xl font-display font-black mb-6 leading-relaxed">
            "Do not let cynicism win. The impact that a small group of committed students can have should never be underestimated."
          </p>
          <p className="text-white/80 font-semibold text-xl">— Maggie Byrne, President, UO AISA</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-5 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-uo-green to-uo-green/80 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-uo-gold font-black text-3xl">AI</span>
            </div>
            <span className="font-display font-black text-4xl text-uo-green">UO AISA</span>
          </div>
          <p className="text-gray-700 font-semibold text-lg mb-3">
            University of Oregon • Eugene, OR 97403
          </p>
          <p className="text-gray-500 text-base font-medium">
            © 2024-2025 AI Student Association • Building the future, one student at a time
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ThankYou
