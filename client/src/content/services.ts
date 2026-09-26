import cctvHeader from '@/assets/cctv2.jpg';
import hdCamera from '@/assets/hdcamera.jpg';
import ipCamera from '@/assets/ipcamera.jpg';
import hdIcon from '@/assets/hd.png';
import electronicsIcon from '@/assets/electronics.png';
import nightIcon from '@/assets/night.png';
import wirelessIcon from '@/assets/wireless.png';
import ptzIcon from '@/assets/ptz.png';
import motionIcon from '@/assets/motion.png';

import accessControlHeader from '@/assets/access-control2.jpg';
import biometric from '@/assets/biometric.webp';
import cards from '@/assets/access-control.jpg';
import standaloneIcon from '@/assets/standalone.png';
import centralizedIcon from '@/assets/centralized.png';

import datashowHeader from '@/assets/datashow2.webp';
import shortThrow from '@/assets/short-throw.jpg';
import interactive from '@/assets/interactive.jpg';
import videoWall from '@/assets/videowall.jpg';

export type ServiceHeaderContent = {
  title: string;
  description: string;
  image: string;
  /** CSS background-position for the photo. */
  imagePosition: string;
};

export type PosterContent = {
  title: string;
  description: string;
  image: string;
  imagePosition?: string;
};

export type FeatureContent = {
  title: string;
  description: string;
  /** White line icon shown on the navy hexagon. */
  icon: string;
};

export const cctv = {
  header: {
    title: 'CCTV',
    description:
      "Our professional business CCTV systems provide ultimate protection with state-of-the-art High Definition cameras featuring infrared capability. Day or night, you'll get high-resolution details and accurate imaging, ensuring reliable surveillance for peace of mind. Trust our cutting-edge solutions to handle your security needs, allowing you to focus on what matters most.",
    image: cctvHeader,
    imagePosition: '100% 30%',
  } satisfies ServiceHeaderContent,
  postersTitle: 'Technologies',
  featuresTitle: 'Features',
  posters: [
    {
      title: 'HD Cameras',
      description:
        'HD Cameras are much simpler to install, cost effective, allow you to use longer cable runs up to 500 meters without loss of quality and resolution can reach up to 4k. HD Cameras are available with fixed or varifocal lenses in dome or bullet housings.',
      image: hdCamera,
    },
    {
      title: 'IP Cameras',
      description:
        'IP Cameras allow you to see the finest details with high resolution and accurate imaging, IP Cameras also come with several features and technologies, including power over Ethernet, Wi-Fi, and others, which means you can use wireless or you can use as few cables as possible.',
      image: ipCamera,
    },
  ] satisfies PosterContent[],
  features: [
    {
      title: 'High Resolution',
      description:
        'Cameras capture High definition and accurate imaging videos with high resolution up to 4k and with the ability to record up to 30fps. The range of HD cameras continues to expand to adapt to all application requirements.',
      icon: hdIcon,
    },
    {
      // Text restored from the 2021 page (git commit 1e67d06); the 2023 redesign had pasted the Night Vision text here.
      title: 'Remote Access',
      description:
        'Monitor your cameras remotely from anywhere with any device (Smart Phones, Laptops, etc.) that has an internet connection. The mobile application is available for iOS devices and for Android devices with P2P discovery.',
      icon: electronicsIcon,
    },
    {
      title: 'Night Vision',
      description:
        'Cameras use Starlight Technology which enables the camera to display and record coloured videos in low light and no light. Starlight Sensors provide clear images regardless of the lighting conditions during any time of the day.',
      icon: nightIcon,
    },
    {
      // Title restored from the 2021 page (git commit 1e67d06).
      title: 'Wireless',
      description:
        'Wireless cameras are very flexible since they give you the ability to place them in any location that you desire without worrying about connecting them to an outlet or moving them from a location to another without dealing with any wires.',
      icon: wirelessIcon,
    },
    {
      title: 'Pan Tilt Zoom (PTZ)',
      description:
        'PTZ cameras can be controlled remotely, it can pan horizontally (360°) and tilt vertically, also it can zoom in and enhance the image quality without pixelation. PTZ allows to monitor large areas with a single camera with great quality.',
      icon: ptzIcon,
    },
    {
      title: 'Motion Detection',
      description:
        'Motion Detection can greatly make your surveillance better as it has the ability to detect motion, capture the events and send notifications (Email, SMS), also it saves storage space and a lot of time as it only records when motion is detected.',
      icon: motionIcon,
    },
  ] satisfies FeatureContent[],
};

export const accessControl = {
  header: {
    title: 'Access Control',
    description:
      'Protect your business with our advanced Access Control Solutions. These integrated security technologies ensure controlled access to computing resources, enhancing operational efficiency. Tailored for any facility size, our full-featured solutions offer robust protection and peace of mind, allowing you to focus on core operations confidently.',
    image: accessControlHeader,
    imagePosition: 'left',
  } satisfies ServiceHeaderContent,
  postersTitle: 'Types of Authentication',
  posters: [
    {
      title: 'Biometric Authentication',
      description:
        'Protect your facility with our Biometric Access Control Systems that use sophisticated biometrics identification scanners and door locks to recognize fingerprints, irises, or faces instead of cards. The Access Control System not only permits entry but also gives the data regarding the entry of persons.',
      image: biometric,
    },
    {
      title: 'Cards',
      description:
        'Protect your property with our range of different readers for cards and ID badges, each suitable for a different purpose. For opening doors and other access control applications, both proximity cards and MIFARE ® product technology readers are suitable.',
      image: cards,
    },
  ] satisfies PosterContent[],
  featuresTitle: 'Types of Access Control',
  features: [
    {
      title: 'Standalone Access Control',
      description:
        'Standalone access control refers to a self-contained security system that operates independently without relying on a centralized network or server. It provides a simple and efficient way to control access to specific areas or resources within a facility.',
      icon: standaloneIcon,
    },
    {
      title: 'Centralized Access Control',
      description:
        'Centralized access control refers to a security system where all access control decisions and data management are handled from a central server. This system consolidates the control and monitoring of access across multiple entry points within a facility.',
      icon: centralizedIcon,
    },
  ] satisfies FeatureContent[],
};

export const dataShow = {
  header: {
    title: 'Data Show',
    description:
      'We specialize in high-quality projector and display solutions, meeting the highest standards of brightness, resolution, and contrast. From small meeting rooms to large auditoriums, we have the perfect solution for you. Count on our expert team for a seamless and impressive viewing experience at your intended place of projection.',
    image: datashowHeader,
    imagePosition: '100% 70%',
  } satisfies ServiceHeaderContent,
  postersTitle: 'Projector Solutions',
  posters: [
    {
      title: 'Short Throw and Ultra Short Throw',
      description:
        'Discover our (Ultra) Short Throw Projector Solutions, mounted inches away from the wall to prevent shadows, allowing free movement for presenters and listeners. Enjoy clean, crisp viewing with robust networking capability.',
      image: shortThrow,
      imagePosition: '50% 70%',
    },
    {
      title: 'Interactive Projectors',
      description:
        'Unlock the full potential of presentations with our (Ultra) Short Throw Interactive Projector Solutions. Easily draw, zoom, and rotate using your finger or an IR pen, fostering an engaging environment for any event or purpose.',
      image: interactive,
    },
  ] satisfies PosterContent[],
  // One title only: the old separate "Video Wall Solution" section title was dropped (approved).
  videoWall: {
    title: 'Video Wall Solution',
    description:
      'Discover top-quality video wall display solutions tailored to your needs. With a diverse portfolio of technologies, sizes, and resolutions, we have the perfect fit for your application. Our dedicated tools and professional resources ensure optimal performance for an immersive visual experience.',
    image: videoWall,
  },
};
