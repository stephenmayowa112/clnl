'use client';

import React from 'react';
import { Modal } from '@/components/ui';
import { TrackingForm } from '@/components/forms/TrackingForm';

export interface TrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
  trackingPortalUrl?: string;
}

export const TrackingModal: React.FC<TrackingModalProps> = ({
  isOpen,
  onClose,
  trackingPortalUrl,
}) => {
  const handleTrack = (trackingNumber: string) => {
    console.log('Tracking shipment:', trackingNumber);
    // Close modal after initiating tracking
    setTimeout(() => {
      onClose();
    }, 500);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Track Your Shipment"
      size="md"
    >
      <div className="space-y-4">
        <p className="text-gray-600">
          Enter your tracking number below to view the current status and location of your shipment.
        </p>

        <TrackingForm
          trackingPortalUrl={trackingPortalUrl}
          onTrack={handleTrack}
        />

        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-2">Need Help?</h4>
          <p className="text-sm text-blue-800">
            If you&apos;re having trouble tracking your shipment or need additional assistance, 
            please contact our customer support team.
          </p>
          <div className="mt-2 text-sm text-blue-900">
            <p>📞 Phone: +234-8164096255</p>
            <p>📧 Email: info@completelogisticsnetwork.com</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};
