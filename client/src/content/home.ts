import heroImage from '@/assets/home-header-background.webp';
import panduitLogo from '@/assets/PanduitWhite.png';
import datacenterImage from '@/assets/datacenter.jpg';
import cctvImage from '@/assets/hdcamera.jpg';
import accessControlImage from '@/assets/access-control.jpg';
import datashowImage from '@/assets/datashow2.webp';

export const hero = {
  image: heroImage,
  partnerLogo: panduitLogo,
  partnerText: 'Registered Certified Installer',
  title: ['We Are Polygon', 'Network Company'],
  description:
    'We are an IT Service Provider and a System Integrator Company offering special skills in designing, supplying and implementing fast and reliable IT Services including Network Solutions, Video System Surveillances, System security, and Display solutions.',
};

export type ServiceCard = {
  title: string;
  image: string;
  points: string[];
  to: string;
};

export const homeServices: ServiceCard[] = [
  { title: 'Networking', image: datacenterImage, points: ['Data Centers', 'Structure Cabling Systems', 'Network Infrastructure'], to: '/services/networking' },
  { title: 'CCTV', image: cctvImage, points: ['HD Systems', 'IP Systems', 'PTZ Cameras'], to: '/services/cctv' },
  { title: 'Access Control', image: accessControlImage, points: ['Centralized Access Control', 'Standalone Access Control', 'Biometric Authentication'], to: '/services/accesscontrol' },
  { title: 'Data Show', image: datashowImage, points: ['Projectors', 'Projector Screens', 'Large Format Display'], to: '/services/datashow' },
];
