import { cx } from '@/utils/cx';
import style from './style.module.css';

type Props = {
  children: string;
  /** Small label above the title (home page style, no bar). */
  eyebrow?: string;
  className?: string;
};

function SectionTitle({ children, eyebrow, className }: Props) {
  if (eyebrow) {
    return (
      <div className={cx(style.withEyebrow, className)}>
        <div className={style.eyebrow}>{eyebrow}</div>
        <h2 className={style.homeTitle}>{children}</h2>
      </div>
    );
  }
  return (
    <div className={cx(style.withBar, className)}>
      <h2 className={style.title}>{children}</h2>
      <div className={style.bar} />
    </div>
  );
}

export default SectionTitle;
