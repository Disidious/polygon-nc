import { Link } from 'react-router-dom';
import style from './style.module.css';

type Props = {
  goto: string;
  className?: string;
  children: JSX.Element | JSX.Element[];
}

function Navigatable(props: Props) {
  const { goto, className, children } = props

  return (
    <Link className={`${style.container}${className ? " " + className : ""}`} to={goto}>
      {children}
    </Link>
  )
}

export default Navigatable;
