import style from './style.module.css';

type Props = {
  techImg: string;
  techTitle: string;
  techDescription: string;
  secondTechImg?: string;
  secondTechTitle?: string;
  secondTechDescription?: string;
}

function TechnologyPoster(props: Props) {
  const { techImg, techDescription, techTitle, secondTechDescription, secondTechImg, secondTechTitle } = props

  const secondExists = () => secondTechDescription && secondTechImg && secondTechTitle

	return (
    <div className={style.techsContainer}>
      <div className={style.techsContent}>
        {
          secondExists() && <div className={style.overlayDivider}/>
        }
        <div className={style.techRow} style={{
          backgroundImage: `url(${techImg})`
        }}>
          <div className={style.techTextContainer}>
            <div className={style.techText}>
              <h1>
                {techTitle}
              </h1>
              <p>
                {techDescription}
              </p>
            </div>
          </div>
        </div>
        {
          secondExists() &&
          <div className={style.techRow} style={{
            backgroundImage: `url(${secondTechImg})`
          }}>
            <div className={style.techTextContainer}>
              <div className={style.techText}>
                <h1>
                  {secondTechTitle}
                </h1>
                <p>
                  {secondTechDescription}
                </p>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
	);
}

export default TechnologyPoster;
