import { Button } from 'components';
import style from './style.module.css';

type Props = {
  imgSrc: string;
  title: string;
  points: string[];
	btnGoto: string;
	btnText?: string;
  inverted?: boolean;
}

function HomeServiceCard(props: Props) {
  const { imgSrc, title, points, inverted, btnGoto, btnText } = props;

	return (
		<div className={style.cardContainer}>
			<div className={`${style.cardContent} ${inverted && style.reversedContent}`}>
				<div className={style.cardImg} style={{
					backgroundImage: `url(${imgSrc})`
				}}/>
				<div className={style.cardTextContainer}>
					<div className={style.cardText}>
						<div>
							<h1>
							{ title }
							</h1>
							<div className={style.underline}/>
						</div>
						<ul>
							{
								points.map((point, idx) => <li key={idx}>{ point }</li>)
							}
						</ul>
					</div>
					<Button text={btnText ? btnText : 'Learn More'} btnClass={style.learnMore} goto={btnGoto} primary/>
				</div>
			</div>
		</div>
	);
}

export default HomeServiceCard;
