
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { useCart } from '../contexts/CartContext';
import { CreditCard } from 'lucide-react';

const Checkout: React.FC = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'esewa'
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate a successful order
    setTimeout(() => {
      clearCart();
      navigate('/order-success');
    }, 1500);
  };
  
  if (cart.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div>
      <Navbar />
      <main className="py-8">
        <div className="container-custom">
          <h1 className="heading-lg text-kosheli-brown mb-8">Checkout</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit}>
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                  <h2 className="text-xl font-medium mb-4">Contact Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label htmlFor="firstName" className="block mb-1 text-gray-700">First Name *</label>
                      <input 
                        type="text" 
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-kosheli-green"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block mb-1 text-gray-700">Last Name *</label>
                      <input 
                        type="text" 
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-kosheli-green"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block mb-1 text-gray-700">Email Address *</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-kosheli-green"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block mb-1 text-gray-700">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-kosheli-green"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                  <h2 className="text-xl font-medium mb-4">Shipping Information</h2>
                  
                  <div className="mb-4">
                    <label htmlFor="address" className="block mb-1 text-gray-700">Address *</label>
                    <input 
                      type="text" 
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-kosheli-green"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="city" className="block mb-1 text-gray-700">City *</label>
                      <input 
                        type="text" 
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-kosheli-green"
                      />
                    </div>
                    <div>
                      <label htmlFor="zipCode" className="block mb-1 text-gray-700">Postal Code *</label>
                      <input 
                        type="text" 
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-kosheli-green"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                  <h2 className="text-xl font-medium mb-4">Payment Method</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        id="esewa" 
                        name="paymentMethod" 
                        value="esewa"
                        checked={formData.paymentMethod === 'esewa'}
                        onChange={handleChange}
                        className="h-4 w-4 text-kosheli-green"
                      />
                      <label htmlFor="esewa" className="ml-2 flex items-center">
                        <span className="mr-2">eSewa</span>
                        <img src="https://esewa.com.np/common/images/esewa_logo.png" alt="eSewa" className="h-6" />
                      </label>
                    </div>
                    
                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        id="cod" 
                        name="paymentMethod" 
                        value="cod"
                        checked={formData.paymentMethod === 'cod'}
                        onChange={handleChange}
                        className="h-4 w-4 text-kosheli-green"
                      />
                      <label htmlFor="cod" className="ml-2">Cash on Delivery</label>
                    </div>
                  </div>
                </div>
                
                <button type="submit" className="btn-primary w-full py-3 text-lg flex items-center justify-center gap-2">
                  <CreditCard size={20} />
                  Complete Order
                </button>
              </form>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
                <h2 className="text-xl font-medium mb-4">Order Summary</h2>
                
                <div className="max-h-80 overflow-y-auto mb-4">
                  {cart.map((item) => (
                    <div key={item.product.id} className="flex items-center py-3 border-b last:border-b-0">
                      <div className="w-16 h-16 bg-gray-100 mr-3 rounded overflow-hidden flex-shrink-0">
                        <img 
                          src={item.product.image} 
                          alt={item.product.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-sm font-medium">{item.product.name}</h4>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-gray-500 text-sm">Qty: {item.quantity}</span>
                          <span className="text-gray-700 text-sm">NPR {(item.product.price * item.quantity).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>NPR {getCartTotal().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                </div>
                
                <div className="border-t pt-3">
                  <div className="flex justify-between font-medium text-lg">
                    <span>Total</span>
                    <span>NPR {getCartTotal().toLocaleString()}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Including VAT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
