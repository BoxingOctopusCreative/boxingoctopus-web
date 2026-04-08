import { render, screen } from '@testing-library/react';
import { isSanityConfigured } from '@/lib/sanity.client';

jest.mock('@/lib/sanity.client', () => ({
  sanityClient: {
    fetch: jest.fn().mockResolvedValue(null),
  },
  isSanityConfigured: jest.fn(),
}));

const mockIsConfigured = isSanityConfigured as jest.MockedFunction<typeof isSanityConfigured>;

describe('About page', () => {
  beforeEach(() => {
    mockIsConfigured.mockReturnValue(false);
  });

  it('renders the About title', async () => {
    const { default: About } = await import('@/app/about/page');
    const ui = await About();
    render(ui);
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  it('shows environment message when Sanity is not configured', async () => {
    const { default: About } = await import('@/app/about/page');
    const ui = await About();
    render(ui);
    expect(screen.getByText(/NEXT_PUBLIC_SANITY_PROJECT_ID/i)).toBeInTheDocument();
  });
});
