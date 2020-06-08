import Router from 'next/router';
import Link from 'next/link';
import '../public/style.css';

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`);
});
Router.events.on('routeChangeComplete', () => console.log(`routeChangeComplete`));
Router.events.on('routeChangeError', () => console.log(`routeChangeError`));

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
