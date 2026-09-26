import PhotoPoster from '@/components/services/PhotoPoster';
import ServiceHeader from '@/components/services/ServiceHeader';
import VideoWall from '@/components/services/VideoWall';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import { dataShow } from '@/content/services';

function DataShow() {
  return (
    <>
      <ServiceHeader {...dataShow.header} />
      <Section>
        <SectionTitle>{dataShow.postersTitle}</SectionTitle>
        <PhotoPoster rows={dataShow.posters} />
      </Section>
      <Section>
        <VideoWall {...dataShow.videoWall} />
      </Section>
    </>
  );
}

export default DataShow;
