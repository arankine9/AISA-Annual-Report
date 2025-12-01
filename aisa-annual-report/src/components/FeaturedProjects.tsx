import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Flame, BarChart3, Rocket, Briefcase } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const FeaturedProjects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects: Array<{
    title: string
    description: string
    impact: string
    icon: LucideIcon
  }> = [
    {
      title: 'AI Teaching Assistants',
      description: 'First in the nation to deploy student-led AI TAs at a university, beating Stanford and Harvard. Deployed across multiple courses, helping students learn more effectively.',
      impact: 'National first',
      icon: GraduationCap
    },
    {
      title: 'LA Fires Response Tool',
      description: 'Rapid-response application built to help coordinate relief efforts and information distribution during the Los Angeles fires.',
      impact: 'Real-world crisis response',
      icon: Flame
    },
    {
      title: 'University Audit System',
      description: 'Internal tooling to help university administration analyze and optimize processes, saving time and improving decision-making.',
      impact: 'Institutional impact',
      icon: BarChart3
    },
    {
      title: 'Jumpstart Platform',
      description: 'Platform to help students quickly prototype and launch AI-powered applications, lowering the barrier to entry for builders.',
      impact: 'Enabling student builders',
      icon: Rocket
    },
    {
      title: 'Business Development Tools',
      description: 'Custom solutions built for partner companies, giving students real client experience while solving genuine business problems.',
      impact: 'Industry partnerships',
      icon: Briefcase
    },
  ]

  return (
    <section id="projects" className="relative py-32 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23154733' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Gradient accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-uo-green/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-uo-gold/10 rounded-full blur-3xl"></div>

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
            className="inline-block px-6 py-3 bg-gradient-to-r from-uo-green/10 to-uo-gold/10 backdrop-blur-sm rounded-full text-uo-green text-sm font-bold mb-6 border border-uo-green/20"
          >
            TECH TEAM BUILDS
          </motion.div>
          <h2 className="font-display font-black text-6xl md:text-8xl bg-gradient-to-r from-uo-green to-uo-green/70 bg-clip-text text-transparent mb-6 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto font-medium leading-relaxed">
            Our members aren't just learning about AI—they're <span className="text-uo-green font-bold">building real applications</span> that solve real problems for real users.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="group relative bg-white border-2 border-gray-200 rounded-3xl p-10 hover:shadow-2xl transition-all hover:border-uo-green/30"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-uo-green to-uo-gold rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative">
                <div className="mb-6 group-hover:scale-110 transition-transform">
                  <project.icon size={56} className="text-uo-green" strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-black text-2xl text-gray-900 mb-4 group-hover:text-uo-green transition-colors">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">{project.description}</p>
                <div className="inline-block px-5 py-2.5 bg-gradient-to-r from-uo-green/15 to-uo-gold/15 text-uo-green text-sm font-bold rounded-full border border-uo-green/20">
                  {project.impact}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-gradient-to-br from-uo-green via-uo-green/95 to-uo-green/90 rounded-[3rem] p-12 md:p-16 text-white text-center border-4 border-white/20 shadow-2xl"
        >
          <h3 className="font-display font-black text-5xl mb-6">From Ideas to Production</h3>
          <p className="text-2xl text-white/95 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
            Every project starts as a conversation and becomes deployed software. Our members gain real experience shipping code that matters.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: '6+', label: 'Major projects completed', color: 'from-blue-400 to-blue-600' },
              { number: 'Real', label: 'Impact on users and institutions', color: 'from-purple-400 to-purple-600' },
              { number: '100%', label: 'Student-led development', color: 'from-orange-400 to-red-500' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + (i * 0.1) }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/15 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/25 transition-all"
              >
                <div className={`font-display font-black text-6xl bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-3`}>{stat.number}</div>
                <div className="text-white/90 font-medium text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProjects
