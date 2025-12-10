'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  FaTractor,
  FaIndustry,
  FaShoppingCart,
  FaGlobeAfrica,
  FaHardHat,
  FaOilCan,
  FaStore,
  FaLaptop,
  FaBuilding,
} from 'react-icons/fa';
import { industries } from '@/lib/constants';
import type { Industry } from '@/types';

// Icon mapping
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaTractor,
  FaIndustry,
  FaShoppingCart,
  FaGlobeAfrica,
  FaHardHat,
  FaOilCan,
  FaStore,
  FaLaptop,
  FaBuilding,
};

export const Industries: React.FC = () => {
  const [showAll, setShowAll] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Show 3 industries on mobile initially, all on desktop
  const displayedIndustries = isMobile && !showAll ? industries.slice(0, 3) : industries;
  const hasMore = isMobile && industries.length > 3;

  return (
    <section id="industries" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-3 sm:mb-4">
            Industries We Serve
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Delivering specialized logistics solutions across diverse sectors
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {displayedIndustries.map((industry, index) => (
            <IndustryCard key={industry.id} industry={industry} index={index} />
          ))}
        </div>

        {/* See More Button - Mobile Only */}
        {hasMore && !showAll && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center mt-6"
          >
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-secondary transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              See More Industries
            </button>
          </motion.div>
        )}

        {/* See Less Button - Mobile Only */}
        {hasMore && showAll && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center mt-6"
          >
            <button
              onClick={() => setShowAll(false)}
              className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              See Less
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

interface IndustryCardProps {
  industry: Industry;
  index: number;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ industry, index }) => {
  const IconComponent = iconMap[industry.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-xl border-2 border-gray-200 p-5 sm:p-6 hover:border-primary hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-xl mb-3 sm:mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
        {IconComponent && (
          <IconComponent className="text-2xl sm:text-3xl text-primary group-hover:text-white transition-colors duration-300" />
        )}
      </div>

      {/* Industry Name */}
      <h3 className="text-lg sm:text-xl font-bold text-secondary mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
        {industry.name}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
        {industry.description}
      </p>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};
