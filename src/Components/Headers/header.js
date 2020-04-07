import React from 'react';
import {
  Link
} from 'react-router-dom';

function Header() {
  return (
    <div id="header-wrapper">
      <div id="header">
        <div id="logo">
          <img src="/images/Logo.png" height="100" align="middle" alt="" />
        </div>
      </div>
      <div id="menu">
        <ul>
          <li><Link to="/">Homepage</Link></li>
          <li>
            <div class="dropdown-btn">
              <a>Services</a>
              <div class="dropdown">
                <div class="dropdown-content">
                  <Link to="/Services/Networking">Networking</Link>
                  <Link to="/Services/CCTV">CCTV</Link>
                  <Link to="/Services/AccessControl">Access Control</Link>
                  <Link to="/Services/DataShow">Data Show</Link>
                </div>
              </div>
            </div>
          </li>
          <li><Link to="/AboutUs">About Us</Link></li>
          <li><Link to="/ContactUs">Contact Us</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
