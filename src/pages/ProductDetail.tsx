
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { getProductById } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { Minus, Plus, ShoppingCart } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = getProductById(parseInt(id || '0'));
  
  if (!product) {
    return (
      <div>
        <Navbar />
        <div className="container-custom py-16 text-center">
          <h1 className="heading-lg text-kosheli-brown mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/shop" className="btn-primary">
            Continue Shopping
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decrementQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  return (
    <div>
      <Navbar />
      <main className="py-8">
        <div className="container-custom">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <nav className="text-sm text-gray-500">
              <ol className="flex flex-wrap items-center">
                <li className="flex items-center">
                  <Link to="/" className="hover:text-kosheli-green">Home</Link>
                  <span className="mx-2">/</span>
                </li>
                <li className="flex items-center">
                  <Link to="/shop" className="hover:text-kosheli-green">Shop</Link>
                  <span className="mx-2">/</span>
                </li>
                <li className="text-gray-700">{product.name}</li>
              </ol>
            </nav>
          </div>
          
          {/* Product Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Product Image */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Product Info */}
            <div>
              <h1 className="heading-md text-kosheli-brown mb-2">{product.name}</h1>
              <p className="text-2xl font-semibold text-kosheli-green mb-4">
                NPR {product.price.toLocaleString()}
              </p>
              
              <div className="border-t border-b py-4 my-6">
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>
              
              <div className="mb-8">
                <label className="block text-gray-700 mb-2">Quantity</label>
                <div className="flex items-center">
                  <button 
                    className="border border-gray-300 rounded-l w-10 h-10 flex items-center justify-center"
                    onClick={decrementQuantity}
                  >
                    <Minus size={16} />
                  </button>
                  <input 
                    type="number" 
                    min="1" 
                    value={quantity} 
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                    className="border-t border-b border-gray-300 h-10 w-16 text-center focus:outline-none"
                  />
                  <button 
                    className="border border-gray-300 rounded-r w-10 h-10 flex items-center justify-center"
                    onClick={incrementQuantity}
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="btn-primary flex items-center justify-center gap-2"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
                <button 
                  className="btn-secondary"
                  onClick={handleBuyNow}
                >
                  Buy Now
                </button>
              </div>
              
              <div className="mt-8">
                <h3 className="font-medium mb-2">Product Details:</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Category: {product.category.charAt(0).toUpperCase() + product.category.slice(1)}</li>
                  <li>• Material: Premium quality</li>
                  <li>• In Stock: Yes</li>
                  <li>• Shipping: Available across Nepal</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
