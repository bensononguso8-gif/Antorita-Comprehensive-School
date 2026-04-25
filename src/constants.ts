export interface NavItem {
  label: string;
  path: string;
}

export const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Academics', path: '/academics' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Staff', path: '/staff' },
  { label: 'Student Life', path: '/student-life' },
  { label: 'News', path: '/news' },
  { label: 'Contact', path: '/contact' },
];

export const schoolInfo = {
  name: 'Antorita Comprehensive School',
  motto: 'Excellence in Learning, Integrity in Life',
  email: 'info@antoritaschool.edu',
  phone: '+254 700 000 000',
  address: '123 Academic Drive, Nairobi, Kenya',
  social: {
    facebook: '#',
    twitter: '#',
    instagram: '#',
    linkedin: '#',
  },
};
