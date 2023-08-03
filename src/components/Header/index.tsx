import {
	Link,
  useNavigate
} from 'react-router-dom';
import Hamburger from 'hamburger-react'

import logo from 'assets/logo.png'
import style from './style.module.css';
import { useEffect, useRef, useState } from 'react';

function Header() {
  const [menuToggled, setMenuToggled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null)
  const hamRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && !hamRef.current?.contains(event.target as Node)) {
        setMenuToggled(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => {
      document.removeEventListener("mousedown", handleClick)
    }
  })

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
  }

  return (
    <div className={style.header}>
      <div className={style.backgroundImg}/>
      <img className={style.logo} src={logo} onClick={routeChange}/>
      <div className={style.hamburger} ref={hamRef}>
        <Hamburger size={25} toggled={menuToggled} onToggle={toggled => setMenuToggled(toggled)} color='var(--dark)'/>
      </div>
      <div className={`${style.menu} ${!menuToggled ? style.hidden : ""}`} onClick={() => setMenuToggled(false)} ref={menuRef}>
        <Link to="/">Home</Link>
        <div className={style.dropdown}>
          <a className={style.dropbtn}>Services</a>
          <div className={style.dropdownContent}>
            <Link to="/services/networking">Networking</Link>
            <Link to="/services/cctv">CCTV</Link>
            <Link to="/services/accesscontrol">Access Control</Link>
            <Link to="/services/datashow">Data Show</Link>
          </div>
        </div>
        <Link to="/projects">Projects</Link>
        <Link to="/clients">Clients</Link>
        <Link to="/contactus">Contact Us</Link>
      </div>
    </div>
  );
}

export default Header;
