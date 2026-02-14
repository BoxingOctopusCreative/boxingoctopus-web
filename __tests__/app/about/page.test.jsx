import { render, screen } from '@testing-library/react';
import About from '@/app/about/page';

describe('About page', () => {
  it('renders the About title', () => {
    render(<About />);
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  it('renders the profile image with correct alt text', () => {
    render(<About />);
    const img = screen.getByRole('img', { name: /ryan/i });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('alt', 'Ryan');
  });

  it('profile image has correct src', () => {
    render(<About />);
    const img = screen.getByRole('img', { name: /ryan/i });
    expect(img).toHaveAttribute('src', 'https://assets.boxingoctop.us/img/ryan-square.jpg');
  });

  it('renders the bio text', () => {
    render(<About />);
    expect(screen.getByText(/my name is ryan draga/i)).toBeInTheDocument();
    expect(screen.getByText(/boxing octopus creative/i)).toBeInTheDocument();
  });
});
