import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface Product {
  id: string
  name: string
  price: number
  images: { url: string }[]
  path: string
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <Image
          src={product.images[0].url}
          alt={product.name}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          width={300}
          height={300}
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link href={product.path}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </Link>
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900">${product.price.toFixed(2)}</p>
      </div>
      <Button asChild className="mt-2 w-full">
        <Link href={product.path}>View Product</Link>
      </Button>
    </div>
  )
}

