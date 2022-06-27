import Head from 'next/head';
import AppBanner from '../src/components/Common/AppBanner';
import AppGallery from '../src/components/AppGallery';

export default function Gallery() {
  return (
    <div>
      <Head>
        <title> Refuge HULMAN – Visitez notre galerie photo </title>
        <meta name="title" content="Refuge HULMAN – Visitez notre galerie photo" />
      </Head>
      <AppBanner
        size="S"
        title="Découvrez l'album photo du Refuge"
        subTitle="Vous"
        breadcrumbs={[
          {
            label: 'Accueil',
            url: '/',
          },
          {
            label: 'Galerie',
            url: '/gallery',
          },
        ]}
      />
      <AppGallery />
    </div>
  );
}
