import { Link } from 'react-router';

import DotsAnimation from '@/components/layout/DotsAnimation';
import Button from '@/components/ui/Button';
import HexIcon from '@/components/ui/HexIcon';
import Icon from '@/components/ui/Icon';
import { contacts, formatPhone, location } from '@/content/contacts';
import { companyLinks, serviceLinks } from '@/content/navigation';
import logo from '@/assets/logo-white.png';
import style from './style.module.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={style.footer}>
      <DotsAnimation />
      <div className={style.inner}>
        <Link to="/" className={style.logoLink} aria-label="Polygon Network Company, home">
          <img className={style.logo} src={logo} alt="Polygon Network Company" />
        </Link>

        <div className={style.columns}>
          <div className={style.links}>
            <h2 className={style.title}>Services</h2>
            {serviceLinks.map((link) => <Link key={link.to} to={link.to}>{link.label}</Link>)}
          </div>

          <div className={style.links}>
            <h2 className={style.title}>Company</h2>
            {companyLinks.map((link) => <Link key={link.to} to={link.to}>{link.label}</Link>)}
          </div>

          <div>
            <h2 className={style.title}>Get in touch</h2>
            {contacts.map((contact) => (
              <div key={contact.title} className={style.contact}>
                <HexIcon icon={contact.icon} width={32} iconSize={16} tone="glass" />
                <div>
                  <h3 className={style.contactTitle}>{contact.title}</h3>
                  <a className={style.line} href={`mailto:${contact.email}`}>
                    <Icon name="email" size={13} />
                    {contact.email}
                  </a>
                  {contact.numbers.map((number) => (
                    <a key={number} className={style.line} href={`tel:${number}`}>
                      <Icon name="phone" size={13} />
                      {formatPhone(number)}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div>
            <h2 className={style.title}>Visit us</h2>
            <div className={style.address}>
              <HexIcon icon="pin" width={32} iconSize={16} tone="glass" />
              <span>{location.address}</span>
            </div>
            <Button variant="ghost" size="sm" icon="map" href={location.gmapsURL} className={style.mapButton}>
              Open in Google Maps
            </Button>
          </div>
        </div>

        <div className={style.bar}>
          <span>© {year} Polygon Network Company. All rights reserved.</span>
          <button type="button" className={style.top} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Icon name="arrowUp" size={13} />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
