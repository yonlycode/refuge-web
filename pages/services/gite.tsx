import Head from 'next/head';
import AppBanner from '../../src/components/Common/AppBanner';

export default function Gites() {
  return (
    <div>
      <Head>
        <title>
          Refuge HULMAN - Réserver votre séjour au bout du monde, calme et dépaysement assuré!
        </title>
        <meta name="title" content="Refuge HULMAN - Réserver votre séjour au bout du monde, calme et dépaysement assuré!" />
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
