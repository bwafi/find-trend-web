import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';

const effra = localFont({
  src: [
    {
      path: '../public/fonts/Effra.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Effra-Heavy.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-effra',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${effra.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
