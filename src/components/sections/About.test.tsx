import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { About } from './About';
import { companyInfo } from '@/lib/constants';

describe('About Component', () => {
  it('renders the About Us heading', () => {
    render(<About />);
    expect(screen.getByText('About Us')).toBeInTheDocument();
  });

  it('renders the company description', () => {
    render(<About />);
    expect(screen.getByText(companyInfo.description)).toBeInTheDocument();
  });

  it('renders the mission card with correct content', () => {
    render(<About />);
    expect(screen.getByText('Our Mission')).toBeInTheDocument();
    expect(screen.getByText(companyInfo.mission)).toBeInTheDocument();
  });

  it('renders the vision card with correct content', () => {
    render(<About />);
    expect(screen.getByText('Our Vision')).toBeInTheDocument();
    expect(screen.getByText(companyInfo.vision)).toBeInTheDocument();
  });

  it('renders the values card with all values', () => {
    render(<About />);
    expect(screen.getByText('Our Values')).toBeInTheDocument();
    
    companyInfo.values.forEach((value) => {
      expect(screen.getByText(value)).toBeInTheDocument();
    });
  });

  it('renders all three cards (mission, vision, values)', () => {
    render(<About />);
    expect(screen.getByText('Our Mission')).toBeInTheDocument();
    expect(screen.getByText('Our Vision')).toBeInTheDocument();
    expect(screen.getByText('Our Values')).toBeInTheDocument();
  });
});
