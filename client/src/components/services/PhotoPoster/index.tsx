import { Fragment } from 'react';

import type { PosterContent } from '@/content/services';
import style from './style.module.css';

/** One or two photo rows under navy shading; two rows are split by a line with three hexagons. */
function PhotoPoster({ rows }: { rows: PosterContent[] }) {
  return (
    <div className={style.poster}>
      {rows.map((row, index) => (
        <Fragment key={row.title}>
          {index > 0 && (
            <div className={style.divider} aria-hidden="true">
              <div className={style.hexes}><i /><i /><i /></div>
            </div>
          )}
          <div className={style.row} style={{ backgroundImage: `url(${row.image})`, backgroundPosition: row.imagePosition ?? 'center' }}>
            <div className={style.content}>
              <h3 className={style.title}>{row.title}</h3>
              <p className={style.text}>{row.description}</p>
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
}

export default PhotoPoster;
