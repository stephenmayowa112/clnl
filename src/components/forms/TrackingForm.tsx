'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { trackingQuerySchema, type TrackingQueryInput } from '@/lib/schemas';
import { Input, Button } from '@/components/ui';

export interface TrackingFormProps {
  trackingPortalUrl?: string;
  onTrack?: (trackingNumber: string) => void;
}

export const TrackingForm: React.FC<TrackingFormProps> = ({
  trackingPortalUrl = process.env.NEXT_PUBLIC_TRACKING_PORTAL_URL || 'https://track.clnl.com.ng',
  onTrack,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TrackingQueryInput>({
    resolver: zodResolver(trackingQuerySchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: TrackingQueryInput) => {
    setIsSubmitting(true);

    try {
      // Call optional callback
      onTrack?.(data.trackingNumber);

      // Redirect to external tracking portal with tracking number
      const trackingUrl = `${trackingPortalUrl}?tracking=${encodeURIComponent(data.trackingNumber)}`;
      window.open(trackingUrl, '_blank', 'noopener,noreferrer');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <Input
        label="Tracking Number"
        type="text"
        placeholder="Enter your tracking number (e.g., CLNL-12345)"
        error={errors.trackingNumber?.message}
        helperText="Enter the tracking number provided when you shipped your goods"
        required
        {...register('trackingNumber')}
      />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? 'Opening Tracker...' : 'Track Shipment'}
      </Button>

      <p className="text-sm text-gray-600 text-center">
        Can't find your tracking number? <a href="#contact" className="text-primary hover:underline">Contact us</a>
      </p>
    </form>
  );
};
