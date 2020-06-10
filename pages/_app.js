import Head from 'next/head';
import '../public/style.css';
import { DataContextProvider } from '../components/context/DataContext';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tv Charts</title>
        <meta property='og:title' content='Tv Charts' key='title' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link
          href='https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap'
          rel='stylesheet'></link>
      </Head>
      <DataContextProvider>
        <Component {...pageProps} />
      </DataContextProvider>
    </>
  );
}
