import Head from 'next/head';
import AppBanner from '../src/components/Common/AppBanner';
import ContactForm from '../src/components/Forms/ContactForm';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>
          Refuge HULMAN – Un problème? Une question? Restons en contact!
        </title>
        <meta name="title" content="Refuge HULMAN – Un problème? Une question? Restons en contact!" />
      </Head>
      <AppBanner
        size="S"
        title="Restons en contact!"
        breadcrumbs={[
          {
            label: 'Accueil',
            url: '/',
          },
          {
            label: 'Contact',
            url: '/contact',
          },
        ]}
      />
      <ContactForm />
    </div>
  );
}
