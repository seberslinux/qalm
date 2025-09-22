import React from 'react';
export const AboutSection = () => {
  return <section className="py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-light mb-6">
              Our Sensory-Friendly Promise
            </h2>
            <p className="text-gray-600 mb-6">
              At SENSORY, we understand the unique challenges faced by
              individuals with sensory sensitivities. Our mission is to create
              clothing that feels as good as it looks, with an unwavering
              commitment to comfort, quality, and inclusivity.
            </p>
            <p className="text-gray-600 mb-8">
              Every piece in our collection is thoughtfully designed with
              seamless construction, tag-free labels, ultra-soft fabrics, and
              adjustable features to accommodate various sensory needs. We
              believe that everyone deserves to feel comfortable in their own
              skin—and in their clothes.
            </p>
            <a href="#" className="inline-block border border-black px-8 py-3 text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors">
              Learn More
            </a>
          </div>
          <div className="order-1 lg:order-2">
            <img src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Person enjoying sensory-friendly clothing" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>;
};