import ClientGrid from '@/components/clients/ClientGrid';
import PageHead from '@/components/ui/PageHead';
import Section from '@/components/ui/Section';
import { clients } from '@/content/clients';

function Clients() {
  return (
    <>
      <PageHead title="Our Clients" />
      <Section>
        <ClientGrid clients={clients} />
      </Section>
    </>
  );
}

export default Clients;
