import { Carousel } from '@/components/carousel'
import { ThreeItemGrid } from '@/components/grid/three-items'
import Footer from '@/components/layout/footer'
import { HeroSection } from '@/components/sections/hero-section'
import { FeaturedCollection } from '@/components/sections/featured-collection'
import { FeaturedProducts } from '@/components/sections/featured-products'
import { BenefitsSection } from '@/components/sections/benefits-section'
import { HowItWorks } from '@/components/sections/how-it-works'
import { Testimonials } from '@/components/sections/testimonials'
import { Newsletter } from '@/components/sections/newsletter'
import { CallToAction } from '@/components/sections/call-to-action'

export const metadata = {
  description: 'PureWood Creation: Crafting imagination with natural wooden toys for children.',
  openGraph: {
    type: 'website'
  }
};

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <ThreeItemGrid />
      <FeaturedCollection />
      <Carousel />
      <FeaturedProducts />
      <BenefitsSection />
      <HowItWorks />
      <Testimonials />
      <Newsletter />
      <CallToAction />
      <Footer />
    </div>
  )
}

