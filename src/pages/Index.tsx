
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Testimonials from '../components/home/Testimonials';

const Index: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
