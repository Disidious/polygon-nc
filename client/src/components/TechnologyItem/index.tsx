import style from './style.module.css';

type Tech = {
  img: string;
  title: string;
  description: string;
}

type Props = {
  techs: Tech[];
}

function TechnologyItems(props: Props) {
  const { techs } = props

  const renderTech = (tech: Tech, key: number) => (
    <div className={style.techContainer} key={key}>
      <div className={style.hex}>
        <img src={tech.img}/>
      </div>
      <div className={style.itemTextContainer}>
        <div className={style.itemText}>
          <h2>
            {tech.title}
          </h2>
          <div className={style.underline}/>
          <p>
            {tech.description}
          </p>
        </div>
      </div>
    </div>
  )

	return (
    <div className={style.container}>
      {techs.map((tech, idx) => renderTech(tech, idx))}
    </div>
	);
}

export default TechnologyItems;
