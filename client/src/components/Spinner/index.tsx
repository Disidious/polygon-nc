import style from './style.module.css';

type Props = {
  size?: "sml" | "med" | "lrg";
  height?: number;
}

function Spinner(props: Props) {
  const { size = "med", height } = props

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
          <span className={`${style.one} ${style.h6}`}></span>
          <span className={`${style.two} ${style.h3}`}></span>
        </div>
      </div>


      <div style={sizeStyle()}>
        <div>
          <span className={`${style.one} ${style.h1}`}></span>
          <span className={`${style.two} ${style.h4}`}></span>
        </div>
      </div>


      <div style={sizeStyle()}>
        <div>
          <span className={`${style.one} ${style.h5}`}></span>
          <span className={`${style.two} ${style.h2}`}></span>
        </div>
      </div>
    </div>
	);
}

export default Spinner;
