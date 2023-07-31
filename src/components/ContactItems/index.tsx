import style from './style.module.css';

type Contact = {
  img: string;
  name: string;
  numbers: string[];
  email: string;
}

type Props = {
  contacts: Contact[];
}

function ContactItems(props: Props) {
  const { contacts } = props

  const renderItem = (contact: Contact, key: number) => (
    <div key={key} className={style.contactContent}>
      <img src={contact.img}/>
      <div className={style.contactText}>
        <h1>
          {contact.name}
        </h1>
        <h2>
          Numbers
        </h2>
        {contact.numbers.map((number, idx) => (
          <>
            <a key={idx} href={`tel:${number}`}>
              {number}
            </a>
            <br/>
          </>
        ))}
        
        <h2>
          Email
        </h2>
        <a href={`mailto:${contact.email}`}>
          {contact.email}
        </a>
      </div>
    </div>
  )

	return (
    <div className={style.contactContainer}>
      {contacts.map((contact, idx) => renderItem(contact, idx))}
    </div>
	);
}

export default ContactItems;
