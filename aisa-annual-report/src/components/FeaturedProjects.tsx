import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const FeaturedProjects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: 'AI Teaching Assistants',
      description: 'First in the nation to deploy student-led AI TAs at a university, beating Stanford and Harvard. Deployed across multiple courses, helping students learn more effectively.',
      impact: 'National first',
      icon: '🎓'
    },
    {
      title: 'LA Fires Response Tool',
      description: 'Rapid-response application built to help coordinate relief efforts and information distribution during the Los Angeles fires.',
      impact: 'Real-world crisis response',
      icon: '🔥'
    },
    {
      title: 'University Audit System',
      description: 'Internal tooling to help university administration analyze and optimize processes, saving time and improving decision-making.',
      impact: 'Institutional impact',
      icon: '📊'
    },
    {
      title: 'Jumpstart Platform',
      description: 'Platform to help students quickly prototype and launch AI-powered applications, lowering the barrier to entry for builders.',
      impact: 'Enabling student builders',
      icon: '🚀'
    },
    {
      title: 'Business Development Tools',
      description: 'Custom solutions built for partner companies, giving students real client experience while solving genuine business problems.',
      impact: 'Industry partnerships',
      icon: '💼'
    },
  ]

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-uo-green font-semibold text-sm uppercase tracking-wider">
            Tech Team Builds
          </span>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-gray-900 mt-4 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our members aren't just learning about AI—they're building real applications that solve real problems for real users.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all hover:scale-[1.02] group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{project.icon}</div>
              <h3 className="font-display font-bold text-2xl text-gray-900 mb-3">{project.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>
              <div className="inline-block px-4 py-2 bg-uo-green/10 text-uo-green text-sm font-semibold rounded-full">
                {project.impact}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 bg-gradient-to-br from-uo-green to-uo-green/90 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="font-display font-bold text-3xl mb-4">From Ideas to Production</h3>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Every project starts as a conversation and becomes deployed software. Our members gain real experience shipping code that matters.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="font-display font-bold text-4xl text-uo-gold mb-2">6+</div>
              <div className="text-white/80">Major projects completed</div>
            </div>
            <div>
              <div className="font-display font-bold text-4xl text-uo-gold mb-2">Real</div>
              <div className="text-white/80">Impact on users and institutions</div>
            </div>
            <div>
              <div className="font-display font-bold text-4xl text-uo-gold mb-2">100%</div>
              <div className="text-white/80">Student-led development</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProjects
