import { motion } from 'framer-motion'
import { HiCode, HiExternalLink } from 'react-icons/hi'
import { project } from '../data/portfolio'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const projectColors = [
  'from-blue-500 to-cyan-500',
  'from-purple-500 to-pink-500',
  'from-emerald-500 to-teal-500',
  'from-orange-500 to-amber-500',
  'from-rose-500 to-red-500',
]

export default function Projects() {
  const projects = project

  return (
    <section
      id="projects"
      className="py-20 lg:py-28 bg-slate-50 dark:bg-dark-950"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500 dark:from-primary-400 dark:to-accent-400">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-accent-400 mx-auto rounded-full" />
        </motion.div>

        {/* Project Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="group bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:shadow-primary-500/10 dark:hover:shadow-accent-400/5 hover:border-primary-300 dark:hover:border-accent-400/50 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Color Accent Bar */}
              <div className={`h-1.5 bg-gradient-to-r ${projectColors[i % projectColors.length]}`} />

              <div className="p-6 flex flex-col flex-1">
                {/* Project Number and Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700/50 text-primary-600 dark:text-accent-400">
                    <HiCode size={22} />
                  </div>
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                    #{String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-accent-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 flex-1">
                  {project.description.length > 250
                    ? project.description.substring(0, 250) + '...'
                    : project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="px-2 py-0.5 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-700/50 text-slate-500 dark:text-slate-500">
                      +{project.tech.length - 5}
                    </span>
                  )}

                  {/* View Project Link */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-primary-600 dark:text-accent-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Verify <HiExternalLink size={14} />
                  </a>

                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
