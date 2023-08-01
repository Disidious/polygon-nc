import {
	Link
} from 'react-router-dom';
import style from './style.module.css';

import footerLogo from 'assets/logo-white.png'

function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.footerContainer}>
        <img src={footerLogo}/>
        <div className={style.footerContentContainer}>
          <div className={style.footerContent}>
            <h1>
              Services
            </h1>
            <Link to={'services/networking'}>
              Networking
            </Link>
            <br/>
            <Link to={'services/cctv'}>
              CCTV
            </Link>
            <br/>
            <Link to={'services/accesscontrol'}>
              Access Control
            </Link>
            <br/>
            <Link to={'services/datashow'}>
              Data Show
            </Link>
          </div>

          <div className={style.footerContent}>
            <h1>
              Contact Us
            </h1>
            <a href="mailto:info@polygon-nc.com">info@polygon-nc.com</a>
            <br/>
            <a href="tel:+2 02 24518678">+2 02 24518678</a>
            <br/>
            <a href="tel:+2 01012538320">+2 01012538320</a>
            <br/>
            <a href="https://goo.gl/maps/2oP9ncYfjBWGfW7M9">
              53 El-Makrizy St., Heliopolis,
              Cairo, Egypt.
            </a>
          </div>

          <div className={style.footerContent}>
            <h1>
              Support
            </h1>
            <a href="mailto:support@polygon-nc.com">support@polygon-nc.com</a>
            <br/>
            <a href="tel:+2 01012194689">+2 01012194689</a>
            <br/>
          </div>

          <div className={style.footerContent}>
            <h1>
              Sales
            </h1>
            <a href="mailto:sales@polygon-nc.com">sales@polygon-nc.com</a>
            <br/>
            <a href="tel:+2 01012538320">+2 01012538320</a>
          </div>
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
