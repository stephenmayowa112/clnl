'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const products = [
  { id: 1, name: 'Agricultural Products', image: '/images/product1.jpg' },
  { id: 2, name: 'Freight Services', image: '/images/product2.jpg' },
  { id: 3, name: 'Warehousing', image: '/images/product3.jpg' },
  { id: 4, name: 'Customs Clearing', image: '/images/product4.jpg' },
  { id: 5, name: 'Logistics Solutions', image: '/images/product5.jpg' },
  { id: 6, name: 'Facilities Management', image: '/images/product6.jpg' },
  { id: 7, name: 'Export Services', image: '/images/product7.jpg' },
  { id: 8, name: 'Supply Chain', image: '/images/product8.jpg' },
  { id: 9, name: 'Transportation', image: '/images/product9.jpg' },
  { id: 10, name: 'Distribution', image: '/images/product10.jpg' },
  { id: 11, name: 'Cargo Handling', image: '/images/product11.jpg' },
  { id: 12, name: 'Shipping Services', image: '/images/product12.jpg' },
];

export const ProductGallery: React.FC = () => {
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
              Our Services in Action
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive logistics solutions and see how we deliver excellence across all service areas.
            </p>
          </motion.div>

          {/* Product Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-semibold text-lg">
                        {product.name}
                      </h3>
                    </div>
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
