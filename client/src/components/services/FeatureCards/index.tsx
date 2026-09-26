import type { FeatureContent } from '@/content/services';
import style from './style.module.css';

/** Cards with a navy hexagon icon on the top edge; 3, 2 or 1 per row, centred when there are fewer. */
function FeatureCards({ features }: { features: FeatureContent[] }) {
  return (
    <div className={style.list}>
      {features.map((feature) => (
        <div key={feature.title} className={style.card}>
          <div className={style.icon}><img src={feature.icon} alt="" /></div>
          <h3 className={style.title}>{feature.title}</h3>
          <div className={style.bar} />
          <p className={style.text}>{feature.description}</p>
        </div>
      ))}
    </div>
  );
}

export default FeatureCards;
