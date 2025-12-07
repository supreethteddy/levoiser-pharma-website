'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Pill, Microscope, Factory, Leaf, Shield, Heart } from 'lucide-react'

const ProductGrid = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, multiple: true })

  const products = [
    {
      id: 1,
      title: 'Therapeutic Formulations',
      description: 'Comprehensive range of prescription medicines across acute and chronic therapeutic areas.',
      icon: Pill,
      stats: '500+ Products',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      id: 2,
      title: 'Research & Development',
      description: 'Cutting-edge research facilities driving innovation in pharmaceutical science.',
      icon: Microscope,
      stats: '7 R&D Centers',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    },
    {
      id: 3,
      title: 'Manufacturing Excellence',
      description: 'World-class manufacturing facilities ensuring the highest quality standards.',
      icon: Factory,
      stats: '25+ Facilities',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      id: 4,
      title: 'Active Pharmaceutical Ingredients',
      description: 'High-quality APIs supporting the global pharmaceutical supply chain.',
      icon: Leaf,
      stats: '100+ APIs',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50',
      iconColor: 'text-teal-600'
    },
    {
      id: 5,
      title: 'Quality Assurance',
      description: 'Rigorous quality control and regulatory compliance across all operations.',
      icon: Shield,
      stats: '99.9% Quality Rate',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      id: 6,
      title: 'Consumer Healthcare',
      description: 'Non-prescription health and wellness products for everyday care.',
      icon: Heart,
      stats: '50+ Products',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-pharma-neutral-900 mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-pharma-neutral-600 max-w-3xl mx-auto">
            Diverse pharmaceutical solutions spanning the entire healthcare ecosystem, 
            from prescription medicines to consumer healthcare products.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                className={`${product.bgColor} p-8 rounded-2xl hover:shadow-xl transition-all duration-300 cursor-pointer border border-transparent hover:border-pharma-neutral-200 h-full`}
                whileHover={{ 
                  y: -8,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                }}
                whileTap={{ scale: 0.98 }}
                aria-label={`Learn more about ${product.title}`}
              >
                {/* Icon */}
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${product.color} mb-6`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <product.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-pharma-neutral-900 group-hover:text-pharma-primary transition-colors">
                    {product.title}
                  </h3>
                  
                  <p className="text-pharma-neutral-600 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-pharma-neutral-200">
                    <span className="text-sm font-medium text-pharma-neutral-500">
                      {product.stats}
                    </span>
                    
                    <motion.div
                      className={`${product.iconColor} text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform`}
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center bg-gradient-to-r from-pharma-primary to-pharma-secondary text-white px-8 py-4 rounded-lg font-medium hover:shadow-xl focus-ring transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(30, 58, 138, 0.3)'
            }}
            whileTap={{ scale: 0.98 }}
            aria-label="Discover our full product range"
          >
            <span>Discover Full Range</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductGrid

