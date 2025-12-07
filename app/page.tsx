import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProductGrid from '@/components/ProductGrid'
import FeaturesSection from '@/components/FeaturesSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <ProductGrid />
      <FeaturesSection />
      <Footer />
    </main>
  )
}

