
import type { NavLink, TeamMember, GalleryItem, Stat } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Shan',
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
  { 
    id: 1, 
    imageUrl: 'https://i.ibb.co/tMqsnhWt/Monan-sir-sponser-clothes.jpg', 
    caption: 'img 1', 
    type: 'image' 
  },    
  { id: 2, imageUrl: 'https://i.ibb.co/q3D7VPzX/IMG20231207134228.jpg', caption: 'img 2', type: 'image' },
  { id: 3, imageUrl: 'https://i.ibb.co/CKqKwyp3/IMG20231109190055.jpg', caption: 'img 3', type: 'image' },
  { id: 4, imageUrl: 'https://i.ibb.co/Q77bWB8G/IMG-20230907-WA0000.jpg', caption: 'img 4', type: 'image' },
  { id: 5, imageUrl: 'https://i.ibb.co/GmsVwVc/6-09-23.jpg', caption: 'img 5', type: 'image' },
  { id: 6, imageUrl: 'https://i.ibb.co/pv4B9VR7/june-month.jpg', caption: 'img 6', type: 'image' },
];

export const IMPACT_STATS: Stat[] = [
    { value: '150+', label: 'Families Helped' },
    { value: '100+', label: 'Community Members' },
    { value: '50+', label: 'Events Organized' },
    { value: '500+', label: 'Lives Touched' },
];
