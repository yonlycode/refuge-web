import Head from 'next/head';
import AboutUs from '../src/components/AboutUs';
import AppBanner from '../src/components/Common/AppBanner';
import RestaurantQuickCard from '../src/components/RestaurantQuickCard';
import RoomQuickCard from '../src/components/RoomQuickCard';
import StartReservationForm from '../src/components/Forms/StartReservationForm';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Bienvenue au Refuge HULMAN -
          cuisine locale et hébergement tout confort à Saint-Louis de Marie-Galante en Guadeloupe.
        </title>
        <meta name="title" content=" Bienvenue au Refuge HULMAN - cuisine locale et hébergement tout confort à Saint-Louis de Marie-Galante en Guadeloupe." />
      </Head>
      <AppBanner
        size="L"
        title="Bienvenue au Refuge HULMAN"
        subTitle="Ici vous êtes chez vous. Tous les services sont optimisés afin que vous passiez le meilleur moment possible. Un cadre calme et agréable, une chaleureuse, une table de qualité, tout cela servi avec une constante bonne humeur. Alors n'attendez plus et venez nous voir, nous vous attendons."
      />
      <StartReservationForm />
      <div className="container">
        <AboutUs />
        <RoomQuickCard />
        <RestaurantQuickCard />
      </div>
    </>
  );
}
