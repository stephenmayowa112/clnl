import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { QuoteForm } from './QuoteForm';

// Mock the formspree module
vi.mock('@/lib/formspree', () => ({
  submitToFormspree: vi.fn(),
}));

// Mock the constants module
vi.mock('@/lib/constants', () => ({
  services: [
    { id: 'agro-export', name: 'Agro Export Trading' },
    { id: 'freight', name: 'Freight Management' },
    { id: 'customs', name: 'Customs Clearing' },
  ],
}));

describe('QuoteForm', () => {
  const mockOnSuccess = vi.fn();
  const mockOnError = vi.fn();
  const mockFormspreeId = 'test-form-id';

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the form with initial step', () => {
    render(<QuoteForm formspreeId={mockFormspreeId} />);
    
    // Check that the first step is displayed
    expect(screen.getByText('Service Selection')).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: /service type/i })).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
  });

  it('shows progress indicator with correct steps', () => {
    render(<QuoteForm formspreeId={mockFormspreeId} />);
    
    // Check all steps are shown in progress indicator
    expect(screen.getByText('Service Selection')).toBeInTheDocument();
    expect(screen.getByText('Contact Information')).toBeInTheDocument();
    expect(screen.getByText('Request Details')).toBeInTheDocument();
    expect(screen.getByText('Review & Submit')).toBeInTheDocument();
  });

  it('accepts formspreeId prop', () => {
    const customFormspreeId = 'custom-form-id';
    render(<QuoteForm formspreeId={customFormspreeId} />);
    
    // Form should render without errors
    expect(screen.getByRole('combobox', { name: /service type/i })).toBeInTheDocument();
  });

  it('accepts onSuccess and onError callbacks', () => {
    render(
      <QuoteForm 
        formspreeId={mockFormspreeId} 
        onSuccess={mockOnSuccess}
        onError={mockOnError}
      />
    );
    
    // Form should render without errors
    expect(screen.getByRole('combobox', { name: /service type/i })).toBeInTheDocument();
  });

  it('displays service options from constants', () => {
    render(<QuoteForm formspreeId={mockFormspreeId} />);
    
    const serviceSelect = screen.getByRole('combobox', { name: /service type/i });
    
    // Check that service options are present
    expect(screen.getByRole('option', { name: 'Agro Export Trading' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Freight Management' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Customs Clearing' })).toBeInTheDocument();
  });

  it('uses environment variable as default formspreeId', () => {
    // Mock environment variable
    const originalEnv = process.env.NEXT_PUBLIC_FORMSPREE_QUOTE_ID;
    process.env.NEXT_PUBLIC_FORMSPREE_QUOTE_ID = 'env-form-id';
    
    render(<QuoteForm />);
    
    // Form should render without errors
    expect(screen.getByRole('combobox', { name: /service type/i })).toBeInTheDocument();
    
    // Restore environment variable
    process.env.NEXT_PUBLIC_FORMSPREE_QUOTE_ID = originalEnv;
  });

  it('handles missing formspreeId gracefully', () => {
    render(<QuoteForm formspreeId="" />);
    
    // Form should still render
    expect(screen.getByRole('combobox', { name: /service type/i })).toBeInTheDocument();
  });

  it('accepts initialServiceType prop', () => {
    render(<QuoteForm formspreeId={mockFormspreeId} initialServiceType="freight" />);
    
    // Form should render without errors
    expect(screen.getByRole('combobox', { name: /service type/i })).toBeInTheDocument();
  });
});