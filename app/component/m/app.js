// pages/_app.js
import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Component {...pageProps} key={router.pathname} />
    </AnimatePresence>
  );
}
