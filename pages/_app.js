import Router from 'next/router';
import Head from 'next/head';
import '../public/style.css';

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`);
});
Router.events.on('routeChangeComplete', () => console.log(`routeChangeComplete`));
Router.events.on('routeChangeError', () => console.log(`routeChangeError`));

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
      <Component {...pageProps} />
    </>
  );
}
