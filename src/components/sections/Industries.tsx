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

// Color palette for variety
const colorPalettes = [
  { bg: 'from-primary to-blue-600', shadow: 'shadow-primary/30' },
  { bg: 'from-secondary to-blue-800', shadow: 'shadow-secondary/30' },
  { bg: 'from-emerald-500 to-teal-600', shadow: 'shadow-emerald-500/30' },
  { bg: 'from-amber-500 to-orange-600', shadow: 'shadow-amber-500/30' },
  { bg: 'from-purple-500 to-indigo-600', shadow: 'shadow-purple-500/30' },
  { bg: 'from-rose-500 to-pink-600', shadow: 'shadow-rose-500/30' },
  { bg: 'from-cyan-500 to-blue-500', shadow: 'shadow-cyan-500/30' },
  { bg: 'from-lime-500 to-green-600', shadow: 'shadow-lime-500/30' },
  { bg: 'from-fuchsia-500 to-purple-600', shadow: 'shadow-fuchsia-500/30' },
];

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
    <section id="industries" className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top-left blob */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
        {/* Bottom-right blob */}
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        {/* Center accent */}
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle, #003D7A 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary font-semibold rounded-full text-sm mb-4">
            Our Expertise
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Delivering specialized logistics solutions across diverse sectors
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {displayedIndustries.map((industry, index) => (
            <IndustryCard key={industry.id} industry={industry} index={index} colorPalette={colorPalettes[index % colorPalettes.length]} />
          ))}
        </div>

        {/* See More Button - Mobile Only */}
        {hasMore && !showAll && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(true)}
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/25 transition-all duration-300"
            >
              See More Industries
            </motion.button>
          </motion.div>
        )}

        {/* See Less Button - Mobile Only */}
        {hasMore && showAll && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(false)}
              className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-primary hover:text-primary hover:shadow-lg transition-all duration-300"
            >
              See Less
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

interface IndustryCardProps {
  industry: Industry;
  index: number;
  colorPalette: { bg: string; shadow: string };
}

const IndustryCard: React.FC<IndustryCardProps> = ({ industry, index, colorPalette }) => {
  const IconComponent = iconMap[industry.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 p-6 sm:p-7 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
    >
      {/* Gradient border on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
        transition={{ duration: 0.3 }}
        className={`flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${colorPalette.bg} rounded-xl mb-4 shadow-lg ${colorPalette.shadow} group-hover:shadow-xl transition-all duration-300`}
      >
        {IconComponent && (
          <IconComponent className="text-2xl sm:text-3xl text-white" />
        )}
      </motion.div>

      {/* Industry Name */}
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
        {industry.name}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed">
        {industry.description}
      </p>

      {/* Bottom accent line */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colorPalette.bg} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
    </motion.div>
  );
};
