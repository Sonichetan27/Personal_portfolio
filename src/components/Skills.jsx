import { motion } from 'framer-motion'
import { skillCategories } from '../data/portfolio'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function Skills() {
  return (
    <section
      id="skills"
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
            Technical{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500 dark:from-primary-400 dark:to-accent-400">
              Skills
            </span>
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-accent-400 mx-auto rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon
            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                className="group bg-white dark:bg-dark-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-accent-400/50 hover:shadow-xl hover:shadow-primary-500/5 dark:hover:shadow-accent-400/5 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-accent-400 group-hover:scale-110 transition-transform">
                    <CategoryIcon size={22} />
                  </div>
                  <h3 className="font-semibold text-slate-800 dark:text-white text-lg">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-700 dark:hover:text-accent-400 transition-colors"
                    >
                      {skill.icon && <skill.icon size={14} />}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
