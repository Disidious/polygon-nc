import { ClickAwayListener } from '@material-ui/core';
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
            <ClickAwayListener onClickAway={() => changeState(true)}>
              <div className="dropdown-btn">
                <button onClick={changeState}>Services</button>
                <div id="dropdown" className={classo}>
                  <div className="dropdown-content">
                    <Link to="/services/networking" onClick={changeState}>Networking</Link>
                    <Link to="/services/cctv" onClick={changeState}>CCTV</Link>
                    <Link to="/services/accesscontrol" onClick={changeState}>Access Control</Link>
                    <Link to="/services/datashow" onClick={changeState}>Data Show</Link>
                  </div>
                </div>
              </div>
            </ClickAwayListener>
          </li>
          {/*<li><Link to="/aboutus">About Us</Link></li>*/}
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/clients">Clients</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
