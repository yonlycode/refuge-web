import Head from 'next/head';
import ComingSoon from '../src/components/ComingSoon';
import AppBanner from '../src/components/Common/AppBanner';

export default function About() {
  return (
    <div>
      <Head>
        <title>
          Refuge HULMAN – À propos de nous, pour passer de bonnes vacances
        </title>
        <meta name="title" content="Refuge HULMAN – À propos de nous, pour passer de bonnes vacances" />
      </Head>
      <AppBanner
        size="S"
        breadcrumbs={[
          {
            label: 'Accueil',
            url: '/',
          },
          {
            label: 'À propos',
            url: '/about',
          },
        ]}
      />
      <ComingSoon />
    </div>
  );
}
