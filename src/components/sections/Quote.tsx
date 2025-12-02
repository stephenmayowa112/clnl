'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaCheckCircle } from 'react-icons/fa';
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
    <section id="quote" className="py-20 bg-gradient-to-br from-primary via-secondary to-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <FaQuoteLeft className="text-5xl text-accent" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Request a Quote
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Get a customized quote for your logistics needs. Fill out the form below and our team will respond within 24 hours.
            </p>
          </motion.div>

          {/* Form Container */}
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10">
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
                >
                  <FaCheckCircle className="text-green-600 text-2xl flex-shrink-0" />
                  <div>
                    <p className="text-green-800 font-semibold">Quote Request Submitted!</p>
                    <p className="text-green-700 text-sm">We'll get back to you within 24 hours.</p>
                  </div>
                </motion.div>
              )}
              
              <QuoteForm onSuccess={handleSuccess} />
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <p className="text-white/80 text-sm">
              Need immediate assistance? Call us at{' '}
              <a href="tel:+2348164096255" className="text-accent hover:underline font-semibold">
                +234-8164096255
              </a>
              {' '}or{' '}
              <a href="tel:+2348033054354" className="text-accent hover:underline font-semibold">
                +234-8033054354
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
