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
				<img className={style.headerImg} src={imgSrc} alt={title} style={{
					objectPosition: imgPosition ? imgPosition : 'right'
				}}/>
				
			</div>
		</div>
	);
}

export default ServiceHeader;
