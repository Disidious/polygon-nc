import style from './style.module.css';

type Props = {
  imgSrc: string;
  title: string;
  description: string;
	imgPosition?: string;
}

function ServiceHeader(props: Props) {
  const { imgSrc, title, description, imgPosition } = props;

	return (
			<div className={style.headerContainer}>
				<div className={`${style.headerContent}`}>
					<div className={style.headerTextContainer}>
						<div className={style.headerText}>
              <div>
                <h1>
                  { title }
                </h1>
                <div className={style.underline}/>
              </div>
							<p>
                {description}
							</p>
						</div>
					</div>
          <div className={style.headerImg} style={{
						backgroundImage: `url(${imgSrc})`,
						backgroundPosition: imgPosition ? imgPosition : 'right'
					}}/>
				</div>
			</div>
	);
}

export default ServiceHeader;
