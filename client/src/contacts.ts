import infoImg from 'assets/info.png';
import supportImg from 'assets/support.png';
import salesImg from 'assets/sales.png';

export type Contact = {
  icon: string;
  title: string;
  numbers: string[];
  email: string;
}

export const contacts: Contact[] = [
  {
    icon: infoImg,
    title: "Contact Us",
    numbers: [
      "+20224518678",
      "+201012538320",
    ],
    email: "info@polygon-nc.com"
  },
  {
    icon: supportImg,
    title: "Support",
    numbers: [
      "+201012194689",
    ],
    email: "support@polygon-nc.com"
  },
  {
    icon: salesImg,
    title: "Sales",
    numbers: [
      "+201012538320",
    ],
    email: "sales@polygon-nc.com"
  }
]

export const location = {
  address: "53 El-Makrizy St., Heliopolis, Cairo, Egypt.",
  gmapsURL: "https://goo.gl/maps/2oP9ncYfjBWGfW7M9"
}