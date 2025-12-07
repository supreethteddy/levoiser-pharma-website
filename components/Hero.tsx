'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, ArrowDown } from 'lucide-react'

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const { scrollY } = useScroll()

  // Images array for carousel
  const images = [
    '/images/lab-research.svg',
    '/images/pharma-production.svg', 
    '/images/research-team.svg'
  ]

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [images.length])

  // Scroll-triggered animations
  const imageScale = useTransform(scrollY, [0, 300], [1, 0.75])
  const imageY = useTransform(scrollY, [0, 300], [0, -100])
  const imageOpacity = useTransform(scrollY, [0, 300], [1, 0.8])
  const textY = useTransform(scrollY, [0, 300], [0, 50])
  const textOpacity = useTransform(scrollY, [0, 200], [1, 0])

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  }

  const staggerChildren = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-pharma-neutral-50 to-pharma-neutral-100">
      {/* Background Image Carousel */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          scale: imageScale,
          y: imageY,
          opacity: imageOpacity
        }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 w-full h-screen"
            initial={{ opacity: index === 0 ? 1 : 0 }}
            animate={{ 
              opacity: currentImage === index ? 1 : 0,
              scale: currentImage === index ? 1 : 1.1
            }}
            transition={{ 
              duration: currentImage === index ? 0.8 : 1.2,
              ease: 'easeInOut'
            }}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: currentImage === index ? 'brightness(1)' : 'brightness(0.8)'
            }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-pharma-primary/70 via-pharma-primary/40 to-pharma-secondary/60"></div>
          </motion.div>
        ))}
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Carousel Navigation */}
        <div className="absolute top-8 right-8 z-20 flex space-x-2">
          {images.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentImage === index 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              onClick={() => setCurrentImage(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Arrow Navigation */}
        <motion.button
          className="absolute top-1/2 left-8 z-20 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
          onClick={() => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        <motion.button
          className="absolute top-1/2 right-8 z-20 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
          onClick={() => setCurrentImage((prev) => (prev + 1) % images.length)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>

        {/* Main Content */}
        <motion.div
          className="flex-1 flex items-center"
          style={{
            y: textY,
            opacity: textOpacity
          }}
        >
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              className="max-w-4xl mx-auto text-center text-white"
              variants={staggerChildren}
              initial="hidden"
              animate="visible"
            >
              {/* Badge */}
              <motion.div
                variants={fadeInUp}
                className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-full text-sm font-medium mb-8"
              >
                🏥 Trusted Healthcare Partner Since 1995
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
              >
                The Pursuit of a{' '}
                <span className="block text-transparent bg-gradient-to-r from-white to-pharma-neutral-200 bg-clip-text">
                  Healthier Bharat
                </span>
                <span className="block text-lg md:text-xl font-normal mt-4 opacity-90">
                  Fueled by Science
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={fadeInUp}
                className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto"
              >
                Leading pharmaceutical innovation through research, quality manufacturing, 
                and accessible healthcare solutions that transform lives worldwide.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <motion.button
                  className="group bg-white text-pharma-primary px-10 py-4 rounded-lg font-semibold hover:shadow-xl focus-ring transition-all duration-300 inline-flex items-center justify-center min-w-[200px]"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 20px 40px rgba(255,255,255,0.3)'
                  }}
                  whileTap={{ scale: 0.98 }}
                  aria-label="Explore our pharmaceutical products"
                >
                  <span>Learn More</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.button>

                <motion.button
                  className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-pharma-primary focus-ring transition-all duration-300 inline-flex items-center justify-center min-w-[200px]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label="Get in touch with us"
                >
                  Get In Touch
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-3 gap-12 mt-16 pt-12 border-t border-white/20"
              >
                <div className="text-center">
                  <motion.div
                    className="text-3xl md:text-4xl font-bold text-white mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2, duration: 0.8, ease: 'backOut' }}
                  >
                    500+
                  </motion.div>
                  <div className="text-sm md:text-base text-white/80">Products</div>
                </div>
                <div className="text-center">
                  <motion.div
                    className="text-3xl md:text-4xl font-bold text-white mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2.2, duration: 0.8, ease: 'backOut' }}
                  >
                    50+
                  </motion.div>
                  <div className="text-sm md:text-base text-white/80">Countries</div>
                </div>
                <div className="text-center">
                  <motion.div
                    className="text-3xl md:text-4xl font-bold text-white mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2.4, duration: 0.8, ease: 'backOut' }}
                  >
                    25+
                  </motion.div>
                  <div className="text-sm md:text-base text-white/80">Years</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center text-white"
          animate={{
            y: [0, 10, 0]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="text-sm mb-2 opacity-80">SCROLL</div>
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{
                scaleY: [1, 0.3, 1]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero