'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
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

  const iconHoverVariants = {
    hover: {
      scale: 1.1,
      rotate: [0, -10, 10, 0],
      transition: {
        duration: 0.3,
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -5,
      boxShadow: '0 20px 40px rgba(0, 102, 204, 0.15)',
      transition: {
        duration: 0.3,
      },
    },
  };

  const socialLinks = [
    { icon: FaFacebookF, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: FaTwitter, href: '#', label: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: FaLinkedinIn, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: FaInstagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top-right blob */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        {/* Bottom-left blob */}
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        {/* Center accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, #0066CC 1px, transparent 1px)',
          backgroundSize: '30px 30px',
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
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get in touch with us for all your logistics needs. Our team is ready to assist you.
            </p>
          </motion.div>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information Column */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Let&apos;s Start a Conversation
              </h3>

              {/* Address Card */}
              <motion.div
                variants={cardHoverVariants}
                whileHover="hover"
                className="flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-lg cursor-pointer group transition-all duration-300"
              >
                <motion.div
                  variants={iconHoverVariants}
                  whileHover="hover"
                  className="shrink-0"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg shadow-primary/25 group-hover:shadow-primary/40 transition-shadow duration-300">
                    <FaMapMarkerAlt className="text-xl text-white" />
                  </div>
                </motion.div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Our Location
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {companyInfo.contact.address}
                  </p>
                </div>
              </motion.div>

              {/* Phone Card */}
              <motion.div
                variants={cardHoverVariants}
                whileHover="hover"
                className="flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-lg cursor-pointer group transition-all duration-300"
              >
                <motion.div
                  variants={iconHoverVariants}
                  whileHover="hover"
                  className="shrink-0"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center shadow-lg shadow-secondary/25 group-hover:shadow-secondary/40 transition-shadow duration-300">
                    <FaPhone className="text-xl text-white" />
                  </div>
                </motion.div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Call Us
                  </h4>
                  <div className="space-y-1">
                    {companyInfo.contact.phone.map((phone, index) => (
                      <p key={index}>
                        <a
                          href={`tel:${phone.replace(/\s/g, '')}`}
                          className="text-gray-600 hover:text-primary transition-colors duration-300 font-medium"
                        >
                          {phone}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Email Card */}
              <motion.div
                variants={cardHoverVariants}
                whileHover="hover"
                className="flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-lg cursor-pointer group transition-all duration-300"
              >
                <motion.div
                  variants={iconHoverVariants}
                  whileHover="hover"
                  className="shrink-0"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-accent to-amber-400 rounded-xl flex items-center justify-center shadow-lg shadow-accent/25 group-hover:shadow-accent/40 transition-shadow duration-300">
                    <FaEnvelope className="text-xl text-gray-900" />
                  </div>
                </motion.div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Email Us
                  </h4>
                  <div className="space-y-1">
                    {companyInfo.contact.email.map((email, index) => (
                      <p key={index}>
                        <a
                          href={`mailto:${email}`}
                          className="text-gray-600 hover:text-primary transition-colors duration-300 font-medium text-sm md:text-base break-all"
                        >
                          {email}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Social Media Links */}
              <motion.div variants={itemVariants} className="pt-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Follow Us
                </h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 ${social.color} hover:text-white transition-all duration-300 shadow-md hover:shadow-lg`}
                    >
                      <social.icon className="text-lg" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Google Maps Column */}
            <motion.div variants={itemVariants}>
              <div className="relative group">
                {/* Map Frame */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full min-h-[500px] border-4 border-white">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.6485847891!2d3.3589!3d6.5744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzQnMjcuOCJOIDPCsDIxJzMyLjAiRQ!5e0!3m2!1sen!2sng!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '500px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="CLNL Office Location - Oregun, Ikeja, Lagos"
                    aria-label="Map showing CLNL office location at No. 156, Kudirat Abiola Way, Oregun Ikeja, Lagos"
                  ></iframe>
                </div>
                {/* Map Overlay Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-64 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-gray-100"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <FaMapMarkerAlt className="text-white text-sm" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Visit Our Office</p>
                      <p className="text-gray-500 text-xs">Oregun, Ikeja, Lagos</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
