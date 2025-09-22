import React from 'react';
import { ProductCard, ProductProps } from '../ui/ProductCard';
const products: ProductProps[] = [{
  id: 1,
  name: 'Seamless Relaxed Tee',
  price: '$58.00',
  image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80',
  colors: ['#E0E0E0', '#C9B7A8', '#000000']
}, {
  id: 2,
  name: 'Soft Touch Lounge Pants',
  price: '$68.00',
  image: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
  colors: ['#E0E0E0', '#C9B7A8']
}, {
  id: 3,
  name: 'Pressure Relief Weighted Scarf',
  price: '$45.00',
  image: 'https://images.unsplash.com/photo-1520642413789-2bd6770d59e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
  colors: ['#C9B7A8', '#6B7D7D', '#000000']
}, {
  id: 4,
  name: 'Bamboo Sensory Socks',
  price: '$22.00',
  image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80',
  colors: ['#E0E0E0', '#C9B7A8', '#000000', '#6B7D7D']
}];
export const FeaturedProducts = () => {
  return <section className="py-20 px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-light text-center mb-4">
          Featured Products
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">
          Designed with sensory comfort in mind, our products feature tagless
          designs, flat seams, and ultra-soft fabrics.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => <ProductCard key={product.id} {...product} />)}
        </div>
        <div className="text-center mt-12">
          <a href="#" className="inline-block border border-black px-8 py-3 text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors">
            View All Products
          </a>
        </div>
      </div>
    </section>;
};