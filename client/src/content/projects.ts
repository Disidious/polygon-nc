import aca from '@/assets/aca.jpg';
import dai from '@/assets/dai.jpg';
import eeeh from '@/assets/eeeh.png';
import sahl from '@/assets/sahl.png';
import etisalat from '@/assets/etisalat.jpg';
import mta from '@/assets/mta.jpg';
import cc from '@/assets/cc.jpg';
import pwc from '@/assets/pwc.jpg';

export type Project = {
  title: string;
  image: string;
  points: string[];
};

export const projectsSubtitle = 'Supplying, designing and installing';

export const projects: Project[] = [
  {
    title: 'Administrative Control Authority',
    image: aca,
    points: [
      'Structured cabling system for the data center at the new capital using MPO fiber cables interconnection.',
      'Structured cabling system for the data center at the new capital using SM fiber cables interconnection.',
      'Fiber fusion splicing and testing.',
      'Wyr-Grid and cable trays.',
    ],
  },
  {
    title: 'Dar Al Ifta',
    image: dai,
    points: [
      'Structured cabling system for the data center using UTP and fiber cables interconnection.',
      'Structured cabling systems for digital telephone system.',
      'Fiber fusion splicing and testing.',
      'Centralized access control system for the data center.',
      'IP system surveillance.',
    ],
  },
  {
    title: 'El Entag El Harby',
    image: eeeh,
    points: ['UTP network infrastructure for IP cameras.', 'Centralized access control system for the data center.', 'IP system surveillance.'],
  },
  {
    title: 'Shefa Al-Orman Hospital (Luxor)',
    image: sahl,
    points: [
      'Structured cabling system for the data center using fiber cables interconnection.',
      'Fiber fusion splicing and testing.',
      'IP system surveillance.',
      'Wyr-Grid and cable trays.',
    ],
  },
  {
    title: 'Etisalat',
    image: etisalat,
    points: ['Structured cabling system for call center at Mokatam branch.', 'Access Control System.'],
  },
  {
    title: 'Ministry of Tourism and Antiquities',
    image: mta,
    points: [
      'Data center migration.',
      'Backup and disaster recovery arrangement.',
      'Physical move of servers, hardware devices and applications.',
      'WAN and LAN configuration and testing.',
    ],
  },
  {
    title: 'Coptic Cathedral',
    image: cc,
    points: [
      'UTP network infrastructure for IP cameras at the Pope headquarters.',
      'Stand-alone access control system.',
      'IP system surveillance.',
      'Cable trays and pipes.',
    ],
  },
  {
    title: 'Pyramids Walk Compound',
    image: pwc,
    points: ['UTP and fiber network infrastructure.', 'Fiber fusion splicing and testing.', 'HD system surveillance.', 'Cable trays and pipes.'],
  },
];
