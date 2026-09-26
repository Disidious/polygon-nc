import type { ReactNode } from 'react';

import { cx } from '@/utils/cx';
import style from './style.module.css';

type Props = {
  children: ReactNode;
  /** Pale-blue background band. */
  tone?: 'white' | 'mist';
  className?: string;
  innerClassName?: string;
};

/** A full-width page section with the standard side gutter and vertical spacing. */
function Section({ children, tone = 'white', className, innerClassName }: Props) {
  return (
    <section className={cx(style.section, tone === 'mist' && style.mist, className)}>
      <div className={cx(style.inner, innerClassName)}>{children}</div>
    </section>
  );
}

export default Section;
