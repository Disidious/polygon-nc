import style from './style.module.css';

type Props = {
  text: string
}

function PageTitle(props: Props) {
  const { text } = props
	// React.useEffect(() => {
	// 	window.scrollTo(0, 0);
	// }, [])
	return (
			<div className={style.titleContainer}>
				<div className={style.lineThrough}/>
				<h1 className={style.title}>
					{text}
				</h1>
			</div>
	);
}

export default PageTitle;
