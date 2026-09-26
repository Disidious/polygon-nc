import HoneycombRows from '@/components/services/HoneycombRows';
import ServiceHeader from '@/components/services/ServiceHeader';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import { networking } from '@/content/networking';
import style from './style.module.css';

function Networking() {
  return (
    <>
      <ServiceHeader {...networking.header} />
      <Section innerClassName={style.titleOnly}>
        <SectionTitle className={style.title}>{networking.groupsTitle}</SectionTitle>
      </Section>
      <HoneycombRows groups={networking.groups} />
    </>
  );
}

export default Networking;
