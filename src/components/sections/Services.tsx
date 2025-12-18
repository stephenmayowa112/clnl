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

// Color mapping for tabs
const colorMap: Record<string, { gradient: string; shadow: string; light: string }> = {
  'agro-export': { gradient: 'from-emerald-500 to-teal-600', shadow: 'shadow-emerald-500/25', light: 'bg-emerald-500/10' },
  'freight': { gradient: 'from-primary to-blue-600', shadow: 'shadow-primary/25', light: 'bg-primary/10' },
  'customs': { gradient: 'from-purple-500 to-indigo-600', shadow: 'shadow-purple-500/25', light: 'bg-purple-500/10' },
  'warehousing': { gradient: 'from-amber-500 to-orange-500', shadow: 'shadow-amber-500/25', light: 'bg-amber-500/10' },
  'procurement': { gradient: 'from-rose-500 to-pink-600', shadow: 'shadow-rose-500/25', light: 'bg-rose-500/10' },
};

export interface ServicesProps {
  onRequestQuote?: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onRequestQuote }) => {
  const [activeService, setActiveService] = useState<string>(services[0].id);

  // Listen for service selection from navigation
  React.useEffect(() => {
    const handleServiceSelect = (event: CustomEvent<string>) => {
      const serviceId = event.detail;
      if (services.find(s => s.id === serviceId)) {
        setActiveService(serviceId);
      }
    };

    window.addEventListener('selectService', handleServiceSelect as EventListener);
    return () => {
      window.removeEventListener('selectService', handleServiceSelect as EventListener);
    };
  }, []);

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
    <section id="services" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-white to-slate-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top-left blob */}
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        {/* Bottom-right blob */}
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        {/* Center accent */}
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: 'linear-gradient(#003D7A 1px, transparent 1px), linear-gradient(90deg, #003D7A 1px, transparent 1px)',
          backgroundSize: '50px 50px',
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
            What We Offer
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mb-6 rounded-full"></div>
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
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12"
        >
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            const isActive = activeService === service.id;
            const colors = colorMap[service.id] || colorMap['agro-export'];

            return (
              <motion.button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl font-semibold
                  transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50
                  min-h-[48px] text-sm sm:text-base
                  ${
                    isActive
                      ? `bg-gradient-to-r ${colors.gradient} text-white shadow-lg ${colors.shadow}`
                      : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-lg border border-gray-200'
                  }
                `}
              >
                {IconComponent && <IconComponent className="text-lg sm:text-xl" />}
                <span className="hidden sm:inline">{service.name}</span>
                <span className="sm:hidden text-xs">{service.name.split(' ')[0]}</span>
              </motion.button>
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
          >
            <div className="relative">
              {/* Glow effect behind card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-3xl blur opacity-30" />
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <ServiceCard
                  service={activeServiceData}
                  onRequestQuote={handleRequestQuote}
                />
              </div>
            </div>
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
  const colors = colorMap[service.id] || colorMap['agro-export'];

  return (
    <div className="grid md:grid-cols-2 gap-6 sm:gap-8 p-6 sm:p-8 md:p-12">
      {/* Left Column: Icon and Description */}
      <div className="flex flex-col">
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <motion.div
            whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.3 }}
            className={`flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${colors.gradient} rounded-xl shadow-lg ${colors.shadow}`}
          >
            {IconComponent && (
              <IconComponent className="text-2xl sm:text-3xl text-white" />
            )}
          </motion.div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            {service.name}
          </h3>
        </div>

        <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
          {service.description}
        </p>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            variant="primary"
            size="lg"
            onClick={() => onRequestQuote(service.id)}
            className="w-full md:w-auto bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
          >
            Request a Quote
          </Button>
        </motion.div>
      </div>

      {/* Right Column: Offerings and Products */}
      <div className="space-y-6 sm:space-y-8">
        {/* Offerings */}
        <div className="bg-gray-50/50 rounded-xl p-5 sm:p-6">
          <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${colors.gradient}`}></span>
            What We Offer
          </h4>
          <ul className="space-y-3">
            {service.offerings.map((offering, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-start gap-3 text-sm sm:text-base text-gray-600"
              >
                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${colors.gradient} shrink-0`}></span>
                <span>{offering}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Products (if available) */}
        {service.products && service.products.length > 0 && (
          <div className="bg-gray-50/50 rounded-xl p-5 sm:p-6">
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${colors.gradient}`}></span>
              Products We Handle
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.products.map((product, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 ${colors.light} text-gray-700 rounded-full text-xs sm:text-sm font-medium border border-gray-200/50 hover:shadow-md transition-all duration-300`}
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
