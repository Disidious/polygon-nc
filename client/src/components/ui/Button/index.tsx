import type { MouseEventHandler, ReactNode } from 'react';
import { Link } from 'react-router';

import Icon, { type IconName } from '@/components/ui/Icon';
import { cx } from '@/utils/cx';
import style from './style.module.css';

type Props = {
  children: ReactNode;
  /** navy (default), light (light blue on navy), ghost (outline on navy), outline (navy outline on white). */
  variant?: 'navy' | 'light' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  /** Full width. */
  block?: boolean;
  icon?: IconName;
  className?: string;
  /** In-app route: renders a router Link. */
  to?: string;
  /** External URL: opens in a new tab. */
  href?: string;
  type?: 'button' | 'submit';
  onClick?: MouseEventHandler<HTMLElement>;
  disabled?: boolean;
  /** Shows a spinner and blocks clicks. */
  loading?: boolean;
};

function Button({ children, variant = 'navy', size = 'md', block, icon, className, to, href, type = 'button', onClick, disabled, loading }: Props) {
  const classes = cx(style.btn, style[variant], style[size], block && style.block, loading && style.loading, className);
  const content = (
    <>
      {loading ? <span className={style.spinner} aria-hidden="true" /> : icon && <Icon name={icon} size={size === 'lg' ? 20 : 16} />}
      {children}
    </>
  );

  if (to) {
    return <Link to={to} className={classes} onClick={onClick}>{content}</Link>;
  }
  if (href) {
    return <a href={href} className={classes} onClick={onClick} target="_blank" rel="noopener noreferrer">{content}</a>;
  }
  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled || loading} aria-busy={loading || undefined}>
      {content}
    </button>
  );
}

export default Button;
