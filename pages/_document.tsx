import {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="Copyright" content="www.refugehulman.fr" />
        <meta name="Designer" content="techyoon, www.techyoon.tk" />
        <meta name="Publisher" content="techyoon, www.techyoon.tk" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Durée de lecture estimée" />
        <meta name="twitter:data1" content="7 minutes" />

        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />

        <meta name="keywords" content="marie galante, 'marie-galante', 'location marie galante', 'hotel marie galante', 'voiture marie galante', 'gite marie galante', 'location chambre marie galante',  'restaurant marie galante','bungalow marie galante', vacances, séjour, gites traditionnels, antilles, guadeloupe, caraïbe, location, piscine, 'culture antillaise', Campagne, Traditionnels,hotel, hébergement, bungalow, gites, photo, 'Refuge Hulman', 'Le refuge'" />
        <meta name="description" content="Dans un cadre magnifique, entre cocotiers, flamboyants et arbres fruitiers entre miroitement de la mer et plumets argentés de cannes à sucre, Georges et Fortuna vous accueillent au REFUGE cuisine locale dont vous ferez l'éloge et hébergement tout confort qui vous feront passez les plus douces nuit dans l'un des plus beau cadre au monde : Saint-Louis de Marie-Galante en Guadeloupe" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="manifest.json" />
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />

      </Head>
      <body>
        <Main />
        <NextScript />
        <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous" />
      </body>
    </Html>
  );
}
