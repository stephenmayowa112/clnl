import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { WhyChooseUs } from './WhyChooseUs';
import { differentiators } from '@/lib/constants';

describe('WhyChooseUs Component', () => {
  it('renders the Why Choose CLNL heading', () => {
    render(<WhyChooseUs />);
    expect(screen.getByText('Why Choose CLNL')).toBeInTheDocument();
  });

  it('renders all six differentiators', () => {
    render(<WhyChooseUs />);
    expect(differentiators).toHaveLength(6);
    
    differentiators.forEach((differentiator) => {
      expect(screen.getByText(differentiator.title)).toBeInTheDocument();
    });
  });

  it('renders each differentiator with title and description', () => {
    render(<WhyChooseUs />);
    
    differentiators.forEach((differentiator) => {
      expect(screen.getByText(differentiator.title)).toBeInTheDocument();
      expect(screen.getByText(differentiator.description)).toBeInTheDocument();
    });
  });

  it('renders the section subtitle', () => {
    render(<WhyChooseUs />);
    expect(
      screen.getByText('Discover what sets us apart as your trusted logistics partner')
    ).toBeInTheDocument();
  });
});
