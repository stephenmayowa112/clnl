'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaEye, FaBullseye, FaHeart } from 'react-icons/fa';
import { companyInfo } from '@/lib/constants';

const cardData = [
  {
    title: 'Our Mission',
    content: companyInfo.mission,
    icon: FaBullseye,
    image: '/images/mission.png',
    gradient: 'from-primary to-blue-600',
    shadowColor: 'shadow-primary/20',
  },
  {
    title: 'Our Vision',
    content: companyInfo.vision,
    icon: FaEye,
    image: '/images/vision.png',
    gradient: 'from-secondary to-blue-800',
    shadowColor: 'shadow-secondary/20',
  },
  {
    title: 'Our Values',
    content: companyInfo.values,
    icon: FaHeart,
    image: '/images/values.png',
    gradient: 'from-accent to-amber-500',
    shadowColor: 'shadow-accent/20',
    isValues: true,
  },
];

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
    <section id="about" className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top-right blob */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        {/* Bottom-left blob */}
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        {/* Center floating accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle, #0066CC 1px, transparent 1px)',
          backgroundSize: '35px 35px',
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
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-6 sm:mb-8 rounded-full"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
              {companyInfo.description}
            </p>
          </motion.div>

          {/* Mission, Vision, Values Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {cardData.map((card, index) => (
              <motion.div
                key={card.title}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                {/* Image Container */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    quality={75}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Floating Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    className={`absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-br ${card.gradient} rounded-xl flex items-center justify-center shadow-lg ${card.shadowColor}`}
                  >
                    <card.icon className="text-xl text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center group-hover:text-primary transition-colors duration-300">
                    {card.title}
                  </h3>
                  
                  {card.isValues ? (
                    <ul className="space-y-2">
                      {(card.content as string[]).map((value, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="text-sm sm:text-base text-gray-600 text-center font-medium flex items-center justify-center gap-2"
                        >
                          <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${card.gradient}`}></span>
                          {value}
                        </motion.li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                      {card.content as string}
                    </p>
                  )}
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${card.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
