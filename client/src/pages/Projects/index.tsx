import ProjectCards from '@/components/projects/ProjectCards';
import PageHead from '@/components/ui/PageHead';
import Section from '@/components/ui/Section';
import { projects, projectsSubtitle } from '@/content/projects';

function Projects() {
  return (
    <>
      <PageHead title="Latest Projects" />
      <Section>
        <ProjectCards projects={projects} subtitle={projectsSubtitle} />
      </Section>
    </>
  );
}

export default Projects;
