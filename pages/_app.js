import Head from 'next/head';
import '../public/style.css';
import { DataContextProvider } from '../components/context/DataContext';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tv Charts</title>
        <meta property='og:title' content='Tv Charts' key='title' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap'
          rel='stylesheet'></link>
      </Head>
      <DataContextProvider>
        <Component {...pageProps}></Component>
        <Footer />
      </DataContextProvider>

      <style jsx>{``}</style>
    </>
  );
}
