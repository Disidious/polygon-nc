import Icon from '@/components/ui/Icon';
import { formatPhone, type Contact } from '@/content/contacts';
import style from './style.module.css';

function ContactCards({ contacts }: { contacts: Contact[] }) {
  return (
    <div className={style.list}>
      {contacts.map((contact) => (
        <div key={contact.title} className={style.card}>
          <div className={style.icon}><Icon name={contact.icon} size={40} /></div>
          <h2 className={style.title}>{contact.title}</h2>
          <div className={style.bar} />
          <div className={style.label}>Numbers</div>
          <div className={style.links}>
            {contact.numbers.map((number) => (
              <a key={number} className={style.link} href={`tel:${number}`}>
                <Icon name="phone" size={17} />
                {formatPhone(number)}
              </a>
            ))}
          </div>
          <div className={style.label}>Email</div>
          <div className={style.links}>
            <a className={style.link} href={`mailto:${contact.email}`}>
              <Icon name="email" size={17} />
              {contact.email}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactCards;
