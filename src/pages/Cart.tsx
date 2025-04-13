
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { useCart } from '../contexts/CartContext';
import { Trash2, Plus, Minus, ShoppingCart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  
  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div>
      <Navbar />
      <main className="py-8 md:py-12">
        <div className="container-custom">
          <h1 className="heading-lg text-kosheli-brown mb-8">Shopping Cart</h1>
          
          {cart.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <Card className="shadow-sm overflow-hidden">
                  <div className="hidden md:grid grid-cols-12 bg-gray-50 p-4">
                    <div className="col-span-6">
                      <h3 className="font-medium">Product</h3>
                    </div>
                    <div className="col-span-2 text-center">
                      <h3 className="font-medium">Price</h3>
                    </div>
                    <div className="col-span-2 text-center">
                      <h3 className="font-medium">Quantity</h3>
                    </div>
                    <div className="col-span-2 text-right">
                      <h3 className="font-medium">Total</h3>
                    </div>
                  </div>
                  
                  {cart.map((item) => (
                    <div key={item.product.id} className="border-t border-gray-100">
                      <CardContent className="p-4 md:p-6">
                        {/* Product Info & Image - Mobile & Desktop */}
                        <div className="flex items-center mb-4">
                          <div className="w-20 h-20 rounded overflow-hidden flex-shrink-0 bg-gray-100">
                            <img 
                              src={item.product.image} 
                              alt={item.product.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="ml-4 flex-1">
                            <h3 className="font-medium text-base md:text-lg">{item.product.name}</h3>
                            <button 
                              className="text-red-500 text-sm flex items-center mt-2"
                              onClick={() => removeFromCart(item.product.id)}
                            >
                              <Trash2 size={14} className="mr-1" />
                              Remove
                            </button>
                          </div>
                        </div>

                        {/* Price, Quantity, Total - Desktop */}
                        <div className="hidden md:grid md:grid-cols-12 md:gap-4 items-center">
                          <div className="md:col-span-6">
                            {/* Empty on purpose - space for product info above */}
                          </div>
                          <div className="md:col-span-2 text-center">
                            <span>NPR {item.product.price.toLocaleString()}</span>
                          </div>
                          <div className="md:col-span-2 flex justify-center">
                            <div className="flex items-center">
                              <button 
                                className="border border-gray-300 rounded-l p-1 w-8 h-8 flex items-center justify-center"
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                              >
                                <Minus size={14} />
                              </button>
                              <input 
                                type="text" 
                                value={item.quantity} 
                                onChange={(e) => {
                                  const val = parseInt(e.target.value);
                                  if (!isNaN(val)) {
                                    updateQuantity(item.product.id, val);
                                  }
                                }}
                                className="border-t border-b border-gray-300 h-8 w-10 text-center focus:outline-none"
                              />
                              <button 
                                className="border border-gray-300 rounded-r p-1 w-8 h-8 flex items-center justify-center"
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                          </div>
                          <div className="md:col-span-2 text-right">
                            <span className="font-medium">
                              NPR {(item.product.price * item.quantity).toLocaleString()}
                            </span>
                          </div>
                        </div>

                        {/* Price, Quantity, Total - Mobile Only */}
                        <div className="md:hidden space-y-4 mt-2">
                          <div className="flex justify-between items-center py-2 border-t border-b border-gray-100">
                            <span className="font-medium">Price:</span>
                            <span>NPR {item.product.price.toLocaleString()}</span>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <span className="font-medium">Quantity:</span>
                            <div className="flex items-center">
                              <button 
                                className="border border-gray-300 rounded-l p-1 w-8 h-8 flex items-center justify-center"
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                              >
                                <Minus size={14} />
                              </button>
                              <input 
                                type="text" 
                                value={item.quantity} 
                                onChange={(e) => {
                                  const val = parseInt(e.target.value);
                                  if (!isNaN(val)) {
                                    updateQuantity(item.product.id, val);
                                  }
                                }}
                                className="border-t border-b border-gray-300 h-8 w-10 text-center focus:outline-none"
                              />
                              <button 
                                className="border border-gray-300 rounded-r p-1 w-8 h-8 flex items-center justify-center"
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-center py-2 border-t border-b border-gray-100">
                            <span className="font-medium">Total:</span>
                            <span className="font-medium">
                              NPR {(item.product.price * item.quantity).toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  ))}
                </Card>
                
                <div className="flex justify-between mt-6">
                  <Link to="/shop" className="text-kosheli-green hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                    Continue Shopping
                  </Link>
                  <button 
                    className="text-red-500 hover:text-red-600"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="shadow-sm">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-medium mb-4">Order Summary</h2>
                    
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
                    
                    <div className="border-t pt-3 mb-6">
                      <div className="flex justify-between font-medium">
                        <span>Total</span>
                        <span>NPR {getCartTotal().toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <button 
                      className="btn-primary w-full mb-4 flex items-center justify-center gap-2"
                      onClick={handleCheckout}
                    >
                      Proceed to Checkout
                    </button>
                    
                    <p className="text-sm text-gray-500 text-center">
                      Taxes and shipping calculated at checkout
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="mb-6 flex justify-center">
                <ShoppingCart size={64} className="text-gray-300" />
              </div>
              <h2 className="text-2xl font-medium mb-2">Your Cart is Empty</h2>
              <p className="text-gray-600 mb-8">
                Looks like you haven't added any products to your cart yet.
              </p>
              <Link to="/shop" className="btn-primary">
                Start Shopping
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
