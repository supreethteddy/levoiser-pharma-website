'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Microscope, Factory, Award, Users, Globe, Shield } from 'lucide-react'

const FeaturesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const features = [
    {
      icon: Microscope,
      title: 'R&D Excellence'
    },
    {
      icon: Factory,
      title: 'Manufacturing'
    },
    {
      icon: Award,
      title: 'Certifications'
    }
  ]

  const achievements = [
    {
      icon: Microscope,
      title: 'R&D Excellence',
      description: '730+ Scientists working across 7 cutting-edge R&D centers globally',
      stats: '730+ Scientists',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Factory,
      title: 'Manufacturing Excellence',
      description: 'ISO-certified facilities ensuring the highest quality standards worldwide',
      stats: '43.5B Units Capacity',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Award,
      title: 'Quality Certifications',
      description: 'Multiple international certifications including ISO-45001 for safety',
      stats: 'ISO-45001 Certified',
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  const staggerChildren = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-pharma-neutral-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-pharma-neutral-900 mb-6">
            Driving <span className="gradient-text">Pharmaceutical Innovation</span>
          </h2>
          <p className="text-xl text-pharma-neutral-600 max-w-3xl mx-auto">
            We are architects of the future, setting new benchmarks in pharmaceutical excellence 
            through innovation, quality, and accessibility.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          className="mb-20"
          variants={staggerChildren}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center group"
              >
                <motion.div
                  className="relative mb-8"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`w-24 h-24 mx-auto bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center mb-6 relative group-hover:shadow-xl transition-shadow duration-300`}>
                    <achievement.icon className="w-12 h-12 text-white" />
                    
                    {/* Glow nimation */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${achievement.color} rounded-2xl opacity-0 group-hover:opacity-20`}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0, 0.2, 0]
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </div>
                </motion.div>

                <h3 className="text-2xl font-bold text-pharma-neutral-900 mb-4">
                  {achievement.title}
                </h3>
                
                <p className="text-pharma-neutral-600 mb-4 leading-relaxed">
                  {achievement.description}
                </p>

                <div className={`inline-block px-4 py-2 bg-gradient-to-r ${achievement.color} text-white rounded-lg font-medium text-sm`}>
                  {achievement.stats}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Values Section */}
        <motion.div
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-pharma-neutral-200"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-pharma-neutral-900 mb-6">
              Our Core <span className="gradient-text">Values</span>
            </h3>
            <p className="text-xl text-pharma-neutral-600 max-w-3xl mx-auto">
              Every decision we make is driven by our unwavering commitment to these fundamental principles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="text-center group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-pharma-primary to-pharma-primary rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-pharma-neutral-900 mb-4">Quality</h4>
              <p className="text-pharma-neutral-600 leading-relaxed">
                Our non-compromising approach ensures the highest quality standards in the pharmaceutical industry.
              </p>
            </motion.div>

            <motion.div
              className="text-center group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-pharma-secondary to-pharma-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-pharma-neutral-900 mb-4">Affordability</h4>
              <p className="text-pharma-neutral-600 leading-relaxed">
                Staying true to our founding principles, we deliver affordable medication that meets healthcare needs.
              </p>
            </motion.div>

            <motion.div
              className="text-center group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-pharma-accent to-pharma-accent rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-pharma-neutral-900 mb-4">Accessibility</h4>
              <p className="text-pharma-neutral-600 leading-relaxed">
                Pioneering supply chains and distribution setup bolster accessibility to remote areas.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection

