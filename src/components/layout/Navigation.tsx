'use client';

import { useState } from 'react';
import Link from 'next/link';
import { companyInfo, services } from '@/lib/constants';

interface NavigationProps {
  isScrolled: boolean;
}

export default function Navigation({ isScrolled }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMobileMenu();
    }
  };

  const textColor = isScrolled ? 'text-gray-800' : 'text-white';
  const hoverColor = isScrolled ? 'hover:text-primary' : 'hover:text-accent';

  return (
    <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20">
        {/* Logo */}
        <div className="shrink-0">
          <Link
            href="/"
            className="flex items-center transition-opacity hover:opacity-80"
            onClick={() => scrollToSection('hero')}
            aria-label="CLNL Home"
          >
            <img 
              src="/images/logo.png" 
              alt="CLNL - Complete Logistics Network Limited" 
              className="h-12 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          <button
            type="button"
            onClick={() => scrollToSection('hero')}
            className={`${textColor} ${hoverColor} transition-colors font-medium`}
          >
            Home
          </button>
          
          <button
            type="button"
            onClick={() => scrollToSection('about')}
            className={`${textColor} ${hoverColor} transition-colors font-medium`}
          >
            About Us
          </button>

          {/* Services Dropdown */}
          <div className="relative group">
            <button
              type="button"
              className={`${textColor} ${hoverColor} transition-colors font-medium flex items-center`}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
              aria-expanded={isServicesOpen ? 'true' : 'false'}
              aria-haspopup="true"
            >
              Services
              <svg
                className="ml-1 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            <div
              className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <div className="py-2">
                {services.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => scrollToSection('services')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                  >
                    {service.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => scrollToSection('industries')}
            className={`${textColor} ${hoverColor} transition-colors font-medium`}
          >
            Industries
          </button>

          <button
            type="button"
            onClick={() => scrollToSection('contact')}
            className={`${textColor} ${hoverColor} transition-colors font-medium`}
          >
            Contact
          </button>

          {/* CTA Buttons */}
          <button
            type="button"
            onClick={() => scrollToSection('quote')}
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition-colors font-medium"
          >
            Request Quote
          </button>

          <button
            type="button"
            onClick={() => scrollToSection('tracking')}
            className="bg-accent text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors font-medium"
          >
            Track Shipment
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className={`${textColor} focus:outline-none focus:ring-2 focus:ring-primary rounded-md p-2 min-h-[44px] min-w-[44px] flex items-center justify-center`}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
          >
            {isMobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              type="button"
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left px-3 py-2 text-gray-800 hover:bg-gray-100 hover:text-primary rounded-md transition-colors"
            >
              Home
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-gray-800 hover:bg-gray-100 hover:text-primary rounded-md transition-colors"
            >
              About Us
            </button>

            {/* Mobile Services Submenu */}
            <div>
              <button
                type="button"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full px-3 py-2 text-gray-800 hover:bg-gray-100 hover:text-primary rounded-md transition-colors"
                aria-expanded={isServicesOpen ? 'true' : 'false'}
                aria-haspopup="true"
              >
                Services
                <svg
                  className={`h-4 w-4 transform transition-transform ${
                    isServicesOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              {isServicesOpen && (
                <div className="pl-4 space-y-1">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => scrollToSection('services')}
                      className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-primary rounded-md transition-colors"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => scrollToSection('industries')}
              className="block w-full text-left px-3 py-2 text-gray-800 hover:bg-gray-100 hover:text-primary rounded-md transition-colors"
            >
              Industries
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-gray-800 hover:bg-gray-100 hover:text-primary rounded-md transition-colors"
            >
              Contact
            </button>

            {/* Mobile CTA Buttons */}
            <div className="pt-4 space-y-2">
              <button
                type="button"
                onClick={() => scrollToSection('quote')}
                className="block w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition-colors font-medium text-center"
              >
                Request Quote
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('tracking')}
                className="block w-full bg-accent text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors font-medium text-center"
              >
                Track Shipment
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
