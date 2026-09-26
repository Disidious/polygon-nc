import type { IconName } from '@/components/ui/Icon';

export type Contact = {
  icon: IconName;
  title: string;
  /** Stored without spaces (used for tel: links); shown with formatPhone(). */
  numbers: string[];
  email: string;
};

export const contacts: Contact[] = [
  { icon: 'info', title: 'Contact Us', numbers: ['+20224518678', '+201012538320'], email: 'info@polygon-nc.com' },
  { icon: 'headset', title: 'Support', numbers: ['+201012194689'], email: 'support@polygon-nc.com' },
  { icon: 'tag', title: 'Sales', numbers: ['+201012538320'], email: 'sales@polygon-nc.com' },
];

export const location = {
  address: '53 El-Makrizy St., Heliopolis, Cairo, Egypt.',
  gmapsURL: 'https://goo.gl/maps/2oP9ncYfjBWGfW7M9',
  /** Centred on the "Polygon Network Company" listing that gmapsURL opens. */
  mapEmbedURL: 'https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s30.0909717,31.3078025!6i16',
};

/** "+20224518678" -> "+20 2 2451 8678", "+201012538320" -> "+20 101 253 8320". Other formats are returned as they are. */
export function formatPhone(number: string): string {
  const digits = number.replace(/\D/g, '');
  if (!digits.startsWith('20')) return number;
  const rest = digits.slice(2);
  if (rest.startsWith('2') && rest.length === 9) return `+20 2 ${rest.slice(1, 5)} ${rest.slice(5)}`;
  if (rest.startsWith('1') && rest.length === 10) return `+20 ${rest.slice(0, 3)} ${rest.slice(3, 6)} ${rest.slice(6)}`;
  return number;
}
