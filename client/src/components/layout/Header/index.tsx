import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';

/* TODO: Uncomment when ready */
// import { useCart } from '@/cart/useCart';
import Icon from '@/components/ui/Icon';
import MobileMenu from '@/components/layout/MobileMenu';
import { headerLinks, isServicePath, serviceLinks } from '@/content/navigation';
import { cx } from '@/utils/cx';
import logo from '@/assets/logo.png';
import style from './style.module.css';

const linkClass = ({ isActive }: { isActive: boolean }) => cx(style.link, isActive && style.on);

function Header() {
  const { pathname, search } = useLocation();
  /* TODO: Uncomment when ready */
  // const { count } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const onServicePage = isServicePath(pathname);

  // Any navigation closes the phone menu and the Services dropdown.
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname, search]);

  // The Services dropdown also closes on a click outside it or on Escape.
  useEffect(() => {
    if (!servicesOpen) return;
    const onPointer = (event: PointerEvent) => {
      if (!servicesRef.current?.contains(event.target as Node)) setServicesOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setServicesOpen(false);
    };
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [servicesOpen]);

  return (
    <header className={cx(style.header, menuOpen && style.menuOpen)}>
      <div className={style.inner}>
        <Link to="/" className={style.logoLink} aria-label="Polygon Network Company, home">
          <img className={style.logo} src={logo} alt="Polygon Network Company" />
        </Link>

        <nav className={style.links} aria-label="Main">
          {headerLinks.map((item) =>
            item === 'services' ? (
              <div key="services" ref={servicesRef} className={cx(style.services, servicesOpen && style.servicesOpen)}>
                <button
                  type="button"
                  className={cx(style.link, style.servicesButton, onServicePage && style.on)}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  onClick={() => setServicesOpen((open) => !open)}
                >
                  Services <Icon name="chevronDown" size={16} />
                </button>
                <div className={style.dropdown}>
                  <div className={style.dropdownBox}>
                    {serviceLinks.map((link) => (
                      <NavLink key={link.to} to={link.to} className={({ isActive }) => cx(style.dropdownLink, isActive && style.dropdownOn)}>
                        {link.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkClass}>
                {item.label}
              </NavLink>
            ),
          )}
        </nav>
        <div className={style.actions}>
          {/* TODO: Uncomment when ready */}
          {/* <Link to="/checkout" className={style.cart} aria-label={count ? `Cart, ${count} ${count === 1 ? 'product' : 'products'}` : 'Cart'}>
            <Icon name="cart" size={20} />
            {count > 0 && <span className={style.badge}>{count}</span>}
          </Link> */}
          <button
            type="button"
            className={style.burger}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}

export default Header;
