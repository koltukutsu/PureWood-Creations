import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-background.jpg"
        alt="Wooden toys background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="relative z-10 text-center text-white max-w-4xl px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Crafting Imagination with <span className="text-secondary">PureWood</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 font-light">
          Elevate playtime with our exquisite collection of natural wooden toys, 
          designed to inspire creativity and foster development.
        </p>
        <Button asChild size="lg" className="text-lg px-8 py-6 rounded-full transition-transform hover:scale-105">
          <Link href="#featured-products">Explore Our Artisanal Toys</Link>
        </Button>
      </div>
    </section>
  )
}

