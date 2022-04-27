import Head from 'next/head';
import AppBanner from '../../src/components/Common/AppBanner';

export default function Restaurant() {
  return (
    <div>
      <Head>
        <title>
          Refuge HULMAN -
          Découvrez les saveur locales de Marie-Galante dans notre restaurant Le Katimini!
        </title>
        <meta name="title" content="Refuge HULMAN - Découvrez les saveur locales de Marie-Galante dans notre restaurant Le Katimini!" />
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
            label: 'Restaurant',
            url: '/services/restaurant',
          },
        ]}
      />
    </div>
  );
}
