import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function CallToAction() {
  return (
    <section className="py-20 px-4 md:px-6 text-center bg-accent text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6">Ready to Inspire Wonder?</h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Discover our full range of artisanal wooden toys and start your journey towards imaginative, educational play.
        </p>
        <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6 rounded-full transition-transform hover:scale-105">
          <Link href="/products">Explore All Collections</Link>
        </Button>
      </div>
    </section>
  )
}

