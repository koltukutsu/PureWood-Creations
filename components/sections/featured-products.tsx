import { ProductCard } from '@/components/product/product-card'

export function FeaturedProducts() {
  return (
    <section id="featured-products" className="py-20 px-4 md:px-6 bg-secondary bg-opacity-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Handcrafted Favorites</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProductCard
            product={{
              id: '1',
              name: 'Enchanted Forest Cottage',
              price: 79.99,
              images: [{ url: '/images/woodland-cottage.jpg' }],
              path: '/product/enchanted-forest-cottage'
            }}
          />
          <ProductCard
            product={{
              id: '2',
              name: 'Woodland Explorer Jeep',
              price: 59.99,
              images: [{ url: '/images/adventure-roadster.jpg' }],
              path: '/product/woodland-explorer-jeep'
            }}
          />
          <ProductCard
            product={{
              id: '3',
              name: 'Treetop Haven',
              price: 89.99,
              images: [{ url: '/images/treehouse-explorer.jpg' }],
              path: '/product/treetop-haven'
            }}
          />
        </div>
      </div>
    </section>
  )
}

