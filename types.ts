
export interface NavLink {
  label: string;
  path: string;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

export interface GalleryItem {
  id: number;
  imageUrl: string;
  caption: string;
  type: 'image' | 'video';
}

export interface Stat {
  value: string;
  label: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// FIX: Add missing DonateFormData interface to resolve import error in pages/DonatePage.tsx.
export interface DonateFormData {
  name: string;
  contact: string;
  address: string;
  foodType: string;
  quantity: string;
  dateTime: string;
}

// FIX: Add missing VolunteerFormData interface to resolve import error in pages/VolunteerPage.tsx.
export interface VolunteerFormData {
  name: string;
  contact: string;
  location: string;
}
