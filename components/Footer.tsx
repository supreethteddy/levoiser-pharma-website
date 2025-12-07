'use client'

import { motion } from 'framer-motion'
import { ArrowUp, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  const staggerChildren = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Leadership', href: '#leadership' },
      { name: 'Careers', href: '#careers' },
      { name: 'Awards', href: '#awards' }
    ],
    products: [
      { name: 'Formulations', href: '#formulations' },
      { name: 'Consumer Healthcare', href: '#consumer' },
      { name: 'APIs', href: '#apis' },
      { name: 'Research', href: '#research' }
    ],
    resources: [
      { name: 'Blog', href: '#blog' },
      { name: 'Media', href: '#media' },
      { name: 'Investor Center', href: '#investor' },
      { name: 'Contact Us', href: '#contact' }
    ]
  }

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-700' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-500' }
  ]

  return (
    <motion.footer 
      className="bg-pharma-neutral-900 text-white relative"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-pharma-primary to-pharma-secondary text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 focus-ring"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        animate={{ 
          boxShadow: ['0 10px 25px rgba(30, 58, 138, 0.3)', '0 15px 35px rgba(30, 58, 138, 0.4)', '0 10px 25px rgba(30, 58, 138, 0.3)']
        }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          className="py-20"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div variants={fadeInUp} className="lg:col-span-1">
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-pharma-primary to-pharma-secondary rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                      <div className="w-4 h-4 bg-gradient-to-br from-pharma-primary to-pharma-secondary rounded-sm"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Levoiser Laboratories Pvt Ltd</h3>
                  </div>
                </div>
                
                <p className="text-pharma-neutral-400 leading-relaxed mb-6">
                  Leading pharmaceutical innovation through research, quality manufacturing, 
                  and accessible healthcare solutions worldwide.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-pharma-accent" />
                    <span className="text-sm">contact@levoiserlabs.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-pharma-accent" />
                    <span className="text-sm">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4 text-pharma-accent" />
                    <span className="text-sm">123 Pharma Drive, Healthcare City</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Company Links */}
            <motion.div variants={fadeInUp}>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-pharma-neutral-400 hover:text-white transition-colors duration-200 focus-ring rounded"
                      aria-label={`Navigate to ${link.name}`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Products Links */}
            <motion.div variants={fadeInUp}>
              <h4 className="text-lg font-semibold mb-6">Products</h4>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-pharma-neutral-400 hover:text-white transition-colors duration-200 focus-ring rounded"
                      aria-label={`Navigate to ${link.name}`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources Links */}
            <motion.div variants={fadeInUp}>
              <h4 className="text-lg font-semibold mb-6">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-pharma-neutral-400 hover:text-white transition-colors duration-200 focus-ring rounded"
                      aria-label={`Navigate to ${link.name}`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Social Media */}
              <div className="mt-8">
                <h5 className="text-base font-semibold mb-4">Follow Us</h5>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      className={`text-pharma-neutral-400 ${social.color} transition-colors duration-200 p-2 rounded-lg hover:bg-pharma-neutral-800 focus-ring`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="py-8 border-t border-pharma-neutral-800"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-pharma-neutral-400 text-sm">
              © 2024 Levoiser Laboratories Pvt Ltd. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a
                href="#privacy"
                className="text-pharma-neutral-400 hover:text-white transition-colors duration-200 focus-ring rounded"
                aria-label="Privacy Policy"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-pharma-neutral-400 hover:text-white transition-colors duration-200 focus-ring rounded"
                aria-label="Terms of Service"
              >
                Terms of Service
              </a>
              <a
                href="#cookies"
                className="text-pharma-neutral-400 hover:text-white transition-colors duration-200 focus-ring rounded"
                aria-label="Cookie Policy"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer