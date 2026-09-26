import headerImage from '@/assets/datacenter2.avif';

import fiber from '@/assets/fiber.png';
import mpo from '@/assets/mpo.jpeg';
import singleMode from '@/assets/singlemode.jpeg';
import multiMode from '@/assets/multimode.jpeg';
import copper from '@/assets/copper.png';
import utp from '@/assets/utp.jpeg';
import stp from '@/assets/stp.jpeg';
import rack from '@/assets/rack.png';
import indoor from '@/assets/indoor.jpeg';
import outdoor from '@/assets/outdoor.jpeg';
import overhead from '@/assets/overhead.png';
import port from '@/assets/port.png';
import preloaded from '@/assets/preloaded.jpeg';
import modular from '@/assets/modular.jpeg';
import faceplate from '@/assets/faceplate.png';
import internal from '@/assets/internal.jpeg';
import external from '@/assets/external.jpeg';
import floorBox from '@/assets/floorbox.jpeg';
import wyrGrid from '@/assets/wyrgrid.jpg';
import wireBasket from '@/assets/wirebasket.jpeg';
import fiberRunner from '@/assets/fiberrunner.jpg';

import type { ServiceHeaderContent } from './services';

export type HoneycombGroup = {
  title: string;
  text: string;
  /** Navy line icon (image) for the main hexagon, or "cable-tray" for the SVG icon. */
  icon: string;
  items: { image: string; label: string }[];
  /** Mirrored honeycomb, as on the original page. */
  mirrored?: boolean;
};

export const networking = {
  header: {
    title: 'Networking',
    description:
      "We provide the optimum LAN and WAN network solution from single connectivity to multi-point to meet your current and future needs. We can plan, design and execute the structured cabling system for your company that will be secure, robust and scalable to reach the peak level of productivity and performance. If you're thinking about rewiring or reconfiguring your current network setup, it's all right within our wheelhouse.",
    image: headerImage,
    imagePosition: 'right',
  } satisfies ServiceHeaderContent,
  groupsTitle: 'Structured Cabling System',
  groups: [
    {
      title: 'Fiber Cables',
      text: 'Fiber optic cables carry data at very high speeds over long distances, with no electrical interference. MPO trunk cables handle high-density links inside data centers, single mode fiber covers long runs between floors and buildings, and multi mode fiber suits shorter links within a building. We also handle fiber fusion splicing and testing.',
      icon: fiber,
      items: [{ image: mpo, label: 'MPO' }, { image: singleMode, label: 'Single Mode' }, { image: multiMode, label: 'Multi Mode' }],
    },
    {
      title: 'Copper Cables',
      text: 'Twisted-pair copper cables connect the computers, phones, IP cameras and access points across your offices. UTP (unshielded) cables suit most office networks, while STP (shielded) cables protect the signal in areas with electrical noise, such as near machinery or power lines.',
      icon: copper,
      items: [{ image: utp, label: 'UTP' }, { image: stp, label: 'STP' }],
      mirrored: true,
    },
    {
      title: 'Racks',
      text: 'Racks keep your network equipment organized, ventilated and locked. We supply indoor racks for server rooms and offices, outdoor cabinets that protect equipment from weather and dust, and overhead racks that hang above other equipment to save floor space.',
      icon: rack,
      items: [{ image: indoor, label: 'Indoor' }, { image: outdoor, label: 'Outdoor' }, { image: overhead, label: 'Overhead' }],
    },
    {
      title: 'Patch Panels',
      text: 'Patch panels are where all your network cables meet, making it easy to connect, move and label every port. Pre-loaded panels come with the jacks already installed for a quick setup, while modular panels let you pick the connector for each port and change it later as your network grows.',
      icon: port,
      items: [{ image: preloaded, label: 'Pre-loaded' }, { image: modular, label: 'Modular' }],
      mirrored: true,
    },
    {
      title: 'Faceplates',
      text: "Faceplates are the network outlets your devices plug into. Internal faceplates sit flush inside the wall, external ones mount on the wall surface where cables can't run inside it, and floor boxes bring connections to desks in open offices and meeting rooms.",
      icon: faceplate,
      items: [{ image: internal, label: 'Internal' }, { image: external, label: 'External' }, { image: floorBox, label: 'Floor Box' }],
    },
    {
      title: 'Cable Trays',
      text: 'Cable trays carry and protect your cables along ceilings, under raised floors and through data centers, and keep them easy to reach for future changes. Wyr-Grid and wire basket trays hold copper cable runs, while Fiber Runner channels guide fiber cables and protect them from sharp bends.',
      icon: 'cable-tray',
      items: [{ image: wyrGrid, label: 'Wyr-Grid' }, { image: wireBasket, label: 'Wire Basket' }, { image: fiberRunner, label: 'Fiber Runner' }],
      mirrored: true,
    },
  ] satisfies HoneycombGroup[],
};
