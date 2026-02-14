import { motion } from 'framer-motion'
import { HiExternalLink } from 'react-icons/hi'
import { certifications } from '../data/portfolio'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
}

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-20 lg:py-28 bg-white dark:bg-dark-900"
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
            Certifications{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500 dark:from-primary-400 dark:to-accent-400">
              & Badges
            </span>
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-accent-400 mx-auto rounded-full" />
        </motion.div>

        {/* Certification Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {certifications.map((cert) => {
            const CertIcon = cert.icon
            return (
              <motion.a
                key={cert.title}
                variants={cardVariants}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center text-center p-6 bg-slate-50 dark:bg-dark-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-accent-400/50 hover:shadow-lg hover:shadow-primary-500/5 dark:hover:shadow-accent-400/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-accent-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <CertIcon size={28} />
                </div>
                <h3 className="text-sm font-semibold text-slate-800 dark:text-white mb-1 leading-tight">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                  {cert.issuer}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-primary-600 dark:text-accent-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Verify <HiExternalLink size={14} />
                </span>
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
