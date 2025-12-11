'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLeaf } from 'react-icons/fa';

const agroProducts = [
  { id: 1, name: 'Cocoa Beans', image: '/images/product1.jpg' },
  { id: 2, name: 'Sesame Seeds', image: '/images/product2.jpg' },
  { id: 3, name: 'Cashew Nuts', image: '/images/product3.jpg' },
  { id: 4, name: 'Ginger', image: '/images/product4.jpg' },
  { id: 5, name: 'Hibiscus Flowers', image: '/images/product5.jpg' },
  { id: 6, name: 'Palm Oil', image: '/images/product6.jpg' },
  { id: 7, name: 'Shea Butter', image: '/images/product7.jpg' },
  { id: 8, name: 'Dried Chili Peppers', image: '/images/product8.jpg' },
  { id: 9, name: 'Groundnuts', image: '/images/product9.jpg' },
];

export const ProductGallery: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Show 6 products on mobile (2x3 grid), 8 on desktop
  const displayedProducts = isMobile ? agroProducts.slice(0, 6) : agroProducts.slice(0, 8);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-white via-gray-50 to-emerald-50/30 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top-right blob */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        {/* Bottom-left blob */}
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        {/* Center floating accent */}
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        {/* Leaf pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)',
          backgroundSize: '40px 40px',
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
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-600 font-semibold rounded-full text-sm mb-4">
              <FaLeaf className="text-sm" />
              Premium Quality
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Agricultural Products We Handle
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 via-accent to-primary mx-auto mb-8 rounded-full"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Showcasing premium Nigerian agricultural products we&apos;ve successfully exported to global markets through our comprehensive logistics services.
            </p>
          </motion.div>

          {/* Product Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
          >
            {displayedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Gradient border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-emerald-500/50 via-transparent to-primary/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                
                <div className="relative bg-white rounded-2xl overflow-hidden">
                  <div className="relative h-48 sm:h-64 w-full overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Product name overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-white font-semibold text-center">{product.name}</p>
                    </div>
                  </div>
                  
                  {/* Number badge */}
                  <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs font-bold text-emerald-600">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
