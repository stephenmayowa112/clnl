'use client';

import React, { useState } from 'react';
import { Modal } from '@/components/ui';
import { QuoteForm } from '@/components/forms/QuoteForm';
import type { QuoteRequestInput } from '@/lib/schemas';

export interface QuoteRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceType?: QuoteRequestInput['serviceType'];
  formspreeId?: string;
}

export const QuoteRequestModal: React.FC<QuoteRequestModalProps> = ({
  isOpen,
  onClose,
  initialServiceType,
  formspreeId,
}) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSuccess = () => {
    setShowSuccessMessage(true);
    // Auto-close modal after showing success message
    setTimeout(() => {
      setShowSuccessMessage(false);
      onClose();
    }, 3000);
  };

  const handleError = (error: string) => {
    console.error('Quote request error:', error);
    // Error is already displayed in the form
  };

  const handleClose = () => {
    setShowSuccessMessage(false);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title="Request a Quote"
      size="lg"
      closeOnOverlayClick={!showSuccessMessage}
      closeOnEscape={!showSuccessMessage}
    >
      {showSuccessMessage ? (
        <div className="py-8 text-center">
          <div className="mb-4 flex justify-center">
            <svg
              className="w-16 h-16 text-green-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Quote Request Submitted!
          </h3>
          <p className="text-gray-600">
            Thank you for your interest. We&apos;ll review your request and get back to you within 24 hours.
          </p>
        </div>
      ) : (
        <QuoteForm
          formspreeId={formspreeId}
          onSuccess={handleSuccess}
          onError={handleError}
          initialServiceType={initialServiceType}
        />
      )}
    </Modal>
  );
};
