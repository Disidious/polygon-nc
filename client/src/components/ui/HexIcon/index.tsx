import Icon, { type IconName } from '@/components/ui/Icon';
import { cx } from '@/utils/cx';
import style from './style.module.css';

type Props = {
  icon: IconName;
  /** Width in px; the height follows the hexagon's proportions. */
  width: number;
  /** navy: white icon on navy · tint: navy icon on pale blue · glass: light icon on a see-through tint (for navy backgrounds). */
  tone?: 'navy' | 'tint' | 'glass';
  /** Icon size in px (defaults to about half the width). */
  iconSize?: number;
  className?: string;
};

/** An icon inside the brand hexagon. */
function HexIcon({ icon, width, tone = 'tint', iconSize, className }: Props) {
  return (
    <div className={cx(style.hex, style[tone], className)} style={{ width, height: Math.round(width * 1.14) }} aria-hidden="true">
      <Icon name={icon} size={iconSize ?? Math.round(width * 0.48)} />
    </div>
  );
}

export default HexIcon;
