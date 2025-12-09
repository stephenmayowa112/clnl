'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
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
              quality={90}
              className="object-cover"
            />
          </div>
        ))}
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-secondary/40 to-primary/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center text-white max-w-5xl mx-auto"
        >
          {/* Company Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2"
          >
            {companyInfo.name}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 font-light text-white/95 px-2"
          >
            {companyInfo.tagline}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg lg:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto text-white/90 leading-relaxed px-2"
          >
            {companyInfo.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-2"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={handleRequestQuote}
              className="w-full sm:w-auto sm:min-w-[200px]"
            >
              Request a Quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleTrackShipment}
              className="w-full sm:w-auto sm:min-w-[200px]"
            >
              Track Your Shipment
            </Button>
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
          className="flex flex-col items-center text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full p-2 min-h-[44px] min-w-[44px]"
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
          <span className="text-xs sm:text-sm mb-1 sm:mb-2 hidden sm:block">Scroll Down</span>
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
