import { Link } from 'react-router-dom';
import style from './style.module.css';
import { Spinner } from 'components';

type Props = {
  text: string
  goto?: string
  onClick?: () => void
  btnClass?: string
  primary?: boolean
  secondary?: boolean
  disabled?: boolean
  loading?: boolean
}

function Button(props: Props) {
  const { text, goto, onClick, btnClass, primary, secondary, disabled, loading } = props

  const className = `
    ${style.main} 
    ${primary && style.primary} 
    ${secondary && style.secondary} 
    ${btnClass} ${disabled && style.disabled} 
    ${loading && style.loading}
  `

  const getContent = () => (
    <>
      {text}
      {
        loading &&
        <div style={{position: 'absolute'}}>
          <Spinner size='sml' color={primary ? "white" : undefined}/>
        </div>
      }
    </>
  )

  return goto ? 
    <Link onClick={onClick} to={goto} className={className}>
      {getContent()}
    </Link> :
    <a onClick={onClick} className={className}>
      {getContent()}
    </a>
}

export default Button;
