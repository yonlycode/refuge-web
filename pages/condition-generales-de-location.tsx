import Head from 'next/head';
import AppBanner from '../src/components/Common/AppBanner';

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
    </div>
  );
}
