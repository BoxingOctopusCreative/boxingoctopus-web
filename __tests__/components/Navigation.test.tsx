import { render, screen } from '@testing-library/react';
import { Navigation } from '@/components/Navigation';

describe('Navigation', () => {
  it('renders the logo with correct alt text', () => {
    render(<Navigation />);
    expect(screen.getByAltText('Boxing Octopus')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Navigation />);
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /collective/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^contact$/i })).toHaveAttribute('href', '/contact');
    expect(screen.getByRole('button', { name: /contact sub-menu/i })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: /^github$/i, hidden: true })).toBeInTheDocument();
  });

  it('links to correct internal paths', () => {
    render(<Navigation />);
    expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: /about/i })).toHaveAttribute('href', '/about');
    expect(screen.getByRole('link', { name: /resume/i })).toHaveAttribute('href', '/resume');
  });

  it('Github menu item opens in new tab', () => {
    render(<Navigation />);
    const githubItem = screen.getByRole('menuitem', { name: /^github$/i, hidden: true });
    expect(githubItem).toHaveAttribute('href', 'https://github.com/boxingoctopus');
    expect(githubItem).toHaveAttribute('target', '_blank');
    expect(githubItem).toHaveAttribute('rel', 'noreferrer');
  });
});
