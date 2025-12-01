'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { companyInfo } from '@/lib/constants';

export const Contact: React.FC = () => {
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
    <section id="contact" className="py-20 bg-white">
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
              Contact Us
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Get in touch with us for all your logistics needs. Our team is ready to assist you.
            </p>
          </motion.div>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information Column */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h3>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="text-xl text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Address
                  </h4>
                  <p className="text-gray-700">
                    {companyInfo.contact.address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <FaPhone className="text-xl text-secondary" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Phone
                  </h4>
                  <div className="space-y-1">
                    {companyInfo.contact.phone.map((phone, index) => (
                      <p key={index} className="text-gray-700">
                        <a
                          href={`tel:${phone.replace(/\s/g, '')}`}
                          className="hover:text-primary transition-colors"
                        >
                          {phone}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-xl text-accent" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Email
                  </h4>
                  <div className="space-y-1">
                    {companyInfo.contact.email.map((email, index) => (
                      <p key={index} className="text-gray-700">
                        <a
                          href={`mailto:${email}`}
                          className="hover:text-primary transition-colors"
                        >
                          {email}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map Placeholder Column */}
            <motion.div variants={itemVariants}>
              <div className="bg-gray-100 rounded-lg h-full min-h-[400px] flex items-center justify-center p-8">
                <div className="text-center">
                  <FaMapMarkerAlt className="text-6xl text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 text-lg">
                    Map Integration Placeholder
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    Google Maps or other map service can be integrated here
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
