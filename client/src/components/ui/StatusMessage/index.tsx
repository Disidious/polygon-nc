import Button from '@/components/ui/Button';
import HexIcon from '@/components/ui/HexIcon';
import type { IconName } from '@/components/ui/Icon';
import { cx } from '@/utils/cx';
import style from './style.module.css';

type Action = { label: string; onClick: () => void; to?: never } | { label: string; to: string; onClick?: never };

type Props = {
  icon: IconName;
  title: string;
  text?: string;
  action?: Action;
  /** "md" for sections inside a page, "lg" for a page-level message (checkout). */
  size?: 'md' | 'lg';
  className?: string;
};

/** Loading-free states: nothing found, not found, errors, done. */
function StatusMessage({ icon, title, text, action, size = 'md', className }: Props) {
  const large = size === 'lg';
  return (
    <div className={cx(style.message, large && style.large, className)} role="status">
      <HexIcon icon={icon} width={large ? 86 : 44} iconSize={large ? 44 : 22} />
      {large ? <h2 className={style.title}>{title}</h2> : <p className={style.title}>{title}</p>}
      {text && <p className={style.text}>{text}</p>}
      {action && (
        <Button size={large ? 'md' : 'sm'} className={large ? style.largeAction : undefined} to={action.to} onClick={action.onClick}>
          {action.label}
        </Button>
      )}
    </div>
  );
}

export default StatusMessage;
