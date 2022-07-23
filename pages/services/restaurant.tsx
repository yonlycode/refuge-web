import Head from 'next/head';
import AppBanner from '@/components/Common/AppBanner';
import { AppRoutesNames, AppRoutesRecord } from '@/constants/AppLinks';

export default function Restaurant() {
  return (
    <div>
      <Head>
        <title>
          Refuge HULMAN -
          Découvrez les saveur locales de Marie-Galante dans notre restaurant Le Katimini!
        </title>
        <meta
          name="title"
          content="Refuge HULMAN - Découvrez les saveur locales de Marie-Galante dans notre restaurant Le Katimini!"
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
