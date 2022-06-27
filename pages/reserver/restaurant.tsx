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
        size="L"
        title="Une envie de vous découvrir nos spécialités? N'attendez plus!"
        subTitle="Réservez une table au refuge HULMAN en Katimini, dans un cadre magnifique sur la plage du bourg de Saint-Louis."
        breadcrumbs={[
          {
            label: 'Accueil',
            url: '/',
          },

          {
            label: 'Réserver',
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
