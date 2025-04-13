import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { MapPin, Mail, Phone } from 'lucide-react'

const About: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className='pt-8 pb-16'>
        <div className='container-custom'>
          {/* Hero Section */}
          <div className='mb-16'>
            <h1 className='heading-lg text-kosheli-brown mb-4'>
              About Kosheli Photo Frames
            </h1>
            <p className='text-gray-600 text-lg max-w-3xl'>
              We're on a mission to help you preserve and showcase your most
              precious memories with beautifully crafted photo frames.
            </p>
          </div>

          {/* Story Section */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16'>
            <div>
              <h2 className='heading-md text-kosheli-brown mb-4'>Our Story</h2>
              <p className='text-gray-600 mb-4'>
                Founded in 2045 B.S in the heart of Madhumalla, Kosheli began as
                a small workshop creating handcrafted photo frames. Our founder,
                Rabindra Prasad Bhattarai, wanted to create frames that not only
                protected photographs but enhanced them with beautiful designs
                that complement any home décor.
              </p>
              <p className='text-gray-600 mb-4'>
                Over the years, we've grown from a small local business to one
                of Morang's most trusted names in photo frames, while
                maintaining our commitment to quality craftsmanship and
                supporting local artisans.
              </p>
              <p className='text-gray-600'>
                Today, we offer a diverse collection of frames in various
                styles, materials, and sizes, catering to both individual
                customers and businesses throughout Nepal.
              </p>
            </div>
            <div>
              <img
                src='/about-image.jpg'
                alt='Kosheli Workshop'
                className='rounded-lg shadow-md w-full h-auto object-cover'
              />
            </div>
          </div>

          {/* Mission and Values */}
          <div className='mb-16'>
            <h2 className='heading-md text-kosheli-brown mb-4 text-center'>
              Our Mission & Values
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8'>
              <div className='bg-kosheli-cream p-6 rounded-lg'>
                <h3 className='text-xl font-medium mb-3 text-kosheli-brown'>
                  Quality
                </h3>
                <p className='text-gray-600'>
                  We use only the finest materials and employ skilled artisans
                  who take pride in their craftsmanship, ensuring each frame
                  meets our high standards.
                </p>
              </div>
              <div className='bg-kosheli-cream p-6 rounded-lg'>
                <h3 className='text-xl font-medium mb-3 text-kosheli-brown'>
                  Sustainability
                </h3>
                <p className='text-gray-600'>
                  We're committed to environmentally responsible practices,
                  using sustainably sourced materials and minimizing waste
                  throughout our production process.
                </p>
              </div>
              <div className='bg-kosheli-cream p-6 rounded-lg'>
                <h3 className='text-xl font-medium mb-3 text-kosheli-brown'>
                  Community
                </h3>
                <p className='text-gray-600'>
                  We support local artisans and communities by providing fair
                  employment opportunities and preserving traditional crafting
                  techniques.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className='heading-md text-kosheli-brown mb-8 text-center'>
              Contact Us
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
              <div>
                <div className='mb-6'>
                  <h3 className='text-xl font-medium mb-3'>Visit Our Store</h3>
                  <div className='flex items-start gap-3'>
                    <MapPin className='text-kosheli-green mt-1' />
                    <p className='text-gray-600'>
                      Kosheli Photo Frames
                      <br />
                      Miklajung-9, Morang
                      <br />
                      Nepal
                    </p>
                  </div>
                </div>

                <div className='mb-6'>
                  <h3 className='text-xl font-medium mb-3'>Email Us</h3>
                  <div className='flex items-center gap-3'>
                    <Mail className='text-kosheli-green' />
                    <p className='text-gray-600'>koshelistudio@outlook.com</p>
                  </div>
                </div>

                <div>
                  <h3 className='text-xl font-medium mb-3'>Call Us</h3>
                  <div className='flex items-center gap-3'>
                    <Phone className='text-kosheli-green' />
                    <p className='text-gray-600'>+977 9827352725</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className='text-xl font-medium mb-4'>Send Us a Message</h3>
                <form className='space-y-4'>
                  <div>
                    <label htmlFor='name' className='block mb-1 text-gray-700'>
                      Your Name
                    </label>
                    <input
                      type='text'
                      id='name'
                      className='w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-kosheli-green'
                    />
                  </div>
                  <div>
                    <label htmlFor='email' className='block mb-1 text-gray-700'>
                      Email Address
                    </label>
                    <input
                      type='email'
                      id='email'
                      className='w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-kosheli-green'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='message'
                      className='block mb-1 text-gray-700'
                    >
                      Message
                    </label>
                    <textarea
                      id='message'
                      rows={4}
                      className='w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-kosheli-green'
                    ></textarea>
                  </div>
                  <button type='submit' className='btn-primary'>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default About
