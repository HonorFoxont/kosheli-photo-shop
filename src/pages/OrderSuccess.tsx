import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { CheckCircle } from 'lucide-react'

const OrderSuccess: React.FC = () => {
  // Generate random order number
  const orderNumber = React.useMemo(() => {
    return `KSL-${Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, '0')}`
  }, [])

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Navbar />
      <main className='py-12'>
        <div className='container-custom'>
          <div className='max-w-2xl mx-auto text-center'>
            <div className='flex justify-center mb-6'>
              <CheckCircle size={80} className='text-green-500' />
            </div>

            <h1 className='heading-lg text-kosheli-brown mb-4'>
              Order Successful!
            </h1>

            <div className='bg-white rounded-lg shadow-sm p-8 mb-8'>
              <p className='text-gray-600 mb-6'>
                Thank you for your purchase. Your order has been received and is
                now being processed.
              </p>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                <div className='border border-gray-200 rounded p-4'>
                  <h3 className='font-medium mb-2'>Order Number</h3>
                  <p className='text-lg text-kosheli-green'>{orderNumber}</p>
                </div>
                <div className='border border-gray-200 rounded p-4'>
                  <h3 className='font-medium mb-2'>Estimated Delivery</h3>
                  <p className='text-lg'>3-5 Business Days</p>
                </div>
              </div>

              <p className='text-gray-600 mb-6'>
                We've sent a confirmation email with order details and tracking
                information.
              </p>

              <div className='border-t pt-6'>
                <h3 className='font-medium mb-3'>Need Help?</h3>
                <p className='text-gray-600 mb-2'>
                  If you have any questions about your order, please contact our
                  customer service:
                </p>
                <p className='text-kosheli-green'>
                  koshelistudio@outlook.com | +977 9827352725
                </p>
              </div>
            </div>
            
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link to='/shop' className='btn-primary'>
                Continue Shopping
              </Link>
              <Link to='/' className='btn-secondary'>
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default OrderSuccess
