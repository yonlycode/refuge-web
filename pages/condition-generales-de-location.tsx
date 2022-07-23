import Head from 'next/head';
import ComingSoon from '@/components/ComingSoon';
import AppBanner from '@/components/Common/AppBanner';

export default function CGL() {
  return (
    <div>
      <Head>
        <title>
          Refuge HULMAN – Découvrez nos conditions de vente et de location.
        </title>
        <meta name="title" content="Refuge HULMAN – Découvrez nos conditions de vente et de location." />
      </Head>

      <AppBanner
        size="S"
        breadcrumbs={[
          {
            label: 'Accueil',
            url: '/',
          },
          {
            label: 'CGL',
            url: '/condition-generales-de-location',
          },
        ]}
      />
      <ComingSoon />
    </div>
  );
}
