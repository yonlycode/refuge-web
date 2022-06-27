import Head from 'next/head';

import AppBanner from '../../src/components/Common/AppBanner';
import ComingSoon from '../../src/components/ComingSoon';

export default function GuideLanding() {
  return (
    <div>
      <Head>
        <title>
          Refuge HULMAN -
          Découvrez nos différents guide pour faciliter votre arrivée
          et votre séjour à Marie-Galante!
        </title>
        <meta name="description" content="Dans un cadre magnifique, entre cocotiers, flamboyants et arbres fruitiers entre miroitement de la mer et plumets argentés de cannes à sucre, Georges et Fortuna vous accueillent au REFUGE cuisine locale dont vous ferez l'éloge et hébergement tout confort qui vous feront passez les plus douces nuit dans l'un des plus beau cadre au monde : Saint-Louis de Marie-Galante en Guadeloupe" />
        <meta name="title" content="Refuge HULMAN - Découvrez nos différents guide pour faciliter votre arrivée et votre séjour à Marie-Galante!" />
      </Head>
      <AppBanner
        size="S"
        title=""
        breadcrumbs={[
          {
            label: 'Accueil',
            url: '/',
          },
          {
            label: 'Guides',
            url: '/guides',
          },
        ]}
      />
      <ComingSoon />
    </div>
  );
}
