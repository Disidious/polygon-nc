import ContactCards from '@/components/contact/ContactCards';
import VisitUs from '@/components/contact/VisitUs';
import PageHead from '@/components/ui/PageHead';
import Section from '@/components/ui/Section';
import { contacts } from '@/content/contacts';

function ContactUs() {
  return (
    <>
      <PageHead title="Contact Us" />
      <Section>
        <ContactCards contacts={contacts} />
        <VisitUs />
      </Section>
    </>
  );
}

export default ContactUs;
