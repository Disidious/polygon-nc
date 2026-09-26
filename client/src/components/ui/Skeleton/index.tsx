import type { CSSProperties } from 'react';

import { cx } from '@/utils/cx';
import style from './style.module.css';

type Props = {
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  radius?: CSSProperties['borderRadius'];
  className?: string;
};

/** A shimmering placeholder block shown while data loads. */
function Skeleton({ width, height, radius, className }: Props) {
  return <span className={cx(style.skeleton, className)} style={{ width, height, borderRadius: radius }} aria-hidden="true" />;
}

export default Skeleton;
