import style from './style.module.css';

import { ContactItems, MainBackground, PageTitle } from 'components';

import infoImg from 'assets/info.png'
import supportImg from 'assets/support.png'
import salesImg from 'assets/sales.png'

function ContactUs() {
  const contacts = [
    {
      img: infoImg,
      name: "Contact Us",
      numbers: ["+2 02 24518678", "+2 01012538320"],
      email: "info@polygon-nc.com"
    },
    {
      img: supportImg,
      name: "Support",
      numbers: ["+2 01012194689"],
      email: "support@polygon-nc.com"
    },
    {
      img: salesImg,
      name: "Sales",
      numbers: ["+2 01012538320"],
      email: "sales@polygon-nc.com"
    }
  ]

	return (
		<div className={style.container}>
      <MainBackground/>
      
      <PageTitle text='Contact Us'/>
      <ContactItems contacts={contacts}/>
		</div>
	);
}

export default ContactUs;
