import { Link } from 'react-router-dom';
import style from './style.module.css';

type Props = {
  text: string
  goto?: string
  onClick?: () => void
  btnClass?: string
  primary?: boolean
  secondary?: boolean
  disabled?: boolean
}

function Button(props: Props) {
  const { text, goto, onClick, btnClass, primary, secondary, disabled } = props

  const className = `${style.main} ${primary && style.primary} ${secondary && style.secondary} ${btnClass} ${disabled && style.disabled}`

  return goto ? 
    <Link onClick={onClick} to={goto} className={className}>
      {text}
    </Link> :
    <a onClick={onClick} className={className}>
      {text}
    </a>
}

export default Button;
