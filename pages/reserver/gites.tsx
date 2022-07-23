import Head from 'next/head';

import AppBanner from '@/components/Common/AppBanner';
import ReservationFormManager from '@/components/Forms/ReservationFormManager';
import RoomReservationForm from '@/components/Forms/RoomReservationForm';

export default function Gites() {
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
        title="Une envie de vous dépayser? N'attendez plus!"
        subTitle="Réservez votre séjour de rêve au refuge HULMAN, nous vous attendons"
        breadcrumbs={[
          {
            label: 'Accueil',
            url: '/',
          },
          {
            label: 'Réserver',
            url: '/reserver/gites',
          },
        ]}
      />
      <div className="container">
        <ReservationFormManager>
          <RoomReservationForm />
        </ReservationFormManager>
      </div>
    </div>
  );
}
