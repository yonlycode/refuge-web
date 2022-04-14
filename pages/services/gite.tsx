import Head from 'next/head';
import AppBanner from '../../src/components/AppBanner';

export default function Gites() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBanner
        size="L"
        breadcrumbs={[
          {
            label: 'Accueil',
            url: '/',
          },
          {
            label: 'Services',
            url: '/services',
          },
          {
            label: 'Gites',
            url: '/services/gite',
          },
        ]}
      />
    </div>
  );
}
