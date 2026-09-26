import { Link } from 'react-router';

import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import { homeServices } from '@/content/home';
import style from './style.module.css';

function ServiceCards() {
  return (
    <Section tone="mist">
      <SectionTitle eyebrow="What we do">Our Services</SectionTitle>
      <div className={style.grid}>
        {homeServices.map((service) => (
          <Link key={service.to} to={service.to} className={style.card}>
            <div className={style.image} style={{ backgroundImage: `url(${service.image})` }} role="img" aria-label={service.title} />
            <div className={style.body}>
              <h3 className={style.title}>{service.title}</h3>
              <div className={style.bar} />
              <ul className={style.points}>
                {service.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
              <span className={style.more}>Learn more →</span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

export default ServiceCards;
