import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-uo-green via-[#1a5c3e] to-[#0f3322]">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-uo-gold/20 via-transparent to-transparent"></div>

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-uo-gold rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-uo-gold rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-uo-gold rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-6 py-3 bg-uo-gold/30 backdrop-blur-md rounded-full text-uo-gold text-base font-bold mb-6 border border-uo-gold/30"
          >
            2024-2025 BI-ANNUAL REPORT
          </motion.div>

          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-[7rem] text-white mb-4 tracking-tight leading-none">
            Building the
            <br />
            <span className="bg-gradient-to-r from-uo-gold via-yellow-300 to-uo-gold bg-clip-text text-transparent">
              Future
            </span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl">at the University of Oregon</span>
          </h1>

          <p className="text-lg md:text-xl text-white/95 max-w-4xl mx-auto mb-8 leading-relaxed font-medium">
            From <span className="text-uo-gold font-bold">10 to 250+ members</span>.
            From ideas to <span className="text-uo-gold font-bold">Oregon's largest hackathon</span>.
            From students to <span className="text-uo-gold font-bold">national leaders</span> in AI education.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href="#letter"
              className="group px-10 py-5 bg-uo-gold text-uo-green rounded-xl font-bold text-lg hover:bg-yellow-300 transition-all hover:scale-110 hover:shadow-2xl shadow-uo-gold/50"
            >
              <span className="flex items-center gap-2">
                Read the Report
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
            <a
              href="#stats"
              className="px-10 py-5 bg-white/10 backdrop-blur-md text-white border-3 border-white/40 rounded-xl font-bold text-lg hover:bg-white/20 transition-all hover:scale-105 hover:border-white/60"
            >
              View Our Impact
            </a>
          </motion.div>
        </motion.div>


      </div>
    </section>
  )
}

export default Hero
