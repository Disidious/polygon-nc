import style from './style.module.css';

import { ContactItems, PageTitle } from 'components';
import { contacts } from 'contacts';

function ContactUs() {
	return (
		<div className={style.container}>
      <PageTitle text='Contact Us'/>
      <ContactItems contacts={contacts}/>
		</div>
	);
}

export default ContactUs;
