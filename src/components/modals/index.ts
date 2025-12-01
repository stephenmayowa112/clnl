// Export original components for direct use
export { QuoteRequestModal } from './QuoteRequestModal';
export { TrackingModal } from './TrackingModal';
export type { QuoteRequestModalProps } from './QuoteRequestModal';
export type { TrackingModalProps } from './TrackingModal';

// Export dynamically loaded versions for better code splitting
export { DynamicQuoteRequestModal, DynamicTrackingModal } from './DynamicModals';
