'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const agroProducts = [
  { id: 1, name: 'Cocoa Beans', image: '/images/product1.jpg' },
  { id: 2, name: 'Sesame Seeds', image: '/images/product2.jpg' },
  { id: 3, name: 'Cashew Nuts', image: '/images/product3.jpg' },
  { id: 4, name: 'Ginger', image: '/images/product4.jpg' },
  { id: 5, name: 'Hibiscus Flowers', image: '/images/product5.jpg' },
  { id: 6, name: 'Palm Oil', image: '/images/product6.jpg' },
  { id: 7, name: 'Shea Butter', image: '/images/product7.jpg' },
  { id: 8, name: 'Dried Chili Peppers', image: '/images/product8.jpg' },
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

  // Show 6 products on mobile, 8 on desktop
  const displayedProducts = isMobile ? agroProducts.slice(0, 6) : agroProducts;

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
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Agricultural Products We Handle
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Showcasing premium Nigerian agricultural products we've successfully exported to global markets through our comprehensive logistics services.
            </p>
          </motion.div>

          {/* Product Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {displayedProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 card-hover"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
