import React from 'react';
import {
  Link
} from 'react-router-dom';

function Header() {
  const [classo, setClasso] = React.useState('dropdown-hide');
  const changeState = function (flag) {
    if (flag === true)
      setClasso('dropdown-hide')
    else if (classo === 'dropdown-hide')
      setClasso('dropdown');
    else setClasso('dropdown-hide');
  }
  return (
    <div id="header-wrapper">
      <div id="page" className="container" style={{ padding: "0px" }}>
        <div id="header">
          <div id="logo">
            <img src="/images/Logo.png" height="100" align="middle" alt="" />
          </div>
        </div>
      </div>
      <div id="menu">
        <ul>
          <li><Link to="/" onClick={() => changeState(true)}>Homepage</Link></li>
          <li>
            <div className="dropdown-btn">
              <a onClick={changeState}>Services</a>
              <div id="dropdown" className={classo}>
                <div className="dropdown-content">
                  <Link to="/services/networking" className="choice" onClick={changeState}>Networking</Link>
                  <Link to="/services/cctv" className="choice" onClick={changeState}>CCTV</Link>
                  <Link to="/services/accesscontrol" className="choice" onClick={changeState}>Access Control</Link>
                  <Link to="/services/datashow" className="choice" onClick={changeState}>Data Show</Link>
                </div>
              </div>
            </div>
          </li>
          {/*<li><Link to="/aboutus">About Us</Link></li>*/}
          <li><Link to="/projects" onClick={() => changeState(true)}>Projects</Link></li>
          <li><Link to="/contactus" onClick={() => changeState(true)}>Contact Us</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
