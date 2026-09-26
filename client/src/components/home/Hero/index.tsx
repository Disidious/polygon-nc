import DotsAnimation from '@/components/layout/DotsAnimation';
import Button from '@/components/ui/Button';
import { hero } from '@/content/home';
import style from './style.module.css';

function Hero() {
  return (
    <section className={style.hero} style={{ backgroundImage: `url(${hero.image})` }}>
      <DotsAnimation />
      <div className={style.content}>
        <div className={style.badge}>
          <img src={hero.partnerLogo} alt="Panduit" />
          {hero.partnerText}
        </div>
        <h1 className={style.title}>
          {hero.title[0]}
          <br />
          {hero.title[1]}
        </h1>
        <p className={style.text}>{hero.description}</p>
        <div className={style.buttons}>
          {/* TODO: Uncomment when ready */}
          {/* <Button variant="light" to="/shop">Shop</Button> */}
          <Button variant="ghost" to="/contactus">Get in Touch</Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
