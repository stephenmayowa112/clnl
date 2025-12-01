'use client';

/**
 * Example component demonstrating how to use QuoteRequestModal and TrackingModal
 * This file is for reference only and should not be imported in production code
 */

import React, { useState } from 'react';
import { QuoteRequestModal, TrackingModal } from '@/components/modals';
import { Button } from '@/components/ui';

export const ModalExample: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isTrackingModalOpen, setIsTrackingModalOpen] = useState(false);

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-3xl font-bold mb-6">Modal Components Example</h1>

      <div className="space-x-4">
        <Button
          variant="primary"
          size="lg"
          onClick={() => setIsQuoteModalOpen(true)}
        >
          Request a Quote
        </Button>

        <Button
          variant="secondary"
          size="lg"
          onClick={() => setIsTrackingModalOpen(true)}
        >
          Track Your Shipment
        </Button>
      </div>

      {/* Quote Request Modal */}
      <QuoteRequestModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        formspreeId={process.env.NEXT_PUBLIC_FORMSPREE_QUOTE_ID}
        // Optional: pre-select a service type
        // initialServiceType="freight"
      />

      {/* Tracking Modal */}
      <TrackingModal
        isOpen={isTrackingModalOpen}
        onClose={() => setIsTrackingModalOpen(false)}
        trackingPortalUrl={process.env.NEXT_PUBLIC_TRACKING_PORTAL_URL}
      />
    </div>
  );
};
