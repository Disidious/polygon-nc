import type { Project } from '@/content/projects';
import style from './style.module.css';

function ProjectCards({ projects, subtitle }: { projects: Project[]; subtitle: string }) {
  return (
    <div className={style.grid}>
      {projects.map((project) => (
        <article key={project.title} className={style.card}>
          <div className={style.image} style={{ backgroundImage: `url(${project.image})` }} role="img" aria-label={project.title} />
          <div className={style.body}>
            <h2 className={style.title}>{project.title}</h2>
            <div className={style.subtitle}>{subtitle}</div>
            <div className={style.bar} />
            <ul className={style.points}>
              {project.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}

export default ProjectCards;
