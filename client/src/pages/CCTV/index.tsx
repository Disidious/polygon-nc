import FeatureCards from '@/components/services/FeatureCards';
import PhotoPoster from '@/components/services/PhotoPoster';
import ServiceHeader from '@/components/services/ServiceHeader';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import { cctv } from '@/content/services';
import style from './style.module.css';

function CCTV() {
  return (
    <>
      <ServiceHeader {...cctv.header} />
      <Section>
        <SectionTitle>{cctv.postersTitle}</SectionTitle>
        <PhotoPoster rows={cctv.posters} />
        <SectionTitle className={style.second}>{cctv.featuresTitle}</SectionTitle>
        <FeatureCards features={cctv.features} />
      </Section>
    </>
  );
}

export default CCTV;
