import {
	Link, useNavigate
} from 'react-router-dom';
import style from './style.module.css';

import { contacts, location } from 'contacts';

import footerLogo from 'assets/logo-white.png'
import addressImg from 'assets/address.png'

type Link = {
  title: string;
  url: string;
}

type Content = {
  title: string;
  icon?: string;
  links: Link[];
}

function Footer() {
  const navigate = useNavigate(); 

  const routeChange = () =>{ 
    let path = '/'; 
    navigate(path);
  }

  const renderTitleIcon = (icon: string) => (
    <div className={style.titleIcon} style={{
      mask: `url(${icon}) center/contain no-repeat`,
      WebkitMask: `url(${icon}) center/contain no-repeat`
    }} />
  )
  
  const renderContent = (content: Content, key: number | undefined = undefined) => (
    <div className={style.footerContent} key={key}>
      {
        content.icon 
        ? 
        <div className={style.titleContainer}>
          {renderTitleIcon(content.icon)}
          <h1>
            {content.title}
          </h1>
        </div>
        :
        <h1>
          {content.title}
        </h1>
      }
      {
        content.links.map((link, idx) => (
          <Link to={`${link.url}`} key={idx}>{link.title}</Link>
        ))
      }
    </div>
  )
  
  const renderContacts = () => {
    const contactsFormatted: Content[] = contacts.map((contact) => {
      const emailLink = {
        title: contact.email,
        url: `mailto:${contact.email}`
      }
      const links: Link[] = [emailLink].concat(contact.numbers.map((num) => {
        return {
          title: num,
          url: `tel:${num}"`
        }
      }))

      return {
        title: contact.title,
        icon: contact.icon,
        links: links
      }
    })

    return (
      <>
        {contactsFormatted.map((contact, idx) => renderContent(contact, idx))}
      </>
    )
  }

  return (
    <div className={style.footer}>
      <div className={style.footerContainer}>
        <img className={style.footerLogo} src={footerLogo} onClick={routeChange}/>
        <div className={style.footerContentContainer}>
          {renderContent({
            title: "Services",
            links: [
              {
                title: "Networking",
                url: "/services/networking"
              },
              {
                title: "CCTV",
                url: "/services/cctv"
              },
              {
                title: "Access Control",
                url: "/services/accesscontrol"
              },
              {
                title: "Data Show",
                url: "/services/datashow"
              }
            ]
          })}
          
          {renderContacts()}

          {renderContent({
            title: "Address",
            icon: addressImg,
            links: [
              {
                title: location.address,
                url: location.gmapsURL
              }
            ]
          })}
        </div>
        <div className={style.divider}/>
        <p>
          Copyright © 2023 Polygon Network Company
        </p>
      </div>
    </div>
  );
}

export default Footer;
