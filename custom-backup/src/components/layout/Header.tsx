import React, { useState } from 'react';
import { ShoppingBagIcon, SearchIcon, MenuIcon, XIcon, UserIcon } from 'lucide-react';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
          {/* Logo */}
          <div className="flex-1 md:flex-none text-center md:text-left">
            <a href="/" className="inline-block">
              {/* Logo Placeholder - Replace the src with your actual logo URL */}
              <img src="https://placehold.co/200x60?text=YOUR+LOGO" alt="SENSORY Logo" className="h-10 w-auto" />
            </a>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">
              Shop
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">
              Shop by Need
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">
              Contact
            </a>
          </nav>
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button aria-label="Search" className="text-gray-600 hover:text-black transition-colors">
              <SearchIcon size={20} />
            </button>
            <button aria-label="Account" className="text-gray-600 hover:text-black transition-colors">
              <UserIcon size={20} />
            </button>
            <button aria-label="Cart" className="text-gray-600 hover:text-black transition-colors relative">
              <ShoppingBagIcon size={20} />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                0
              </span>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden pt-4 pb-3">
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                Shop
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                Shop by Need
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                About
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                Contact
              </a>
            </nav>
          </div>}
      </div>
    </header>;
};