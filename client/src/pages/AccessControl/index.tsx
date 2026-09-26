import FeatureCards from '@/components/services/FeatureCards';
import PhotoPoster from '@/components/services/PhotoPoster';
import ServiceHeader from '@/components/services/ServiceHeader';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import { accessControl } from '@/content/services';
import style from './style.module.css';

function AccessControl() {
  return (
    <>
      <ServiceHeader {...accessControl.header} />
      <Section>
        <SectionTitle>{accessControl.postersTitle}</SectionTitle>
        <PhotoPoster rows={accessControl.posters} />
        <SectionTitle className={style.second}>{accessControl.featuresTitle}</SectionTitle>
        <FeatureCards features={accessControl.features} />
      </Section>
    </>
  );
}

export default AccessControl;
