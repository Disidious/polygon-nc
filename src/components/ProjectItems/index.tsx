import style from './style.module.css';

type Project = {
  img: string;
  title: string;
  subTitle: string;
  points: string[];
}

type Props = {
  projects: Project[];
}

function ProjectItems(props: Props) {
  const { projects } = props

  const renderItem = (project: Project) => (
    <div className={style.projectContent}>
      <div className={style.projectImg} style={{
        backgroundImage: `url(${project.img})`
      }}/>
      <div className={style.projectTextContainer}>
        <div className={style.projectText}>
          <h1>
            {project.title}
          </h1>
          <h2>
            {project.subTitle}
          </h2>
          <ul>
            {project.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )

	return (
    <div className={style.projectsContainer}>
      {projects.map(project => renderItem(project))}
    </div>
	);
}

export default ProjectItems;
