
import React from 'react';
import { Truck, RefreshCw, ShieldCheck, Clock } from 'lucide-react';

const features = [
  {
    icon: <Truck className="h-8 w-8 text-kosheli-green" />,
    title: 'Free Delivery',
    description: 'Free shipping on all orders above NPR 5,000'
  },
  {
    icon: <RefreshCw className="h-8 w-8 text-kosheli-green" />,
    title: '15-Day Returns',
    description: 'Easy returns within 15 days of purchase'
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-kosheli-green" />,
    title: 'Quality Guarantee',
    description: 'All frames backed by our quality promise'
  },
  {
    icon: <Clock className="h-8 w-8 text-kosheli-green" />,
    title: 'Customer Support',
    description: 'Available 7 days a week, 9am to 6pm'
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-kosheli-cream">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
