import { motion } from 'framer-motion'
import { FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa'
import { personalInfo, stats, education } from '../data/portfolio'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
}

export default function About() {
  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-white dark:bg-dark-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500 dark:from-primary-400 dark:to-accent-400">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-accent-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Bio */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            custom={1}
          >
            <div className="bg-slate-50 dark:bg-dark-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs font-mono text-slate-400">about.md</span>
              </div>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {personalInfo.summary}
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                  <FaMapMarkerAlt className="text-primary-500 dark:text-accent-400 flex-shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                  <FaGraduationCap className="text-primary-500 dark:text-accent-400 flex-shrink-0" />
                  <span>
                    {education.degree}, {education.institution} — CGPA: {education.cgpa} ({education.year})
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                custom={i + 2}
                className="bg-slate-50 dark:bg-dark-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 text-center hover:border-primary-300 dark:hover:border-accent-400/50 transition-colors group"
              >
                <div className="text-3xl sm:text-4xl font-bold text-primary-600 dark:text-accent-400 mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
