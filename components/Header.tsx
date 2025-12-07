'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    { name: 'Company', href: '#company', hasSubmenu: true },
    { name: 'R&D & Innovation', href: '#rd', hasSubmenu: true },
    { name: 'Products', href: '#products', hasSubmenu: false },
    { name: 'Manufacturing', href: '#manufacturing', hasSubmenu: false },
    { name: 'Careers', href: '#careers', hasSubmenu: false },
    { name: 'Contact', href: '#contact', hasSubmenu: false },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className={`transition-all duration-300 ${
              isScrolled ? 'scale-90' : 'scale-100'
            }`}
            whileHover={{ scale: 1.05 }}
          >
            <a href="#" className="flex items-center space-x-2 focus-ring rounded-lg">
              <div className="w-10 h-10 bg-gradient-to-br from-pharma-primary to-pharma-secondary rounded-lg flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                  <div className="w-4 h-4 bg-gradient-to-br from-pharma-primary to-pharma-secondary rounded-sm"></div>
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-pharma-primary">Levoiser Laboratories Pvt Ltd</h1>
              </div>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <motion.a
                  href={item.href}
                  className="flex items-center space-x-1 px-3 py-2 text-pharma-neutral-700 hover:text-pharma-primary transition-colors duration-200 focus-ring rounded-lg"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label={`Navigate to ${item.name} section`}
                >
                  <span className="font-medium">{item.name}</span>
                  {item.hasSubmenu && (
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </motion.a>
                
                {item.hasSubmenu && (
                  <motion.div
                    className="absolute top-full left-0 bg-white rounded-lg shadow-lg border border-pharma-neutral-200 min-w-64 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                  >
                    <div className="px-4 py-2">
                      <a href="#about" className="block py-2 text-sm text-pharma-neutral-700 hover:text-pharma-primary transition-colors">
                        About Us
                      </a>
                      <a href="#leadership" className="block py-2 text-sm text-pharma-neutral-700 hover:text-pharma-primary transition-colors">
                        Leadership
                      </a>
                      <a href="#awards" className="block py-2 text-sm text-pharma-neutral-700 hover:text-pharma-primary transition-colors">
                        Awards
                      </a>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div className="hidden lg:block">
            <motion.a
              href="#contact"
              className="bg-gradient-to-r from-pharma-primary to-pharma-secondary text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg focus-ring transition-all duration-200"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(30, 58, 138, 0.3)' }}
              whileTap={{ scale: 0.98 }}
              aria-label="Get in touch with us"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 text-pharma-neutral-700 hover:text-pharma-primary focus-ring rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile navigation menu"
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden mt-4 bg-white rounded-lg shadow-lg border border-pharma-neutral-200 overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-4">
                {navigationItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-pharma-neutral-700 hover:text-pharma-primary hover:bg-pharma-neutral-50 transition-colors focus-ring rounded-lg mx-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.div
                  className="px-4 pt-4 border-t border-pharma-neutral-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <a
                    href="#contact"
                    className="block w-full bg-gradient-to-r from-pharma-primary to-pharma-secondary text-white text-center py-3 rounded-lg font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get In Touch
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header

