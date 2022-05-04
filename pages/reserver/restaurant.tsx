import Head from 'next/head';

import AppBanner from '../../src/components/Common/AppBanner';
import EateryReservationForm from '../../src/components/Forms/EateryReservationForm';
import ReservationFormManager from '../../src/components/Forms/ReservationFormManager';

export default function Restaurant() {
  return (
    <div>
      <Head>
        <title>
          Refuge HULMAN – Réserver son séjour de rêve à Marie-Galante.
        </title>
        <meta name="title" content="Refuge HULMAN – Réserver son séjour de rêve à Marie-Galante" />
      </Head>

      <AppBanner
        size="S"
        title="N'attendez plus..."
        subTitle="Réservez votre séjour de rêve au refuge HULMAN, nous vous attendons"
        breadcrumbs={[
          {
            label: 'Accueil',
            url: '/',
          },
          {
            label: 'Réserver',
            url: '/reserver',
          },
          {
            label: 'Restaurant',
            url: '/reserver/restaurant',
          },
        ]}
      />
      <div className="container">
        <ReservationFormManager>
          <EateryReservationForm />
        </ReservationFormManager>
      </div>
    </div>
  );
}
