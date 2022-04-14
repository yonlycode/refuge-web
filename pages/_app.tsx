import '../assets/scss/style.scss';
import '../assets/scss/custom.scss';
import 'font-awesome/css/font-awesome.css';

import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import Head from 'next/head';

import { store } from '../src/store';

import AppFooter from '../src/components/AppFooter';
import AppHeader from '../src/components/AppHeader';
import AppToastFactory from '../src/components/AppToastFactory';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container-fluid" />
      <AppHeader />
      <main>
        <Component {...pageProps} />
      </main>
      <AppFooter />
      <AppToastFactory />
    </Provider>
  );
}

export default MyApp;
