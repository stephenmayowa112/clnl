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

// Gradient colors for variety
const gradientColors = [
  { bg: 'from-primary to-blue-600', light: 'bg-primary/10', text: 'text-primary' },
  { bg: 'from-emerald-500 to-teal-600', light: 'bg-emerald-500/10', text: 'text-emerald-600' },
  { bg: 'from-amber-500 to-orange-500', light: 'bg-amber-500/10', text: 'text-amber-600' },
  { bg: 'from-purple-500 to-indigo-600', light: 'bg-purple-500/10', text: 'text-purple-600' },
  { bg: 'from-secondary to-blue-800', light: 'bg-secondary/10', text: 'text-secondary' },
  { bg: 'from-rose-500 to-pink-600', light: 'bg-rose-500/10', text: 'text-rose-600' },
];

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
    <section id="why-choose-us" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-white to-primary/5 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top-right blob */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        {/* Bottom-left blob */}
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        {/* Floating accent */}
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-secondary/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: 'linear-gradient(#0066CC 1px, transparent 1px), linear-gradient(90deg, #0066CC 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
              Our Advantages
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose CLNL
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full mb-6"></div>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Discover what sets us apart and makes us the preferred logistics partner
            </p>
          </motion.div>

          {/* Differentiators Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {differentiators.map((differentiator, index) => {
              const IconComponent = iconMap[differentiator.icon];
              const colors = gradientColors[index % gradientColors.length];

              return (
                <motion.div
                  key={differentiator.id}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
                  
                  {/* Number badge */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gray-100 group-hover:bg-primary/10 rounded-full flex items-center justify-center transition-colors duration-300">
                    <span className="text-sm font-bold text-gray-400 group-hover:text-primary transition-colors duration-300">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.3 }}
                    className="flex justify-center mb-5 sm:mb-6"
                  >
                    <div className={`w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-br ${colors.bg} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      {IconComponent && (
                        <IconComponent className="text-2xl sm:text-3xl text-white" />
                      )}
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 text-center group-hover:text-primary transition-colors duration-300">
                    {differentiator.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                    {differentiator.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.bg} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center`} />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
