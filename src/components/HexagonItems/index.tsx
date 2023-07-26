import style from './style.module.css';
import fiberImg from 'assets/fiber.png'
import mpoImg from 'assets/mpo.jpeg'
import singleImg from 'assets/singlemode.jpeg'
import multiImg from 'assets/multimode.jpeg'

type Props = {
  inverted?: boolean;
  title: string;
  mainImg: string;

  firstImg?: string;
  firstTitle?: string;

  secondImg?: string;
  secondTitle?: string;

  thirdImg?: string;
  thirdTitle?: string;
}

function HexagonItems(props: Props) {
  const { inverted, title, mainImg, firstImg, firstTitle, secondImg, secondTitle, thirdImg, thirdTitle } = props

  const renderItem = (img?: string, title?: string) => {
    if(!img || !title) {
      return
    }

    return (
      <div className={style.hex}>
        <img src={img}/>
        <div className={style.overlay}/>
        <h2>
          {title}
        </h2>
      </div>
    )
  }

	return (
    <div className={style.container}>
      <div className={inverted ? style.invertedTitle : style.title}>
        <h1>
          {title}
        </h1>
        <div className={style.underline}/>
      </div>
      <div className={inverted ? style.invertedHexContainer : style.hexContainer}>
        <div className={style.hex}>
          <div className={style.hexContent}>
            <img src={mainImg}/>
          </div>
        </div>
        {renderItem(firstImg, firstTitle)}
        {renderItem(secondImg, secondTitle)}
        {renderItem(thirdImg, thirdTitle)}
        {/* <div className={style.hex}>
          <img src={mpoImg}/>
          <div className={style.overlay}/>
          <p>
            MPO
          </p>
        </div>
        <div className={style.hex}>
          <img src={singleImg}/>
          <div className={style.overlay}/>
          <p>
            Single Mode
          </p>
        </div>
        <div className={style.hex}>
          <img src={multiImg}/>
          <div className={style.overlay}/>
          <p>
            Multi Mode
          </p>
        </div> */}
      </div>
    </div>
	);
}

export default HexagonItems;
