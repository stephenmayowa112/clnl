'use client';

import Link from 'next/link';
import { companyInfo, services } from '@/lib/constants';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FaFacebookF, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gradient-to-br from-secondary via-[#002a5c] to-secondary text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg shadow-accent/30 hover:bg-accent/90 transition-all duration-300 hover:scale-110 z-10"
        aria-label="Back to top"
      >
        <FaArrowUp className="text-gray-900" />
      </button>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info Column */}
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-accent">CLNL</span>
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            </h3>
            <p className="text-gray-300 text-sm mb-4 font-medium">
              {companyInfo.name}
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for comprehensive logistics solutions across Nigeria and beyond.
            </p>
            
            {/* Social Media Links */}
            <div className="mt-6 flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-300 hover:bg-accent hover:text-gray-900 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-accent rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['hero', 'about', 'services', 'industries', 'contact'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="text-gray-300 hover:text-accent transition-all duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all duration-300"></span>
                    {section === 'hero' ? 'Home' : section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-accent rounded-full"></span>
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-gray-300 hover:text-accent transition-all duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all duration-300"></span>
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-accent rounded-full"></span>
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                  <FaMapMarkerAlt className="text-accent" />
                </div>
                <span className="text-gray-300 leading-relaxed">{companyInfo.contact.address}</span>
              </li>
              
              {companyInfo.contact.phone.map((phone, index) => (
                <li key={index} className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                    <FaPhone className="text-accent text-sm" />
                  </div>
                  <a
                    href={`tel:${phone}`}
                    className="text-gray-300 hover:text-accent transition-colors duration-300"
                  >
                    {phone}
                  </a>
                </li>
              ))}
              
              {companyInfo.contact.email.slice(0, 2).map((email, index) => (
                <li key={index} className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                    <FaEnvelope className="text-accent text-sm" />
                  </div>
                  <a
                    href={`mailto:${email}`}
                    className="text-gray-300 hover:text-accent transition-colors duration-300 text-sm break-all"
                  >
                    {email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} <span className="text-accent">{companyInfo.name}</span>. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                href="#"
                className="text-gray-400 hover:text-accent transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                href="#"
                className="text-gray-400 hover:text-accent transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
