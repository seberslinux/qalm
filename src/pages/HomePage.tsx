import React from 'react';
import { Hero } from '../components/home/Hero';
import { Categories } from '../components/home/Categories';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { AboutSection } from '../components/home/AboutSection';
import { Newsletter } from '../components/home/Newsletter';
export const HomePage = () => {
  return <div className="w-full">
      <Hero />
      <Categories />
      <FeaturedProducts />
      <AboutSection />
      <Newsletter />
    </div>;
};