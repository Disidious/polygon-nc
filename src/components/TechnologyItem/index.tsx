import style from './style.module.css';

type Props = {
  techImg: string;
  techTitle: string;
  techDescription: string;
  containerStyle?: string;
}

function TechnologyItem(props: Props) {
  const { techImg, techDescription, techTitle, containerStyle } = props

	return (
    <div className={`${style.container} ${containerStyle}`}>
      <div className={style.hex}>
        <img src={techImg}/>
      </div>
      <div className={style.itemTextContainer}>
        <div className={style.itemText}>
          <h2>
            {techTitle}
          </h2>
          <div className={style.underline}/>
          <p>
            {techDescription}
          </p>
        </div>
      </div>
    </div>
	);
}

export default TechnologyItem;
