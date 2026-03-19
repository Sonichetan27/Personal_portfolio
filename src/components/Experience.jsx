// import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { HiChevronDown, HiOfficeBuilding, HiCalendar, HiLocationMarker } from 'react-icons/hi'
// import { experience } from '../data/portfolio'

// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// }

// function ProjectCard({ project, index }) {
//   const [expanded, setExpanded] = useState(false)

//   return (
//     <motion.div
//       variants={fadeInUp}
//       className="bg-white dark:bg-dark-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-accent-400/50 transition-all"
//     >
//       <button
//         onClick={() => setExpanded(!expanded)}
//         className="w-full flex items-center justify-between text-left"
//       >
//         <div className="flex items-center gap-3">
//           <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-accent-400 flex items-center justify-center text-sm font-bold">
//             {index + 1}
//           </span>
//           <h4 className="font-semibold text-slate-800 dark:text-white text-sm sm:text-base">
//             {project.title}
//           </h4>
//         </div>
//         <motion.div
//           animate={{ rotate: expanded ? 180 : 0 }}
//           transition={{ duration: 0.2 }}
//           className="text-slate-400 flex-shrink-0"
//         >
//           <HiChevronDown size={20} />
//         </motion.div>
//       </button>

//       <AnimatePresence>
//         {expanded && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: 'auto', opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="overflow-hidden"
//           >
//             <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
//               {project.description}
//             </p>
//             <div className="flex flex-wrap gap-1.5 mt-3">
//               {project.tech.map((t) => (
//                 <span
//                   key={t}
//                   className="px-2.5 py-1 text-xs font-medium rounded-md bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-accent-400"
//                 >
//                   {t}
//                 </span>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   )
// }

// export default function Experience() {
//   return (
//     <section
//       id="experience"
//       className="py-20 lg:py-28 bg-white dark:bg-dark-900"
//     >
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: '-100px' }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
//             Work{' '}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500 dark:from-primary-400 dark:to-accent-400">
//               Experience
//             </span>
//           </h2>
//           <div className="w-20 h-1 bg-primary-600 dark:bg-accent-400 mx-auto rounded-full" />
//         </motion.div>

//         {/* Timeline */}
//         <div className="relative">
//           {/* Timeline Line */}
//           <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 hidden sm:block" />

//           {experience.map((exp) => (
//             <motion.div
//               key={exp.company}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: '-50px' }}
//               variants={{
//                 hidden: {},
//                 visible: { transition: { staggerChildren: 0.1 } },
//               }}
//               className="relative sm:pl-16"
//             >
//               {/* Timeline Dot */}
//               <div className="absolute left-4 top-1 w-5 h-5 rounded-full bg-primary-600 dark:bg-accent-400 border-4 border-white dark:border-dark-900 hidden sm:block" />

//               {/* Company Header */}
//               <motion.div variants={fadeInUp} className="mb-6">
//                 <div className="flex flex-wrap items-center gap-3 mb-2">
//                   <HiOfficeBuilding className="text-primary-600 dark:text-accent-400" size={20} />
//                   <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
//                     {exp.company}
//                   </h3>
//                 </div>
//                 <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-2">
//                   <span className="flex items-center gap-1.5">
//                     <HiLocationMarker size={16} /> {exp.location}
//                   </span>
//                 </div>
//                 {exp.roles && (
//                   <div className="space-y-1.5 mb-1">
//                     {exp.roles.map((r) => (
//                       <div key={r.title} className="flex flex-wrap items-center gap-3 text-sm">
//                         <span className="px-3 py-0.5 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-accent-400 font-medium text-xs">
//                           {r.title}
//                         </span>
//                         <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
//                           <HiCalendar size={14} /> {r.period}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//                 <p className="mt-3 text-slate-600 dark:text-slate-400 leading-relaxed">
//                   {exp.description}
//                 </p>
//               </motion.div>

//               {/* Projects */}
//               <div className="space-y-3">
//                 {exp.projects.map((project, i) => (
//                   <ProjectCard key={project.title} project={project} index={i} />
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
