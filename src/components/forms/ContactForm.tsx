'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormInput } from '@/lib/schemas';
import { submitToFormspree } from '@/lib/formspree';
import { Input, Textarea, Button } from '@/components/ui';

export interface ContactFormProps {
  formspreeId?: string;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ID || '',
  onSuccess,
  onError,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: ContactFormInput) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await submitToFormspree(formspreeId, data);

      if (response.ok) {
        setSubmitStatus('success');
        reset();
        onSuccess?.();
      } else {
        const errorMsg = response.errors?.[0]?.message || 'Failed to submit form. Please try again.';
        setSubmitStatus('error');
        setErrorMessage(errorMsg);
        onError?.(errorMsg);
      }
    } catch (error) {
      const errorMsg = 'An unexpected error occurred. Please try again.';
      setSubmitStatus('error');
      setErrorMessage(errorMsg);
      onError?.(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <Input
        label="Name"
        type="text"
        placeholder="Your full name"
        error={errors.name?.message}
        required
        {...register('name')}
      />

      <Input
        label="Email"
        type="email"
        placeholder="your.email@example.com"
        error={errors.email?.message}
        required
        {...register('email')}
      />

      <Input
        label="Phone"
        type="tel"
        placeholder="+234 XXX XXX XXXX"
        error={errors.phone?.message}
        required
        {...register('phone')}
      />

      <Input
        label="Subject"
        type="text"
        placeholder="What is this regarding?"
        error={errors.subject?.message}
        required
        {...register('subject')}
      />

      <Textarea
        label="Message"
        placeholder="Tell us more about your inquiry..."
        rows={5}
        error={errors.message?.message}
        required
        {...register('message')}
      />

      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800" role="alert">
          Thank you for contacting us! We'll get back to you shortly.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800" role="alert">
          {errorMessage}
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};
