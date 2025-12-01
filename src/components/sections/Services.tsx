'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaSeedling,
  FaShippingFast,
  FaFileInvoice,
  FaWarehouse,
  FaTools,
} from 'react-icons/fa';
import { Button } from '@/components/ui';
import { services } from '@/lib/constants';
import type { ServiceDetail } from '@/types';

// Icon mapping
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaSeedling,
  FaShippingFast,
  FaFileInvoice,
  FaWarehouse,
  FaTools,
};

export interface ServicesProps {
  onRequestQuote?: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onRequestQuote }) => {
  const [activeService, setActiveService] = useState<string>(services[0].id);

  const activeServiceData = services.find((s) => s.id === activeService) || services[0];

  const handleRequestQuote = (serviceId: string) => {
    if (onRequestQuote) {
      onRequestQuote(serviceId);
    } else {
      // Default behavior: scroll to quote section
      const quoteSection = document.getElementById('quote');
      if (quoteSection) {
        quoteSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-gray-50">
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
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Comprehensive logistics solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Service Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
        >
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            const isActive = activeService === service.id;

            return (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`
                  flex items-center gap-2 px-4 sm:px-6 py-3 rounded-lg font-semibold
                  transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary
                  min-h-[44px] text-sm sm:text-base
                  ${
                    isActive
                      ? 'bg-primary text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-100 hover:shadow-md'
                  }
                `}
              >
                {IconComponent && <IconComponent className="text-lg sm:text-xl" />}
                <span className="hidden sm:inline">{service.name}</span>
                <span className="sm:hidden text-xs">{service.name.split(' ')[0]}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Service Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <ServiceCard
              service={activeServiceData}
              onRequestQuote={handleRequestQuote}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: ServiceDetail;
  onRequestQuote: (serviceId: string) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onRequestQuote }) => {
  const IconComponent = iconMap[service.icon];

  return (
    <div className="grid md:grid-cols-2 gap-6 sm:gap-8 p-6 sm:p-8 md:p-12">
      {/* Left Column: Icon and Description */}
      <div className="flex flex-col">
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          {IconComponent && (
            <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl shrink-0">
              <IconComponent className="text-3xl sm:text-4xl text-primary" />
            </div>
          )}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary">
            {service.name}
          </h3>
        </div>

        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
          {service.description}
        </p>

        <Button
          variant="primary"
          size="lg"
          onClick={() => onRequestQuote(service.id)}
          className="w-full md:w-auto"
        >
          Request a Quote
        </Button>
      </div>

      {/* Right Column: Offerings and Products */}
      <div className="space-y-4 sm:space-y-6">
        {/* Offerings */}
        <div>
          <h4 className="text-lg sm:text-xl font-semibold text-secondary mb-3 sm:mb-4">
            What We Offer
          </h4>
          <ul className="space-y-2">
            {service.offerings.map((offering, index) => (
              <li
                key={index}
                className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-700"
              >
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="text-primary mt-0.5 sm:mt-1 shrink-0"
                >
                  ✓
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {offering}
                </motion.span>
              </li>
            ))}
          </ul>
        </div>

        {/* Products (if available) */}
        {service.products && service.products.length > 0 && (
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-secondary mb-3 sm:mb-4">
              Products We Handle
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.products.map((product, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/20 text-secondary rounded-full text-xs sm:text-sm font-medium"
                >
                  {product}
                </motion.span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
