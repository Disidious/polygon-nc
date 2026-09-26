import Button from '@/components/ui/Button';
import HexIcon from '@/components/ui/HexIcon';
import { location } from '@/content/contacts';
import style from './style.module.css';

/** Address + map, below the contact cards. */
function VisitUs() {
  return (
    <section className={style.visit} aria-labelledby="visit-us">
      <div className={style.info}>
        <h2 id="visit-us" className={style.title}>Visit us</h2>
        <div className={style.address}>
          <HexIcon icon="pin" width={40} iconSize={19} tone="glass" />
          <span>{location.address}</span>
        </div>
        <Button variant="ghost" icon="map" href={location.gmapsURL}>Open in Google Maps</Button>
      </div>
      <div className={style.map}>
        <iframe
          src={location.mapEmbedURL}
          title="Map showing Polygon Network Company in Heliopolis, Cairo"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
}

export default VisitUs;
