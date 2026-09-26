import { useEffect } from 'react';

import Icon from '@/components/ui/Icon';
import { cx } from '@/utils/cx';
import style from './style.module.css';

type Props = {
  message: string;
  open: boolean;
  /** Called when the toast has been shown for `duration` ms. */
  onClose: () => void;
  duration?: number;
};

/** A short confirmation shown just below the sticky header. */
function Toast({ message, open, onClose, duration = 2500 }: Props) {
  useEffect(() => {
    if (!open) return;
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [open, duration, onClose]);

  return (
    <div className={cx(style.toast, open && style.show)} role="status" aria-live="polite">
      <Icon name="check" size={22} />
      {open && message}
    </div>
  );
}

export default Toast;
