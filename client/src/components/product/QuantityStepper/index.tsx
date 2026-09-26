import Icon from '@/components/ui/Icon';
import style from './style.module.css';

type Props = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
};

function QuantityStepper({ value, onChange, min = 1 }: Props) {
  return (
    <div className={style.stepper} role="group" aria-label="Quantity">
      <button type="button" className={style.button} onClick={() => onChange(Math.max(min, value - 1))} disabled={value <= min} aria-label="Decrease quantity">
        <Icon name="minus" />
      </button>
      <output className={style.value} aria-live="polite">{value}</output>
      <button type="button" className={style.button} onClick={() => onChange(value + 1)} aria-label="Increase quantity">
        <Icon name="plus" />
      </button>
    </div>
  );
}

export default QuantityStepper;
