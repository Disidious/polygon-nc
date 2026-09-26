import type { ServiceHeaderContent } from '@/content/services';
import style from './style.module.css';

/** Top of a service page: text on the pale-blue band, photo filling the right half and fading in. */
function ServiceHeader({ title, description, image, imagePosition }: ServiceHeaderContent) {
  return (
    <section className={style.header}>
      <div className={style.inner}>
        <div className={style.text}>
          <h1 className={style.title}>{title}</h1>
          <div className={style.bar} />
          <p className={style.description}>{description}</p>
        </div>
      </div>
      <div className={style.photo} style={{ backgroundImage: `url(${image})`, backgroundPosition: imagePosition }} role="img" aria-label={title} />
    </section>
  );
}

export default ServiceHeader;
