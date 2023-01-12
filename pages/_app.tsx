import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
