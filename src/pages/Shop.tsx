
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProductCard from '../components/products/ProductCard';
import { products } from '../data/products';
import { Filter, Search, ChevronDown } from 'lucide-react';

const Shop: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('default');
  const [showFilters, setShowFilters] = useState<boolean>(false);
  
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'wooden', name: 'Wooden Frames' },
    { id: 'metal', name: 'Metal Frames' },
    { id: 'premium', name: 'Premium Collection' },
    { id: 'modern', name: 'Modern Designs' },
    { id: 'specialty', name: 'Specialty Frames' },
  ];
  
  const filterProducts = () => {
    let filtered = [...products];
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    switch (sortBy) {
      case 'price-low':
        return filtered.sort((a, b) => a.price - b.price);
      case 'price-high':
        return filtered.sort((a, b) => b.price - a.price);
      case 'name-asc':
        return filtered.sort((a, b) => a.name.localeCompare(b.name));
      case 'name-desc':
        return filtered.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return filtered;
    }
  };
  
  const filteredProducts = filterProducts();

  return (
    <div>
      <Navbar />
      <main className="pt-6 pb-16">
        <div className="container-custom">
          <div className="mb-8">
            <h1 className="heading-lg text-kosheli-brown mb-2">Shop Our Collection</h1>
            <p className="text-gray-600">
              Browse our carefully curated selection of high-quality photo frames
            </p>
          </div>
          
          {/* Filters and Sorting */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
              <button 
                className="md:hidden flex items-center gap-2 text-kosheli-brown"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter size={20} />
                <span>Filters</span>
                <ChevronDown size={16} className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`w-full md:w-auto ${showFilters ? 'block' : 'hidden md:block'}`}>
                <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      className={`px-4 py-2 rounded-full text-sm ${
                        selectedCategory === category.id 
                          ? 'bg-kosheli-green text-white' 
                          : 'bg-kosheli-light-gray text-gray-700 hover:bg-kosheli-taupe'
                      }`}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="w-full md:w-auto">
                <select
                  className="w-full md:w-auto border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-kosheli-green"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="default">Sort by: Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name-asc">Name: A to Z</option>
                  <option value="name-desc">Name: Z to A</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">No products found in this category.</p>
              <button 
                className="btn-secondary"
                onClick={() => setSelectedCategory('all')}
              >
                View All Products
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
