'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { quoteRequestSchema, type QuoteRequestInput } from '@/lib/schemas';
import { submitToFormspree } from '@/lib/formspree';
import { Input, Textarea, Select, Button } from '@/components/ui';
import { services } from '@/lib/constants';

export interface QuoteFormProps {
  formspreeId?: string;
  onSuccess?: () => void;
  onError?: (error: string) => void;
  initialServiceType?: QuoteRequestInput['serviceType'];
}

const STEPS = [
  { id: 1, title: 'Service Selection', description: 'Choose the service you need' },
  { id: 2, title: 'Contact Information', description: 'Tell us about yourself' },
  { id: 3, title: 'Request Details', description: 'Provide details about your needs' },
  { id: 4, title: 'Review & Submit', description: 'Review your request' },
];

export const QuoteForm: React.FC<QuoteFormProps> = ({
  formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_QUOTE_ID || '',
  onSuccess,
  onError,
  initialServiceType,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    trigger,
    reset,
  } = useForm<QuoteRequestInput>({
    resolver: zodResolver(quoteRequestSchema),
    mode: 'onBlur',
    defaultValues: {
      serviceType: initialServiceType,
      urgency: 'standard',
    },
  });

  const formValues = watch();

  const serviceOptions = services.map((service) => ({
    value: service.id,
    label: service.name,
  }));

  const urgencyOptions = [
    { value: 'standard', label: 'Standard (3-5 business days)' },
    { value: 'urgent', label: 'Urgent (1-2 business days)' },
  ];

  const validateStep = async (step: number): Promise<boolean> => {
    let fieldsToValidate: (keyof QuoteRequestInput)[] = [];

    switch (step) {
      case 1:
        fieldsToValidate = ['serviceType'];
        break;
      case 2:
        fieldsToValidate = ['contactName', 'email', 'phone', 'company'];
        break;
      case 3:
        fieldsToValidate = ['details', 'urgency'];
        break;
    }

    const result = await trigger(fieldsToValidate);
    return result;
  };

  const handleNext = async () => {
    const isValid = await validateStep(currentStep);
    if (isValid && currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: QuoteRequestInput) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await submitToFormspree(formspreeId, data);

      if (response.ok) {
        setSubmitStatus('success');
        reset();
        setCurrentStep(1);
        onSuccess?.();
      } else {
        const errorMsg = response.errors?.[0]?.message || 'Failed to submit quote request. Please try again.';
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

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <Select
              label="Service Type"
              options={serviceOptions}
              placeholder="Select a service"
              error={errors.serviceType?.message}
              required
              {...register('serviceType')}
            />
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <Input
              label="Full Name"
              type="text"
              placeholder="John Doe"
              error={errors.contactName?.message}
              required
              {...register('contactName')}
            />

            <Input
              label="Email Address"
              type="email"
              placeholder="john.doe@company.com"
              error={errors.email?.message}
              required
              {...register('email')}
            />

            <Input
              label="Phone Number"
              type="tel"
              placeholder="+234 XXX XXX XXXX"
              error={errors.phone?.message}
              required
              {...register('phone')}
            />

            <Input
              label="Company Name"
              type="text"
              placeholder="Your Company Ltd"
              error={errors.company?.message}
              required
              {...register('company')}
            />
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <Textarea
              label="Request Details"
              placeholder="Please provide details about your logistics needs, including shipment type, volume, destination, timeline, and any special requirements..."
              rows={6}
              error={errors.details?.message}
              required
              {...register('details')}
            />

            <Select
              label="Urgency"
              options={urgencyOptions}
              error={errors.urgency?.message}
              required
              {...register('urgency')}
            />
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <h3 className="font-semibold text-lg text-gray-900">Review Your Request</h3>
              
              <div className="space-y-2">
                <div>
                  <span className="text-sm font-medium text-gray-600">Service:</span>
                  <p className="text-gray-900">
                    {services.find((s) => s.id === formValues.serviceType)?.name || 'Not selected'}
                  </p>
                </div>

                <div>
                  <span className="text-sm font-medium text-gray-600">Contact Name:</span>
                  <p className="text-gray-900">{formValues.contactName || 'Not provided'}</p>
                </div>

                <div>
                  <span className="text-sm font-medium text-gray-600">Email:</span>
                  <p className="text-gray-900">{formValues.email || 'Not provided'}</p>
                </div>

                <div>
                  <span className="text-sm font-medium text-gray-600">Phone:</span>
                  <p className="text-gray-900">{formValues.phone || 'Not provided'}</p>
                </div>

                <div>
                  <span className="text-sm font-medium text-gray-600">Company:</span>
                  <p className="text-gray-900">{formValues.company || 'Not provided'}</p>
                </div>

                <div>
                  <span className="text-sm font-medium text-gray-600">Details:</span>
                  <p className="text-gray-900 whitespace-pre-wrap">{formValues.details || 'Not provided'}</p>
                </div>

                <div>
                  <span className="text-sm font-medium text-gray-600">Urgency:</span>
                  <p className="text-gray-900">
                    {urgencyOptions.find((o) => o.value === formValues.urgency)?.label || 'Not selected'}
                  </p>
                </div>
              </div>
            </div>

            {submitStatus === 'success' && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800" role="alert">
                Thank you for your quote request! We&apos;ll review your information and get back to you within 24 hours.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800" role="alert">
                {errorMessage}
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      {/* Progress Indicator */}
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center justify-between mb-2">
          {STEPS.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`
                    w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-semibold text-sm sm:text-base
                    ${
                      currentStep > step.id
                        ? 'bg-green-500 text-white'
                        : currentStep === step.id
                        ? 'bg-primary text-white'
                        : 'bg-gray-200 text-gray-600'
                    }
                  `}
                >
                  {currentStep > step.id ? '✓' : step.id}
                </div>
                <div className="mt-1 sm:mt-2 text-center">
                  <p className="text-[10px] sm:text-xs font-medium text-gray-900 leading-tight">{step.title}</p>
                  <p className="text-[10px] sm:text-xs text-gray-500 hidden md:block">{step.description}</p>
                </div>
              </div>
              {index < STEPS.length - 1 && (
                <div
                  className={`
                    flex-1 h-0.5 sm:h-1 mx-1 sm:mx-2 mt-[-1.5rem] sm:mt-[-2rem]
                    ${currentStep > step.id ? 'bg-green-500' : 'bg-gray-200'}
                  `}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {renderStepContent()}

        {/* Navigation Buttons */}
        <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-6">
          {currentStep > 1 && (
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={handlePrevious}
              disabled={isSubmitting}
              className="flex-1 text-sm sm:text-base"
            >
              Previous
            </Button>
          )}

          {currentStep < STEPS.length ? (
            <Button
              type="button"
              variant="primary"
              size="lg"
              onClick={handleNext}
              className="flex-1 text-sm sm:text-base"
            >
              Next
            </Button>
          ) : (
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
              className="flex-1 text-sm sm:text-base"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};
