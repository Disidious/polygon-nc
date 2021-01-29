import React from 'react';
import {
  Link
} from 'react-router-dom';

function Footer() {
  const [dateo, setDate] = React.useState(new Date().getFullYear());
  return (
    <footer id="footer">
      <div id="page" className="container" style={{ padding: "0", paddingTop: "1em" }}>
        <div id="header" style={{ padding: "0em 0em 8em 0em" }}>
          <div id="logo">
            <img src="/images/FooterLogo.png" height="100" align="middle" alt="" />
          </div>
        </div>

        <div className="row">
          <div id="footerServices" className="col-lg-3">
            <h2 style={{ left: "0px" }}>
              Services
            </h2>
            <ul>
              <li><Link to="/Services/Networking">Networking</Link></li>
              <li><Link to="/Services/CCTV">CCTV</Link></li>
              <li><Link to="/Services/AccessControl">Access Control</Link></li>
              <li><Link to="/Services/DataShow">Data Show</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-4">
            <h2 style={{ left: "0px" }}>
              Contact Us
            </h2>
            <ul>
              <i className="material-icons md-18">email</i>
              <p>info@polygon-nc.com</p>

              <i className="material-icons md-18">phone</i>
              <p>0101 253 8320 /<br/> 0122 295 7402</p>

              <i className="material-icons md-18">location_on</i>
              <p>53 El-Makrizy St., Heliopolis, <br />Cairo, Egypt.</p>
            </ul>
          </div>

          <div className="col-lg-3 col-4">
            <h2 style={{ left: "0px" }}>
              Support
            </h2>
            <ul>
              <i className="material-icons md-18">email</i>
              <p>support@polygon-nc.com</p>
              <i className="material-icons md-18">phone</i>
              <p>0106 284 7774</p>
            </ul>
          </div>

          <div className="col-lg-3 col-4">
            <h2 style={{ left: "0px" }}>
              Sales
            </h2>
            <ul>
              <i className="material-icons md-18">email</i>
              <p>sales@polygon-nc.com</p>
              <i className="material-icons md-18">phone</i>
              <p>0101 253 8320</p>
            </ul>
          </div>
        </div>
        <hr id="footer-hr" />
        <p style={{ marginBottom: "20px" }}>Copyright &copy; <span id="year">{dateo}</span> Polygon Network Company</p>
      </div>
    </footer >
  );
}

export default Footer;
