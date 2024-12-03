import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function FeaturedCollection() {
  return (
    <section className="py-20 px-4 md:px-6 bg-secondary bg-opacity-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">The Woodland Wonders Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Immerse your child in a world of natural beauty and endless possibilities with our 
              Woodland Wonders Collection. Each piece is meticulously crafted from sustainable wood, 
              bringing the serenity and wonder of the forest into your home.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <ArrowRight className="mr-2 h-5 w-5 text-accent" />
                <span>Encourages imaginative play and storytelling</span>
              </li>
              <li className="flex items-center">
                <ArrowRight className="mr-2 h-5 w-5 text-accent" />
                <span>Develops fine motor skills and spatial awareness</span>
              </li>
              <li className="flex items-center">
                <ArrowRight className="mr-2 h-5 w-5 text-accent" />
                <span>Safe, non-toxic finishes for worry-free playtime</span>
              </li>
            </ul>
            <Button asChild variant="outline" className="mt-4">
              <Link href="/collections/woodland-wonders">View Collection</Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/woodland-cottage.jpg"
              alt="Woodland Cottage"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
            <Image
              src="/images/forest-friends.jpg"
              alt="Forest Friends Set"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
            <Image
              src="/images/treehouse-explorer.jpg"
              alt="Treehouse Explorer"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
            <Image
              src="/images/woodland-vehicles.jpg"
              alt="Woodland Vehicles Set"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

