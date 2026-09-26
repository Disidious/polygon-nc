import wadi from '@/assets/clients/wadi.jpg';
import raya from '@/assets/clients/raya.jpg';
import egypro from '@/assets/clients/egypro.jpg';
import myahelshorb from '@/assets/clients/myahelshorb.jpeg';
import darelefta from '@/assets/clients/darelefta.jpeg';
import orman from '@/assets/clients/orman.png';
import ministryoftourism from '@/assets/clients/ministryoftourism.jpeg';
import etisalat from '@/assets/clients/etisalat.png';
import rekaba from '@/assets/clients/rekaba.jpeg';
import goodlife from '@/assets/clients/goodlife.png';
import trainsector from '@/assets/clients/trainsector.jpg';
import althuraya from '@/assets/clients/althuraya.jfif';
import lc from '@/assets/clients/lc.png';
import seedstars from '@/assets/clients/seedstars.png';
import dorrah from '@/assets/clients/dorrah.png';
import primaplast from '@/assets/clients/primaplast.png';
import college from '@/assets/clients/college.png';
import wallstreet from '@/assets/clients/wallstreet.jpg';
import coffeeshop from '@/assets/clients/coffeeshop.jpg';
import topbusiness from '@/assets/clients/topbusiness.jpg';
import lifetogether from '@/assets/clients/lifetogether.jpg';
import culture from '@/assets/clients/culture.jpg';
import pyramidswalk from '@/assets/clients/pyramidswalk.png';
import coptic from '@/assets/clients/coptic.jpg';

export type Client = {
  name: string;
  logo: string;
};

export const clients: Client[] = [
  { name: 'Wadi Degla', logo: wadi },
  { name: 'Raya', logo: raya },
  { name: 'Egypro', logo: egypro },
  { name: 'Dakahlia Water and Sanitation Company', logo: myahelshorb },
  { name: 'Dar Al Ifta', logo: darelefta },
  { name: 'Shefa Al-Orman Hospital (Luxor)', logo: orman },
  { name: 'Ministry of Tourism & Antiquities', logo: ministryoftourism },
  { name: 'Etisalat', logo: etisalat },
  { name: 'Administrative Control Authority', logo: rekaba },
  { name: 'Good Life', logo: goodlife },
  { name: 'El Entag El Harby', logo: trainsector },
  { name: 'Al Thuraya Holdings', logo: althuraya },
  { name: 'Lufthansa Cargo', logo: lc },
  { name: 'Seedstars', logo: seedstars },
  { name: 'Dorrah Hospital', logo: dorrah },
  { name: 'Prima Plast', logo: primaplast },
  { name: 'New Ramses College', logo: college },
  { name: 'Wallstreet Securities Brokerage', logo: wallstreet },
  { name: 'Coffeeshop Company', logo: coffeeshop },
  { name: 'Top Business for Human Resource', logo: topbusiness },
  { name: 'Life Together', logo: lifetogether },
  { name: 'Culture and Education Foundation', logo: culture },
  { name: 'Pyramids Walk', logo: pyramidswalk },
  { name: 'Coptic Cathedral', logo: coptic },
];
