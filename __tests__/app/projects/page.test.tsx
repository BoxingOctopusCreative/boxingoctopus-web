import { render, screen } from '@testing-library/react';
import Projects from '@/app/projects/page';
import { sanityClient, isSanityConfigured } from '@/lib/sanity.client';

jest.mock('@/lib/sanity.client', () => ({
  sanityClient: {
    fetch: jest.fn(),
  },
  isSanityConfigured: jest.fn(),
}));

jest.mock('@/lib/sanity.image', () => ({
  urlForImage: jest.fn(() => ({
    width: jest.fn().mockReturnThis(),
    auto: jest.fn().mockReturnThis(),
    url: jest.fn(() => 'https://cdn.sanity.io/images/test/image.png'),
  })),
}));

const mockProjects = [
  {
    _id: 'project-1',
    projectTitle: { text: "Ryan Draga's Nerd Emporium", url: 'https://ryandraga.me' },
    projectDescription: [
      {
        _key: 'desc-1',
        _type: 'block',
        children: [{ _key: 'span-1', _type: 'span', text: 'My Personal Blog.' }],
      },
    ],
    projectImage: {
      asset: { _type: 'image' },
      alt: "Ryan Draga's Nerd Emporium",
      url: 'https://ryandraga.me',
    },
  },
  {
    _id: 'project-2',
    projectTitle: { text: 'My Life In Music', url: 'https://mylifeinmusic.me' },
    projectDescription: [
      {
        _key: 'desc-2',
        _type: 'block',
        children: [{ _key: 'span-2', _type: 'span', text: 'Music catalog project.' }],
      },
    ],
    projectImage: {
      asset: { _type: 'image' },
      alt: 'My Life In Music',
      url: 'https://mylifeinmusic.me',
    },
  },
];

const mockIsSanityConfigured = isSanityConfigured as jest.MockedFunction<typeof isSanityConfigured>;
const mockFetch = sanityClient.fetch as jest.MockedFunction<typeof sanityClient.fetch>;

describe('Projects page', () => {
  beforeEach(() => {
    mockIsSanityConfigured.mockReturnValue(true);
    mockFetch.mockResolvedValue(mockProjects);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the Projects title', async () => {
    render(await Projects());
    expect(screen.getByText('Projects')).toBeInTheDocument();
  });

  it('renders project images with alt text from Sanity', async () => {
    render(await Projects());
    expect(screen.getByRole('img', { name: /ryan draga's nerd emporium/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /my life in music/i })).toBeInTheDocument();
  });

  it('renders image src from url builder', async () => {
    render(await Projects());
    const img = screen.getByRole('img', { name: /ryan draga's nerd emporium/i });
    expect(img).toHaveAttribute('src', expect.stringContaining('cdn.sanity.io/images/test/image.png'));
  });

  it('project image and title links use Sanity URLs', async () => {
    render(await Projects());
    const nerdLinks = screen.getAllByRole('link', { name: /ryan draga's nerd emporium/i });
    expect(nerdLinks).toHaveLength(2);
    nerdLinks.forEach((link) => {
      expect(link).toHaveAttribute('href', 'https://ryandraga.me');
      expect(link).toHaveAttribute('target', '_blank');
    });
  });

  it('shows setup message when Sanity is not configured', async () => {
    mockIsSanityConfigured.mockReturnValue(false);
    render(await Projects());

    expect(
      screen.getByText(/add `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET`/i)
    ).toBeInTheDocument();
    expect(mockFetch).not.toHaveBeenCalled();
  });
});
