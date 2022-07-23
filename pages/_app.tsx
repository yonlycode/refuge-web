import '../assets/scss/style.scss';
import '../assets/scss/custom.scss';
import 'font-awesome/css/font-awesome.css';

import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { store } from '@/store';

import AppFooter from '@/components/Common/AppFooter';
import AppHeader from '@/components/Common/AppHeader';
import AppToastFactory from '@/components/Common/AppToastFactory';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Provider store={store}>
        <AppHeader />
        <main>
          <Component {...pageProps} />
        </main>
        <AppFooter />
        <AppToastFactory />
      </Provider>
    </>
  );
}

export default MyApp;
