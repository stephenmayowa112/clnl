import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Services } from './Services';
import { services } from '@/lib/constants';

describe('Services Component', () => {
  it('renders the services section with header', () => {
    render(<Services />);
    
    expect(screen.getByText('Our Services')).toBeInTheDocument();
    expect(screen.getByText(/Comprehensive logistics solutions/i)).toBeInTheDocument();
  });

  it('renders all service tabs', () => {
    render(<Services />);
    
    services.forEach((service) => {
      // Check for either full name or first word (mobile view)
      const serviceName = service.name;
      const elements = screen.getAllByText(new RegExp(serviceName.split(' ')[0], 'i'));
      expect(elements.length).toBeGreaterThan(0);
    });
  });

  it('displays the first service by default', () => {
    render(<Services />);
    
    const firstService = services[0];
    // Use getAllByText since the name appears in both tab and content
    const nameElements = screen.getAllByText(firstService.name, { exact: false });
    expect(nameElements.length).toBeGreaterThan(0);
    expect(screen.getByText(firstService.description)).toBeInTheDocument();
  });

  it('switches service content when tab is clicked', async () => {
    render(<Services />);
    
    const secondService = services[1];
    const tabs = screen.getAllByRole('button');
    
    // Click the second service tab
    fireEvent.click(tabs[1]);
    
    // Wait for animation and verify the second service content is displayed
    const description = await screen.findByText(secondService.description);
    expect(description).toBeInTheDocument();
  });

  it('displays service offerings', () => {
    render(<Services />);
    
    const firstService = services[0];
    
    // Check that offerings are displayed
    firstService.offerings.forEach((offering) => {
      expect(screen.getByText(offering)).toBeInTheDocument();
    });
  });

  it('displays service products when available', () => {
    render(<Services />);
    
    const firstService = services[0];
    
    if (firstService.products && firstService.products.length > 0) {
      expect(screen.getByText('Products We Handle')).toBeInTheDocument();
      
      firstService.products.forEach((product) => {
        expect(screen.getByText(product)).toBeInTheDocument();
      });
    }
  });

  it('renders Request a Quote button for each service', () => {
    render(<Services />);
    
    const quoteButtons = screen.getAllByText('Request a Quote');
    expect(quoteButtons.length).toBeGreaterThan(0);
  });

  it('calls onRequestQuote callback when button is clicked', () => {
    const mockOnRequestQuote = vi.fn();
    render(<Services onRequestQuote={mockOnRequestQuote} />);
    
    const quoteButton = screen.getByText('Request a Quote');
    fireEvent.click(quoteButton);
    
    expect(mockOnRequestQuote).toHaveBeenCalledWith(services[0].id);
  });

  it('displays service icons', () => {
    const { container } = render(<Services />);
    
    // Check that SVG icons are rendered
    const icons = container.querySelectorAll('svg');
    expect(icons.length).toBeGreaterThan(0);
  });

  it('applies active styling to selected tab', () => {
    render(<Services />);
    
    const tabs = screen.getAllByRole('button');
    const firstTab = tabs[0];
    
    // First tab should have active styling
    expect(firstTab.className).toContain('bg-primary');
    expect(firstTab.className).toContain('text-white');
  });

  it('switches active tab styling when different tab is clicked', () => {
    render(<Services />);
    
    const tabs = screen.getAllByRole('button');
    const secondTab = tabs[1];
    
    // Click second tab
    fireEvent.click(secondTab);
    
    // Second tab should now have active styling
    expect(secondTab.className).toContain('bg-primary');
    expect(secondTab.className).toContain('text-white');
  });
});
