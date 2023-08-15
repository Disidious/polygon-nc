import { useEffect, useRef, useState } from 'react';
import {
	Link,
  useNavigate
} from 'react-router-dom';
import Hamburger from 'hamburger-react'

import style from './style.module.css';

import logo from 'assets/logo.png'

type Element = {
  title: string;
  path?: string;
  menuItems?: Element[];
}

function Header() {
  const [menuToggled, setMenuToggled] = useState(false);
  const navigate = useNavigate(); 

  const menuRef = useRef<HTMLDivElement>(null)
  const hamRef = useRef<HTMLDivElement>(null)

  const elements: Element[] = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "Shop",
      path: "/shop"
    },
    {
      title: "Services",
      menuItems: [
        {
          title: "Networking",
          path: "/services/networking"
        },
        {
          title: "CCTV",
          path: "/services/cctv"
        },
        {
          title: "Access Control",
          path: "/services/accesscontrol"
        },
        {
          title: "Data Show",
          path: "/services/datashow"
        }
      ]
    },
    {
      title: "Projects",
      path: "/projects"
    },
    {
      title: "Clients",
      path: "/clients"
    },
    {
      title: "Contact Us",
      path: "/contactus"
    }
  ]

  const currPath = window.location.pathname

  const renderBarItem = (el: Element, key: number) => {
    if (!el.path && el.menuItems) {
      return (
        <div className={style.dropdown} key={key}>
          <a className={style.dropbtn}>{el.title}</a>
          <div className={style.dropdownContent}>
            {el.menuItems.map((el, idx) => renderBarItem(el, idx))}
          </div>
        </div>
      )
    }

    const isActive = currPath === el.path
    return (
      <Link className={isActive ? style.active : undefined} to={el.path!} key={key}>{el.title}</Link>
    )
  }

  const routeChange = () =>{ 
    let path = '/'; 
    navigate(path);
  }

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

  return (
    <div className={style.header}>
      <div className={style.backgroundImg}/>
      <img className={style.logo} src={logo} onClick={routeChange}/>
      <div className={style.hamburger} ref={hamRef}>
        <Hamburger size={25} toggled={menuToggled} onToggle={toggled => setMenuToggled(toggled)} color='var(--dark)'/>
      </div>
      <div className={`${style.menu} ${!menuToggled ? style.hidden : ""}`} onClick={() => setMenuToggled(false)} ref={menuRef}>
        {elements.map((el, idx) => renderBarItem(el, idx))}
      </div>
    </div>
  );
}

export default Header;
