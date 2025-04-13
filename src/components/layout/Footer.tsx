
import React from 'react';
import { Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-kosheli-cream mt-16">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.svg" alt="Kosheli Logo" className="h-8 w-8" />
              <span className="text-kosheli-green font-medium text-xl">Kosheli</span>
            </div>
            <p className="text-gray-600 mb-4">
              Creating beautiful frames for your precious memories since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-kosheli-brown hover:text-kosheli-green transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-kosheli-brown hover:text-kosheli-green transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-kosheli-brown hover:text-kosheli-green transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-600 hover:text-kosheli-green transition-colors">Home</a></li>
              <li><a href="/shop" className="text-gray-600 hover:text-kosheli-green transition-colors">Shop</a></li>
              <li><a href="/about" className="text-gray-600 hover:text-kosheli-green transition-colors">About Us</a></li>
              <li><a href="/cart" className="text-gray-600 hover:text-kosheli-green transition-colors">Cart</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-kosheli-green" />
                <span className="text-gray-600">+977 01-4567890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-kosheli-green" />
                <span className="text-gray-600">info@kosheli.com</span>
              </li>
              <li className="text-gray-600">
                <p>Thamel, Kathmandu</p>
                <p>Nepal</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Kosheli Photo Frames. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
