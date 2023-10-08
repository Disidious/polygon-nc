import style from './style.module.css';

type Props = {
  size?: "sml" | "med" | "lrg";
  height?: number;
  color?: string;
}

function Spinner(props: Props) {
  const { size = "med", height, color } = props

  const sizeStyle = () => {
    switch(size) {
      case 'sml':
        return {
          width: "37px",
          height: "21px"
        }
      case 'med':
        return {
          width: "72px",
          height: "41px"
        }
      case 'lrg':
        return {
          width: "90px",
          height: "51px"
        }
    }
  }

  const heightStyle = () => {
    if(height != null) {
      return height
    }
    switch(size) {
      case 'sml':
        return 50
      case 'med':
        return 150
      case 'lrg':
        return 200
    }
  }

	return (
    <div className={style.container} style={{
      height: `${heightStyle()}px`
    }}>
      <div style={sizeStyle()}>
        <div>
          <span className={`${style.one} ${style.h6}`} style={color ? {background: color} : undefined}></span>
          <span className={`${style.two} ${style.h3}`} style={color ? {background: color} : undefined}></span>
        </div>
      </div>


      <div style={sizeStyle()}>
        <div>
          <span className={`${style.one} ${style.h1}`} style={color ? {background: color} : undefined}></span>
          <span className={`${style.two} ${style.h4}`} style={color ? {background: color} : undefined}></span>
        </div>
      </div>


      <div style={sizeStyle()}>
        <div>
          <span className={`${style.one} ${style.h5}`} style={color ? {background: color} : undefined}></span>
          <span className={`${style.two} ${style.h2}`} style={color ? {background: color} : undefined}></span>
        </div>
      </div>
    </div>
	);
}

export default Spinner;
