'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  FaRoute,
  FaCheckCircle,
  FaMoneyBillWave,
  FaUserTie,
  FaGlobe,
  FaLaptopCode,
} from 'react-icons/fa';
import { differentiators } from '@/lib/constants';

// Icon mapping
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaRoute,
  FaCheckCircle,
  FaMoneyBillWave,
  FaUserTie,
  FaGlobe,
  FaLaptopCode,
};

export const WhyChooseUs: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="why-choose-us" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Why Choose CLNL
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>

          {/* Differentiators Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {differentiators.map((differentiator) => {
              const IconComponent = iconMap[differentiator.icon];

              return (
                <motion.div
                  key={differentiator.id}
                  variants={itemVariants}
                  className="bg-gray-50 rounded-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 card-hover shine-effect"
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center icon-pulse">
                      {IconComponent && (
                        <IconComponent className="text-2xl sm:text-3xl text-primary" />
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
                    {differentiator.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-700 text-center leading-relaxed">
                    {differentiator.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
