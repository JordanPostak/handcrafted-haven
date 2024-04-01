/*pages/_app.tsx*/

import { AppProps } from 'next/app';
import '../styles/globals.css';
import '../styles/variables.css';


const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;