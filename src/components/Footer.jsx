import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa'
import { personalInfo } from '../data/portfolio'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socials = [
    { icon: FaGithub, href: personalInfo.github, label: 'GitHub' },
    { icon: FaLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: FaEnvelope, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ]

  return (
    <footer className="bg-white dark:bg-dark-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-sm text-slate-500 dark:text-slate-400">
            <span className="font-mono text-primary-600 dark:text-accent-400">&lt;/&gt;</span>{' '}
            {currentYear} {personalInfo.name}. Built with React & Tailwind CSS.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-slate-400 dark:text-slate-500 hover:text-primary-600 dark:hover:text-accent-400 transition-colors"
                  aria-label={social.label}
                >
                  <Icon size={18} />
                </a>
              )
            })}

            {/* Back to Top */}
            <Link
              to="hero"
              smooth={true}
              duration={800}
              className="ml-2 p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-accent-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all cursor-pointer"
              aria-label="Back to top"
            >
              <FaArrowUp size={14} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
