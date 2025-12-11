'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaCheckCircle, FaHeadset, FaClock } from 'react-icons/fa';
import { QuoteForm } from '@/components/forms';

export const Quote: React.FC = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSuccess = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section id="quote" className="py-20 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl" />
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />
        {/* Gradient overlay lines */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(45deg, transparent 45%, rgba(255,215,0,0.1) 50%, transparent 55%)',
          backgroundSize: '20px 20px',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <motion.div
              whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
              className="inline-flex justify-center mb-4"
            >
              <div className="w-16 h-16 bg-accent/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <FaQuoteLeft className="text-3xl text-accent" />
              </div>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Request a Quote
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Get a customized quote for your logistics needs. Fill out the form below and our team will respond within 24 hours.
            </p>
          </motion.div>

          {/* Trust Badges */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <FaClock className="text-accent" />
              <span className="text-white/90 text-sm font-medium">24hr Response</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <FaHeadset className="text-accent" />
              <span className="text-white/90 text-sm font-medium">Expert Support</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <FaCheckCircle className="text-accent" />
              <span className="text-white/90 text-sm font-medium">No Obligation</span>
            </div>
          </motion.div>

          {/* Form Container */}
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/30 via-white/20 to-accent/30 rounded-3xl blur opacity-40" />
              <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 border border-white/20">
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3"
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <FaCheckCircle className="text-green-600 text-xl" />
                    </div>
                    <div>
                      <p className="text-green-800 font-semibold">Quote Request Submitted!</p>
                      <p className="text-green-700 text-sm">We&apos;ll get back to you within 24 hours.</p>
                    </div>
                  </motion.div>
                )}
                
                <QuoteForm onSuccess={handleSuccess} />
              </div>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <FaHeadset className="text-accent text-lg" />
              <p className="text-white/90 text-sm">
                Need immediate assistance? Call us at{' '}
                <a href="tel:+2348164096255" className="text-accent hover:underline font-semibold">
                  +234-8164096255
                </a>
                {' '}or{' '}
                <a href="tel:+2348033054354" className="text-accent hover:underline font-semibold">
                  +234-8033054354
                </a>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
