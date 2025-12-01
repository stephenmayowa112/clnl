'use client';

import dynamic from 'next/dynamic';
import type { QuoteRequestModalProps } from './QuoteRequestModal';
import type { TrackingModalProps } from './TrackingModal';

// Dynamically import modals with loading states for code splitting
export const DynamicQuoteRequestModal = dynamic<QuoteRequestModalProps>(
  () => import('./QuoteRequestModal').then((mod) => mod.QuoteRequestModal),
  {
    loading: () => (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
          <p className="text-center mt-4 text-gray-600">Loading form...</p>
        </div>
      </div>
    ),
    ssr: false,
  }
);

export const DynamicTrackingModal = dynamic<TrackingModalProps>(
  () => import('./TrackingModal').then((mod) => mod.TrackingModal),
  {
    loading: () => (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
          <p className="text-center mt-4 text-gray-600">Loading tracking...</p>
        </div>
      </div>
    ),
    ssr: false,
  }
);
