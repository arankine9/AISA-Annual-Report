import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Letter', href: '#letter' },
    { label: 'Stats', href: '#stats' },
    { label: 'Learn & Land', href: '#learn' },
    { label: 'QuackHacks', href: '#quackhacks' },
    { label: 'SF Tour', href: '#tour' },
    { label: 'Projects', href: '#projects' },
    { label: '2026 Goals', href: '#goals' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isScrolled ? 'bg-uo-green' : 'bg-white/10 backdrop-blur-sm'
              }`}>
              <span className={`font-bold text-xl ${isScrolled ? 'text-uo-gold' : 'text-white'
                }`}>AI</span>
            </div>
            <span className={`font-display font-bold text-xl ${isScrolled ? 'text-uo-green' : 'text-white'
              }`}>
              UO AISA
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${isScrolled
                    ? 'text-gray-700 hover:text-uo-green'
                    : 'text-white/90 hover:text-white'
                  }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:block px-6 py-2.5 bg-uo-green text-white rounded-lg font-medium hover:bg-uo-green/90 transition-colors"
          >
            Get Involved
          </a>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation
