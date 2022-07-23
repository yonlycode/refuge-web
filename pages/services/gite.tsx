import Head from 'next/head';
import AppBanner from '@/components/Common/AppBanner';
import { AppRoutesNames, AppRoutesRecord } from '@/constants/AppLinks';

export default function Gites() {
  return (
    <div>
      <Head>
        <title>
          Refuge HULMAN - Réserver votre séjour au bout du monde, calme et dépaysement assuré!
        </title>
        <meta
          name="title"
          content="Refuge HULMAN - Réserver votre séjour au bout du monde, calme et dépaysement assuré!"
        />
      </Head>
      <AppBanner
        size="L"
        breadcrumbs={[
          AppRoutesRecord[AppRoutesNames.HOME],
          AppRoutesRecord[AppRoutesNames.SERVICES_LANDING],
        ]}
      />
    </div>
  );
}
