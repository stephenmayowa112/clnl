'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaEye, FaStar } from 'react-icons/fa';
import { companyInfo } from '@/lib/constants';

export const About: React.FC = () => {
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
    <section id="about" className="py-20 bg-gray-50">
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
              About Us
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {companyInfo.description}
            </p>
          </motion.div>

          {/* Mission, Vision, Values Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Mission Card */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <FaBullseye className="text-3xl text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Our Mission
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">
                {companyInfo.mission}
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                  <FaEye className="text-3xl text-secondary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Our Vision
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">
                {companyInfo.vision}
              </p>
            </motion.div>

            {/* Values Card */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                  <FaStar className="text-3xl text-accent" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Our Values
              </h3>
              <ul className="space-y-2">
                {companyInfo.values.map((value, index) => (
                  <li
                    key={index}
                    className="text-gray-700 text-center font-medium"
                  >
                    {value}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
