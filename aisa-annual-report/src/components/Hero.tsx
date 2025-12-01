import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-uo-green via-uo-green/95 to-uo-green/90">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-uo-gold rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-uo-gold rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-uo-gold rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 bg-uo-gold/20 backdrop-blur-sm rounded-full text-uo-gold text-sm font-semibold mb-8">
            2024-2025 Bi-Annual Report
          </div>

          <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl text-white mb-6 tracking-tight">
            Building the
            <br />
            <span className="text-uo-gold">Future</span> at UO
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
            From 10 to 250+ members. From ideas to Oregon's largest hackathon.
            From students to national leaders in AI education.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#letter"
              className="px-8 py-4 bg-uo-gold text-uo-green rounded-lg font-semibold text-lg hover:bg-uo-gold/90 transition-all hover:scale-105"
            >
              Read the Report
            </a>
            <a
              href="#stats"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all"
            >
              View Our Impact
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-white/60">
            <span className="text-sm mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/40 rounded-full p-1"
            >
              <div className="w-1.5 h-3 bg-white/60 rounded-full mx-auto"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
