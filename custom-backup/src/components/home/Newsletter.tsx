import React from 'react';
export const Newsletter = () => {
  return <section className="py-20 px-4 md:px-6 bg-gray-100">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-light mb-4">Join Our Community</h2>
        <p className="text-gray-600 mb-8">
          Subscribe to receive updates on new products, sensory-friendly tips,
          and exclusive offers.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
          <input type="email" placeholder="Your email address" className="flex-grow px-4 py-3 border border-gray-300 focus:border-black focus:outline-none" aria-label="Email address" required />
          <button type="submit" className="bg-black text-white px-6 py-3 text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors">
            Subscribe
          </button>
        </form>
        <p className="text-gray-500 text-sm mt-4">
          By subscribing, you agree to our Privacy Policy and consent to receive
          updates from SENSORY.
        </p>
      </div>
    </section>;
};