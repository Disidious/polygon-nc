import CableTrayIcon from '@/components/ui/Icon/CableTrayIcon';
import type { HoneycombGroup } from '@/content/networking';
import { cx } from '@/utils/cx';
import style from './style.module.css';

/**
 * Networking categories: one row per category on alternating white / pale-blue bands.
 * The honeycomb (main icon + product hexagons) and the text swap sides each row, like the original page.
 */
function HoneycombRows({ groups }: { groups: HoneycombGroup[] }) {
  return (
    <div>
      {groups.map((group) => (
        <div key={group.title} className={style.band}>
          <div className={cx(style.row, group.mirrored && style.mirrored)}>
            <div className={style.text}>
              <h3 className={style.title}>{group.title}</h3>
              <div className={style.bar} />
              <p className={style.description}>{group.text}</p>
            </div>
            <div className={style.comb}>
              <div className={cx(style.hex, style.main, style.p1)}>
                <div className={style.inner}>
                  {group.icon === 'cable-tray' ? <CableTrayIcon className={style.svgIcon} title={group.title} /> : <img src={group.icon} alt={group.title} />}
                </div>
              </div>
              {group.items.map((item, index) => (
                <div key={item.label} className={cx(style.hex, style.item, style[`p${index + 2}`])} tabIndex={0}>
                  <img src={item.image} alt={item.label} loading="lazy" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HoneycombRows;
