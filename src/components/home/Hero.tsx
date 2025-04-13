
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative">
      <div className="h-[70vh] relative">
        <div className="absolute inset-0">
          <img 
            src="/hero-image.jpg" 
            alt="Kosheli Photo Frames" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative container-custom h-full flex items-center">
          <div className="max-w-xl text-white animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-medium mb-4">
              Frame Your Cherished Memories
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              Discover our collection of beautifully crafted photo frames to showcase your most precious moments.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shop" className="btn-primary">
                Shop Now
              </Link>
              <Link to="/about" className="border-2 border-white text-white px-6 py-3 rounded hover:bg-white hover:text-kosheli-green transition-all">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
