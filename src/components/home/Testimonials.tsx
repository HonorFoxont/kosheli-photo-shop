
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Photographer',
    content: 'The quality of these frames is exceptional. I use them for my professional photo displays and they always receive compliments from clients.',
    rating: 5
  },
  {
    name: 'Raj Sharma',
    role: 'Interior Designer',
    content: 'I recommend Kosheli frames to all my clients. Their elegant designs complement any interior style, from modern to traditional.',
    rating: 5
  },
  {
    name: 'Maya Tamang',
    role: 'Happy Customer',
    content: 'I ordered frames for my wedding photos and they arrived beautifully packaged. The craftsmanship is outstanding - will definitely buy again!',
    rating: 4
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-md text-kosheli-brown mb-3">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're proud to have helped thousands of customers display their precious memories with our quality frames.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
