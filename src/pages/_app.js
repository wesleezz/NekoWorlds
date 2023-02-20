import { SessionProvider } from 'next-auth/react';
import styles from '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
    return (
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    );
  }

export default MyApp;