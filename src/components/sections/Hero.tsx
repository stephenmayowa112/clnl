'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaShippingFast, FaGlobeAfrica, FaAward } from 'react-icons/fa';
import Image from 'next/image';
import { Button } from '@/components/ui';
import { companyInfo } from '@/lib/constants';
import { DynamicQuoteRequestModal, DynamicTrackingModal } from '@/components/modals';

export interface HeroProps {
  onRequestQuote?: () => void;
  onTrackShipment?: () => void;
}

const backgroundImages = [
  '/images/bgImage1.jpg',
  '/images/bgImage2.jpg',
];

const stats = [
  { icon: FaShippingFast, value: '500+', label: 'Shipments' },
  { icon: FaGlobeAfrica, value: '20+', label: 'Countries' },
  { icon: FaAward, value: '15+', label: 'Years' },
];

export const Hero: React.FC<HeroProps> = ({ onRequestQuote, onTrackShipment }) => {
  const [scrollY, setScrollY] = useState(0);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [showTrackingModal, setShowTrackingModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Rotate background images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const parallaxOffset = scrollY * 0.5;

  const handleRequestQuote = () => {
    if (onRequestQuote) {
      onRequestQuote();
    } else {
      // Open modal with lazy-loaded component
      setShowQuoteModal(true);
    }
  };

  const handleTrackShipment = () => {
    if (onTrackShipment) {
      onTrackShipment();
    } else {
      // Open modal with lazy-loaded component
      setShowTrackingModal(true);
    }
  };

  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background images with parallax effect */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={image}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              opacity: currentImageIndex === index ? 1 : 0,
              transform: `translateY(${parallaxOffset}px)`,
            }}
          >
            <Image
              src={image}
              alt="CLNL Logistics Background"
              fill
              priority={index === 0}
              quality={75}
              className="object-cover"
            />
          </div>
        ))}
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-secondary/60 to-primary/70" />
        {/* Additional decorative elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        </div>
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center text-white max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white/90 font-medium rounded-full text-sm border border-white/20">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              Trusted Logistics Partner Since 2006
            </span>
          </motion.div>

          {/* Company Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2"
            style={{ textShadow: '2px 4px 8px rgba(0,0,0,0.3)' }}
          >
            {companyInfo.name}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-10 font-light text-white/95 px-2"
            style={{ textShadow: '1px 2px 4px rgba(0,0,0,0.2)' }}
          >
            {companyInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center px-2 mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                onClick={handleRequestQuote}
                className="w-full sm:w-auto sm:min-w-[200px] bg-accent text-gray-900 border-accent hover:bg-accent/90 font-semibold shadow-lg shadow-accent/25"
              >
                Request a Quote
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                onClick={handleTrackShipment}
                className="w-full sm:w-auto sm:min-w-[200px] bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20 font-semibold"
              >
                Track Your Shipment
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6 sm:gap-10"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center px-4 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
              >
                <stat.icon className="text-2xl text-accent mb-2" />
                <span className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</span>
                <span className="text-sm text-white/80">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.button
          onClick={handleScrollDown}
          className="flex flex-col items-center text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full p-2 min-h-[44px] min-w-[44px] bg-white/10 backdrop-blur-sm"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          aria-label="Scroll down"
        >
          <span className="text-xs sm:text-sm mb-1 hidden sm:block">Scroll Down</span>
          <FaChevronDown className="text-xl sm:text-2xl" />
        </motion.button>
      </motion.div>

      {/* Dynamically loaded modals - only loaded when opened */}
      {showQuoteModal && (
        <DynamicQuoteRequestModal
          isOpen={showQuoteModal}
          onClose={() => setShowQuoteModal(false)}
        />
      )}

      {showTrackingModal && (
        <DynamicTrackingModal
          isOpen={showTrackingModal}
          onClose={() => setShowTrackingModal(false)}
        />
      )}
    </section>
  );
};
