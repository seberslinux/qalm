import React from 'react';
export const Hero = () => {
  return <section className="w-full relative">
      <div className="relative h-[80vh] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Person wearing comfortable sensory-friendly clothing" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-light mb-4 max-w-3xl">
            Sense and Style
          </h1>
          <p className="text-white text-lg md:text-xl mb-8 max-w-xl">
            Calming design for busy worlds
          </p>
          <div>
            <a href="#" className="bg-white text-black px-8 py-3 text-sm uppercase tracking-wider hover:bg-gray-100 transition-colors">
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>;
};