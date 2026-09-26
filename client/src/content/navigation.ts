export type NavLinkItem = {
  label: string;
  to: string;
};

export const serviceLinks: NavLinkItem[] = [
  { label: 'Networking', to: '/services/networking' },
  { label: 'CCTV', to: '/services/cctv' },
  { label: 'Access Control', to: '/services/accesscontrol' },
  { label: 'Data Show', to: '/services/datashow' },
];

/** Header order. `services` marks where the Services menu goes. */
export const headerLinks: Array<NavLinkItem | 'services'> = [
  { label: 'Home', to: '/' },
  /* TODO: Uncomment when ready */
  // { label: 'Shop', to: '/shop' },
  'services',
  { label: 'Projects', to: '/projects' },
  { label: 'Clients', to: '/clients' },
  { label: 'Contact Us', to: '/contactus' },
];

export const companyLinks: NavLinkItem[] = [
  /* TODO: Uncomment when ready */
  // { label: 'Shop', to: '/shop' },
  { label: 'Projects', to: '/projects' },
  { label: 'Clients', to: '/clients' },
  { label: 'Contact Us', to: '/contactus' },
];

export const isServicePath = (pathname: string) => pathname.startsWith('/services/');
