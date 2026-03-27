import { render, screen } from '@testing-library/react';
import { Footer } from '@/components/Footer';

describe('Footer', () => {
  it('renders Boxing Octopus Creative link', () => {
    render(<Footer />);
    const links = screen.getAllByRole('link', { name: /boxing octopus creative/i });
    expect(links.length).toBeGreaterThanOrEqual(1);
    expect(links[0]).toHaveAttribute('href', 'https://boxingoctop.us');
  });

  it('renders current year in copyright', () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`©\\s*${year}`, 'i'))).toBeInTheDocument();
  });

  it('renders "Another fine" and "Project" text', () => {
    render(<Footer />);
    expect(screen.getByText(/another fine/i)).toBeInTheDocument();
    expect(screen.getByText(/project/i)).toBeInTheDocument();
  });

  it('Next.js and Tailwind links open in new tab', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: /next\.js/i })).toHaveAttribute('target', '_blank');
    expect(screen.getByRole('link', { name: /tailwind css/i })).toHaveAttribute('target', '_blank');
  });
});
