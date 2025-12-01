import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';
import { companyInfo } from '@/lib/constants';

describe('Hero Component', () => {
  it('should render company name, tagline, and description', () => {
    render(<Hero />);
    
    // Check that company name is displayed
    expect(screen.getByText(companyInfo.name)).toBeInTheDocument();
    
    // Check that tagline is displayed
    expect(screen.getByText(companyInfo.tagline)).toBeInTheDocument();
    
    // Check that description is displayed
    expect(screen.getByText(companyInfo.description)).toBeInTheDocument();
  });

  it('should render two CTA buttons with correct labels', () => {
    render(<Hero />);
    
    // Check for "Request a Quote" button
    const quoteButton = screen.getByRole('button', { name: /request a quote/i });
    expect(quoteButton).toBeInTheDocument();
    
    // Check for "Track Your Shipment" button
    const trackButton = screen.getByRole('button', { name: /track your shipment/i });
    expect(trackButton).toBeInTheDocument();
  });

  it('should call onRequestQuote callback when Request a Quote button is clicked', () => {
    const mockOnRequestQuote = vi.fn();
    render(<Hero onRequestQuote={mockOnRequestQuote} />);
    
    const quoteButton = screen.getByRole('button', { name: /request a quote/i });
    quoteButton.click();
    
    expect(mockOnRequestQuote).toHaveBeenCalledTimes(1);
  });

  it('should call onTrackShipment callback when Track Your Shipment button is clicked', () => {
    const mockOnTrackShipment = vi.fn();
    render(<Hero onTrackShipment={mockOnTrackShipment} />);
    
    const trackButton = screen.getByRole('button', { name: /track your shipment/i });
    trackButton.click();
    
    expect(mockOnTrackShipment).toHaveBeenCalledTimes(1);
  });

  it('should render scroll indicator', () => {
    render(<Hero />);
    
    const scrollButton = screen.getByRole('button', { name: /scroll down/i });
    expect(scrollButton).toBeInTheDocument();
  });
});
