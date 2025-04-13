
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

const Navbar: React.FC = () => {
  const { getCartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="Kosheli Logo" className="h-8 w-8" />
            <span className="text-kosheli-green font-medium text-xl">Kosheli</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-kosheli-green">Home</Link>
            <Link to="/shop" className="text-gray-700 hover:text-kosheli-green">Shop</Link>
            <Link to="/about" className="text-gray-700 hover:text-kosheli-green">About</Link>
          </div>

          {/* Cart Icon */}
          <Link to="/cart" className="flex items-center">
            <div className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-kosheli-green" />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-kosheli-green text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden ml-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 
              <X className="h-6 w-6 text-gray-700" /> : 
              <Menu className="h-6 w-6 text-gray-700" />
            }
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-2 border-t">
            <div className="flex flex-col space-y-3 py-2">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-kosheli-green" 
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/shop" 
                className="text-gray-700 hover:text-kosheli-green"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-kosheli-green"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
