import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Industries } from './Industries';
import { industries } from '@/lib/constants';

describe('Industries Component', () => {
  it('renders the section heading', () => {
    render(<Industries />);
    expect(screen.getByText('Industries We Serve')).toBeInTheDocument();
  });

  it('renders all industries from constants', () => {
    render(<Industries />);
    industries.forEach((industry) => {
      expect(screen.getByText(industry.name)).toBeInTheDocument();
    });
  });

  it('renders industry descriptions', () => {
    render(<Industries />);
    industries.forEach((industry) => {
      expect(screen.getByText(industry.description)).toBeInTheDocument();
    });
  });

  it('renders the correct number of industry cards', () => {
    const { container } = render(<Industries />);
    const cards = container.querySelectorAll('.group');
    expect(cards.length).toBe(industries.length);
  });
});
