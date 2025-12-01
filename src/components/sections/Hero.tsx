'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { Button } from '@/components/ui';
import { companyInfo } from '@/lib/constants';

export interface HeroProps {
  onRequestQuote?: () => void;
  onTrackShipment?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestQuote, onTrackShipment }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.5;

  const handleRequestQuote = () => {
    if (onRequestQuote) {
      onRequestQuote();
    } else {
      // Default behavior: scroll to quote section
      const quoteSection = document.getElementById('quote');
      if (quoteSection) {
        quoteSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleTrackShipment = () => {
    if (onTrackShipment) {
      onTrackShipment();
    } else {
      // Default behavior: scroll to tracking section
      const trackingSection = document.getElementById('tracking');
      if (trackingSection) {
        trackingSection.scrollIntoView({ behavior: 'smooth' });
      }
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
      {/* Background with parallax effect */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary/90"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
        }}
      >
        {/* Overlay pattern for visual interest */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            {companyInfo.name}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl mb-8 font-light text-white/95"
          >
            {companyInfo.tagline}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg lg:text-xl mb-12 max-w-3xl mx-auto text-white/90 leading-relaxed"
          >
            {companyInfo.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={handleRequestQuote}
              className="w-full sm:w-auto min-w-[200px]"
            >
              Request a Quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleTrackShipment}
              className="w-full sm:w-auto min-w-[200px]"
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.button
          onClick={handleScrollDown}
          className="flex flex-col items-center text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full p-2"
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
          <span className="text-sm mb-2 hidden sm:block">Scroll Down</span>
          <FaChevronDown className="text-2xl" />
        </motion.button>
      </motion.div>
    </section>
  );
};
