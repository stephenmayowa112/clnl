import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
    { id: 'logistics', name: 'Logistics & Warehousing' },
    { id: 'facilities', name: 'Facilities Management' },
  ],
}));

describe('QuoteForm Functionality Verification', () => {
  const mockOnSuccess = vi.fn();
  const mockOnError = vi.fn();
  const mockFormspreeId = 'mykgvlzd';

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Multi-step Navigation', () => {
    it('should navigate through all steps correctly', async () => {
      const user = userEvent.setup();
      render(<QuoteForm formspreeId={mockFormspreeId} />);
      
      // Step 1: Service Selection
      expect(screen.getByText('Service Selection')).toBeInTheDocument();
      expect(screen.getByText('1')).toHaveClass('bg-primary');
      
      const serviceSelect = screen.getByRole('combobox', { name: /service type/i });
      await user.selectOptions(serviceSelect, 'agro-export');
      await user.click(screen.getByText('Next'));
      
      // Step 2: Contact Information
      await waitFor(() => {
        expect(screen.getByText('2')).toHaveClass('bg-primary');
        expect(screen.getByRole('textbox', { name: /full name/i })).toBeInTheDocument();
      });
      
      await user.type(screen.getByRole('textbox', { name: /full name/i }), 'John Doe');
      await user.type(screen.getByRole('textbox', { name: /email address/i }), 'john@example.com');
      await user.type(screen.getByRole('textbox', { name: /phone number/i }), '+234-123-456-7890');
      await user.type(screen.getByRole('textbox', { name: /company name/i }), 'Test Company');
      await user.click(screen.getByText('Next'));
      
      // Step 3: Request Details
      await waitFor(() => {
        expect(screen.getByText('3')).toHaveClass('bg-primary');
        expect(screen.getByRole('textbox', { name: /request details/i })).toBeInTheDocument();
      });
      
      await user.type(screen.getByRole('textbox', { name: /request details/i }), 'Test request details for stephenmayowa112@gmail.com');
      await user.selectOptions(screen.getByRole('combobox', { name: /urgency/i }), 'standard');
      await user.click(screen.getByText('Next'));
      
      // Step 4: Review & Submit
      await waitFor(() => {
        expect(screen.getByText('4')).toHaveClass('bg-primary');
        expect(screen.getByText('Review Your Request')).toBeInTheDocument();
      });
      
      // Verify all data is displayed in review
      expect(screen.getByText('Agro Export Trading')).toBeInTheDocument();
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('john@example.com')).toBeInTheDocument();
      expect(screen.getByText('+234-123-456-7890')).toBeInTheDocument();
      expect(screen.getByText('Test Company')).toBeInTheDocument();
      expect(screen.getByText('Test request details')).toBeInTheDocument();
    });

    it('should allow navigation backwards', async () => {
      const user = userEvent.setup();
      render(<QuoteForm formspreeId={mockFormspreeId} />);
      
      // Navigate to step 2
      const serviceSelect = screen.getByRole('combobox', { name: /service type/i });
      await user.selectOptions(serviceSelect, 'freight');
      await user.click(screen.getByText('Next'));
      
      await waitFor(() => {
        expect(screen.getByRole('textbox', { name: /full name/i })).toBeInTheDocument();
      });
      
      // Click Previous to go back to step 1
      await user.click(screen.getByText('Previous'));
      
      await waitFor(() => {
        expect(screen.getByText('Service Selection')).toBeInTheDocument();
        expect(screen.getByRole('combobox', { name: /service type/i })).toHaveValue('freight');
      });
    });
  });

  describe('Form Validation', () => {
    it('should validate required fields before navigation', async () => {
      const user = userEvent.setup();
      render(<QuoteForm formspreeId={mockFormspreeId} />);
      
      // Try to navigate without selecting service
      await user.click(screen.getByText('Next'));
      
      // Should still be on step 1
      expect(screen.getByText('Service Selection')).toBeInTheDocument();
      expect(screen.getByText('1')).toHaveClass('bg-primary');
    });

    it('should validate email format', async () => {
      const user = userEvent.setup();
      render(<QuoteForm formspreeId={mockFormspreeId} />);
      
      // Navigate to step 2
      const serviceSelect = screen.getByRole('combobox', { name: /service type/i });
      await user.selectOptions(serviceSelect, 'agro-export');
      await user.click(screen.getByText('Next'));
      
      await waitFor(() => {
        expect(screen.getByRole('textbox', { name: /email address/i })).toBeInTheDocument();
      });
      
      // Enter invalid email
      await user.type(screen.getByRole('textbox', { name: /full name/i }), 'John Doe');
      await user.type(screen.getByRole('textbox', { name: /email address/i }), 'invalid-email');
      await user.type(screen.getByRole('textbox', { name: /phone number/i }), '+234-123-456-7890');
      await user.type(screen.getByRole('textbox', { name: /company name/i }), 'Test Company');
      
      // Try to navigate to next step
      await user.click(screen.getByText('Next'));
      
      // Should still be on step 2 due to validation error
      expect(screen.getByText('Contact Information')).toBeInTheDocument();
    });

    it('should validate required fields on each step', async () => {
      const user = userEvent.setup();
      render(<QuoteForm formspreeId={mockFormspreeId} />);
      
      // Navigate to step 2 with valid service
      const serviceSelect = screen.getByRole('combobox', { name: /service type/i });
      await user.selectOptions(serviceSelect, 'agro-export');
      await user.click(screen.getByText('Next'));
      
      await waitFor(() => {
        expect(screen.getByRole('textbox', { name: /full name/i })).toBeInTheDocument();
      });
      
      // Try to navigate without filling required fields
      await user.click(screen.getByText('Next'));
      
      // Should still be on step 2
      expect(screen.getByText('Contact Information')).toBeInTheDocument();
    });
  });

  describe('Form Submission', () => {
    it('should submit form with correct data structure', async () => {
      const { submitToFormspree } = await import('@/lib/formspree');
      vi.mocked(submitToFormspree).mockResolvedValue({ ok: true });
      
      const user = userEvent.setup();
      render(<QuoteForm formspreeId={mockFormspreeId} onSuccess={mockOnSuccess} />);
      
      // Fill out complete form
      const serviceSelect = screen.getByRole('combobox', { name: /service type/i });
      await user.selectOptions(serviceSelect, 'customs');
      await user.click(screen.getByText('Next'));
      
      await waitFor(() => {
        expect(screen.getByRole('textbox', { name: /full name/i })).toBeInTheDocument();
      });
      
      await user.type(screen.getByRole('textbox', { name: /full name/i }), 'Jane Smith');
      await user.type(screen.getByRole('textbox', { name: /email address/i }), 'jane@company.com');
      await user.type(screen.getByRole('textbox', { name: /phone number/i }), '+234-987-654-3210');
      await user.type(screen.getByRole('textbox', { name: /company name/i }), 'Smith Trading Ltd');
      await user.click(screen.getByText('Next'));
      
      await waitFor(() => {
        expect(screen.getByRole('textbox', { name: /request details/i })).toBeInTheDocument();
      });
      
      await user.type(screen.getByRole('textbox', { name: /request details/i }), 'Need customs clearing for electronics import');
      await user.selectOptions(screen.getByRole('combobox', { name: /urgency/i }), 'urgent');
      await user.click(screen.getByText('Next'));
      
      await waitFor(() => {
        expect(screen.getByText('Submit Request')).toBeInTheDocument();
      });
      
      await user.click(screen.getByText('Submit Request'));
      
      // Verify correct data was submitted
      await waitFor(() => {
        expect(submitToFormspree).toHaveBeenCalledWith(mockFormspreeId, {
          serviceType: 'customs',
          contactName: 'Jane Smith',
          email: 'jane@company.com',
          phone: '+234-987-654-3210',
          company: 'Smith Trading Ltd',
          details: 'Need customs clearing for electronics import',
          urgency: 'urgent',
        });
      });
      
      expect(mockOnSuccess).toHaveBeenCalled();
    });

    it('should handle submission errors gracefully', async () => {
      const { submitToFormspree } = await import('@/lib/formspree');
      vi.mocked(submitToFormspree).mockResolvedValue({ 
        ok: false, 
        errors: [{ field: 'email', message: 'Invalid email format' }] 
      });
      
      const user = userEvent.setup();
      render(<QuoteForm formspreeId={mockFormspreeId} onError={mockOnError} />);
      
      // Fill out and submit form (abbreviated)
      const serviceSelect = screen.getByRole('combobox', { name: /service type/i });
      await user.selectOptions(serviceSelect, 'agro-export');
      await user.click(screen.getByText('Next'));
      
      await waitFor(() => {
        expect(screen.getByRole('textbox', { name: /full name/i })).toBeInTheDocument();
      });
      
      await user.type(screen.getByRole('textbox', { name: /full name/i }), 'Test User');
      await user.type(screen.getByRole('textbox', { name: /email address/i }), 'test@example.com');
      await user.type(screen.getByRole('textbox', { name: /phone number/i }), '+234-123-456-7890');
      await user.type(screen.getByRole('textbox', { name: /company name/i }), 'Test Company');
      await user.click(screen.getByText('Next'));
      
      await waitFor(() => {
        expect(screen.getByRole('textbox', { name: /request details/i })).toBeInTheDocument();
      });
      
      await user.type(screen.getByRole('textbox', { name: /request details/i }), 'Test details');
      await user.click(screen.getByText('Next'));
      
      await waitFor(() => {
        expect(screen.getByText('Submit Request')).toBeInTheDocument();
      });
      
      await user.click(screen.getByText('Submit Request'));
      
      // Should call error handler
      await waitFor(() => {
        expect(mockOnError).toHaveBeenCalledWith('Invalid email format');
      });
      
      // Should display error message
      expect(screen.getByText('Invalid email format')).toBeInTheDocument();
    });
  });

  describe('Form Reset', () => {
    it('should reset form to initial state after successful submission', async () => {
      const { submitToFormspree } = await import('@/lib/formspree');
      vi.mocked(submitToFormspree).mockResolvedValue({ ok: true });
      
      const user = userEvent.setup();
      render(<QuoteForm formspreeId={mockFormspreeId} />);
      
      // Fill out and submit form
      const serviceSelect = screen.getByRole('combobox', { name: /service type/i });
      await user.selectOptions(serviceSelect, 'logistics');
      await user.click(screen.getByText('Next'));
      
      await waitFor(() => {
        expect(screen.getByRole('textbox', { name: /full name/i })).toBeInTheDocument();
      });
      
      await user.type(screen.getByRole('textbox', { name: /full name/i }), 'Reset Test');
      await user.type(screen.getByRole('textbox', { name: /email address/i }), 'reset@test.com');
      await user.type(screen.getByRole('textbox', { name: /phone number/i }), '+234-555-0123');
      await user.type(screen.getByRole('textbox', { name: /company name/i }), 'Reset Company');
      await user.click(screen.getByText('Next'));
      
      await waitFor(() => {
        expect(screen.getByRole('textbox', { name: /request details/i })).toBeInTheDocument();
      });
      
      await user.type(screen.getByRole('textbox', { name: /request details/i }), 'Reset test details');
      await user.click(screen.getByText('Next'));
      
      await waitFor(() => {
        expect(screen.getByText('Submit Request')).toBeInTheDocument();
      });
      
      await user.click(screen.getByText('Submit Request'));
      
      // After successful submission, should reset to step 1
      await waitFor(() => {
        expect(screen.getByText('Service Selection')).toBeInTheDocument();
        expect(screen.getByText('1')).toHaveClass('bg-primary');
      });
      
      // Form fields should be cleared
      const resetServiceSelect = screen.getByRole('combobox', { name: /service type/i });
      expect(resetServiceSelect).toHaveValue('');
    });

    it('should display success message after submission', async () => {
      const { submitToFormspree } = await import('@/lib/formspree');
      vi.mocked(submitToFormspree).mockResolvedValue({ ok: true });
      
      const user = userEvent.setup();
      render(<QuoteForm formspreeId={mockFormspreeId} />);
      
      // Complete form submission (abbreviated)
      const serviceSelect = screen.getByRole('combobox', { name: /service type/i });
      await user.selectOptions(serviceSelect, 'facilities');
      await user.click(screen.getByText('Next'));
      
      await waitFor(() => {
        expect(screen.getByRole('textbox', { name: /full name/i })).toBeInTheDocument();
      });
      
      await user.type(screen.getByRole('textbox', { name: /full name/i }), 'Success Test');
      await user.type(screen.getByRole('textbox', { name: /email address/i }), 'success@test.com');
      await user.type(screen.getByRole('textbox', { name: /phone number/i }), '+234-999-8888');
      await user.type(screen.getByRole('textbox', { name: /company name/i }), 'Success Company');
      await user.click(screen.getByText('Next'));
      
      await waitFor(() => {
        expect(screen.getByRole('textbox', { name: /request details/i })).toBeInTheDocument();
      });
      
      await user.type(screen.getByRole('textbox', { name: /request details/i }), 'Success test details');
      await user.click(screen.getByText('Next'));
      
      await waitFor(() => {
        expect(screen.getByText('Submit Request')).toBeInTheDocument();
      });
      
      await user.click(screen.getByText('Submit Request'));
      
      // Should show success message
      await waitFor(() => {
        expect(screen.getByText(/Thank you for your quote request!/)).toBeInTheDocument();
        expect(screen.getByText(/We'll review your information and get back to you within 24 hours/)).toBeInTheDocument();
      });
    });
  });

  describe('Service Options', () => {
    it('should display all available services', () => {
      render(<QuoteForm formspreeId={mockFormspreeId} />);
      
      // Check that all service options are available
      expect(screen.getByRole('option', { name: 'Agro Export Trading' })).toBeInTheDocument();
      expect(screen.getByRole('option', { name: 'Freight Management' })).toBeInTheDocument();
      expect(screen.getByRole('option', { name: 'Customs Clearing' })).toBeInTheDocument();
      expect(screen.getByRole('option', { name: 'Logistics & Warehousing' })).toBeInTheDocument();
      expect(screen.getByRole('option', { name: 'Facilities Management' })).toBeInTheDocument();
    });

    it('should accept initialServiceType prop', () => {
      render(<QuoteForm formspreeId={mockFormspreeId} initialServiceType="freight" />);
      
      const serviceSelect = screen.getByRole('combobox', { name: /service type/i });
      expect(serviceSelect).toHaveValue('freight');
    });
  });
});