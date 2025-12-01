import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Contact } from './Contact';
import { companyInfo } from '@/lib/constants';

describe('Contact Component', () => {
  it('renders the Contact Us heading', () => {
    render(<Contact />);
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
  });

  it('renders the contact information section heading', () => {
    render(<Contact />);
    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
  });

  it('renders the address information', () => {
    render(<Contact />);
    expect(screen.getByText('Address')).toBeInTheDocument();
    expect(screen.getByText(companyInfo.contact.address)).toBeInTheDocument();
  });

  it('renders the phone information', () => {
    render(<Contact />);
    expect(screen.getByText('Phone')).toBeInTheDocument();
    
    companyInfo.contact.phone.forEach((phone) => {
      expect(screen.getByText(phone)).toBeInTheDocument();
    });
  });

  it('renders the email information', () => {
    render(<Contact />);
    expect(screen.getByText('Email')).toBeInTheDocument();
    
    companyInfo.contact.email.forEach((email) => {
      expect(screen.getByText(email)).toBeInTheDocument();
    });
  });

  it('renders phone numbers as clickable links', () => {
    render(<Contact />);
    
    companyInfo.contact.phone.forEach((phone) => {
      const link = screen.getByText(phone).closest('a');
      expect(link).toHaveAttribute('href', `tel:${phone.replace(/\s/g, '')}`);
    });
  });

  it('renders email addresses as clickable links', () => {
    render(<Contact />);
    
    companyInfo.contact.email.forEach((email) => {
      const link = screen.getByText(email).closest('a');
      expect(link).toHaveAttribute('href', `mailto:${email}`);
    });
  });

  it('renders the map placeholder', () => {
    render(<Contact />);
    expect(screen.getByText('Map Integration Placeholder')).toBeInTheDocument();
  });

  it('displays all contact icons', () => {
    const { container } = render(<Contact />);
    
    // Check that icon containers are present
    const iconContainers = container.querySelectorAll('.w-12.h-12');
    expect(iconContainers.length).toBeGreaterThanOrEqual(3); // Address, Phone, Email icons
  });
});
