
import type { NavLink, TeamMember, GalleryItem, Stat } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Jane Doe',
    role: 'Founder & Director',
    imageUrl: 'https://picsum.photos/seed/person1/400/400',
    bio: 'With a passion for community service, Jane founded Angel Helping Wing to create a bridge between those who have and those who need it most.'
  },
  {
    name: 'John Smith',
    role: 'Head of Operations',
    imageUrl: 'https://picsum.photos/seed/person2/400/400',
    bio: 'John ensures that every initiative runs smoothly, managing logistics and our dedicated team of community members.'
  },
  {
    name: 'Emily White',
    role: 'Community Coordinator',
    imageUrl: 'https://picsum.photos/seed/person3/400/400',
    bio: 'Emily is the heart of our community, onboarding and supporting the amazing people who give their time to our cause.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, imageUrl: 'https://picsum.photos/seed/gallery1/600/400', caption: 'Members organizing supplies for a community event.', type: 'image' },
  { id: 2, imageUrl: 'https://picsum.photos/seed/gallery2/600/400', caption: 'A happy child at one of our outreach programs.', type: 'image' },
  { id: 3, imageUrl: 'https://picsum.photos/seed/gallery3/600/400', caption: 'Our team at the annual community gathering.', type: 'image' },
  { id: 4, imageUrl: 'https://picsum.photos/seed/gallery4/600/400', caption: 'Fresh produce being distributed to families.', type: 'image' },
  { id: 5, imageUrl: 'https://picsum.photos/seed/gallery5/600/400', caption: 'A member delivering care packages.', type: 'image' },
  { id: 6, imageUrl: 'https://picsum.photos/seed/gallery6/600/400', caption: 'Community members coming together to help.', type: 'image' },
];

export const IMPACT_STATS: Stat[] = [
    { value: '1,000+', label: 'Families Helped' },
    { value: '500+', label: 'Community Members' },
    { value: '50+', label: 'Events Organized' },
    { value: '2,000+', label: 'Lives Touched' },
];
