
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../products/ProductCard';
import { getFeaturedProducts } from '../../data/products';

const FeaturedProducts: React.FC = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="heading-md text-kosheli-brown mb-3">Featured Frames</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium photo frames, perfect for showcasing your cherished memories.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/shop" className="btn-primary inline-block">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
