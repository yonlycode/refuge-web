import Head from 'next/head';
import AppBanner from '../../src/components/Common/AppBanner';

export default function ServicesLanding() {
  return (
    <div>
      <Head>
        <title>
          Refuge HULMAN,-
          Découvrez nos différents services pour vous faire passer le meilleur moment possible!
        </title>

        <meta name="title" content="Refuge HULMAN,- Découvrez nos différents services pour vous faire passer le meilleur moment possible!" />
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
        ]}
      />
    </div>
  );
}
