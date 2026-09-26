import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router';

import Icon from '@/components/ui/Icon';
import { headerLinks, isServicePath, serviceLinks } from '@/content/navigation';
import { cx } from '@/utils/cx';
import style from './style.module.css';

type Props = {
  open: boolean;
  onClose: () => void;
};

/** The hamburger menu below 900px: a panel under the header with a dimmed backdrop. */
function MobileMenu({ open, onClose }: Props) {
  const { pathname } = useLocation();
  const [servicesExpanded, setServicesExpanded] = useState(false);

  // Each time the menu opens, the Services group starts open on service pages.
  useEffect(() => {
    if (open) setServicesExpanded(isServicePath(pathname));
  }, [open, pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    const wide = window.matchMedia('(min-width: 901px)');
    const onWide = (event: MediaQueryListEvent) => {
      if (event.matches) onClose();
    };
    document.addEventListener('keydown', onKey);
    wide.addEventListener('change', onWide);
    return () => {
      document.removeEventListener('keydown', onKey);
      wide.removeEventListener('change', onWide);
    };
  }, [open, onClose]);

  const linkClass = ({ isActive }: { isActive: boolean }) => cx(style.item, isActive && style.on);

  return (
    <>
      <div className={cx(style.backdrop, open && style.visible)} onClick={onClose} aria-hidden="true" />
      <nav id="mobile-menu" className={cx(style.panel, open && style.visible)} aria-label="Menu" inert={!open}>
        {headerLinks.map((item) =>
          item === 'services' ? (
            <div key="services">
              <button
                type="button"
                className={cx(style.item, style.group, servicesExpanded && style.expanded)}
                aria-expanded={servicesExpanded}
                onClick={() => setServicesExpanded((value) => !value)}
              >
                Services <Icon name="chevronDown" size={22} />
              </button>
              <div className={cx(style.sub, servicesExpanded && style.expanded)}>
                <div>
                  {serviceLinks.map((link) => (
                    <NavLink key={link.to} to={link.to} className={({ isActive }) => cx(style.subItem, isActive && style.on)} onClick={onClose} tabIndex={servicesExpanded ? undefined : -1}>
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkClass} onClick={onClose}>
              {item.label}
            </NavLink>
          ),
        )}
      </nav>
    </>
  );
}

export default MobileMenu;
