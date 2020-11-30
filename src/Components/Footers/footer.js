import React from 'react';
import {
  Link
} from 'react-router-dom';

function Footer() {
  return (
    <footer id="footer">
      <div class="container" style={{ padding: "1em 0em 0em 0em" }}>
        <div id="header" style={{ padding: "0em 0em 8em 0em" }}>
          <div id="logo">
            <img src="/images/FooterLogo.png" height="100" align="middle" alt="" />
          </div>
        </div>

        <div class="row">
          <div class="col-3">
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

          <div class="col-3">
            <h2 style={{ left: "0px" }}>
              Contact Us
            </h2>
            <i class="material-icons md-18">email</i> 
            <p>info@polygon-nc.com</p>

            <i class="material-icons md-18">phone</i> 
            <p>0101 253 8320</p>

            <i class="material-icons md-18">location_on</i> 
            <p>53 El-Makrizy St., Heliopolis, <br/>Cairo, Egypt.</p>
          </div>

          <div class="col-3">
            <h2 style={{ left: "0px" }}>
              Support
            </h2>
            <i class="material-icons md-18">email</i> 
            <p>support@polygon-nc.com</p>
            <i class="material-icons md-18">phone</i> 
            <p>0101 219 4689</p>
          </div>

          <div class="col-3">
            <h2 style={{ left: "0px" }}>
              Sales
            </h2>
            <i class="material-icons md-18">email</i> 
            <p>sales@polygon-nc.com</p>
            <i class="material-icons md-18">phone</i> 
            <p>/</p>
          </div>
        </div>
        <hr style={{ backgroundColor: "rgb(126, 126, 126)" }} />
        <p style={{ paddingTop: "7px" }}>Copyright &copy; <span id="year"></span> Polygon Network Company</p>
      </div>
    </footer >
  );
}

export default Footer;
