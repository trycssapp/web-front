import { AppProps } from 'next/app';
import Script from 'next/script';
import '../assets/css/style.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import { CookiesProvider } from 'react-cookie';
import Header from '../common/components/Header';
import { useCurrentUser } from '../common/utils/hooks/user';

const queryClient = new QueryClient();

export default function App({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    useCurrentUser();
  }, []);

  return (
    <CookiesProvider>
      <Script
        src="https://kit.fontawesome.com/84c3028184.js"
        crossOrigin="anonymous"
        strategy="beforeInteractive"
      />
      <QueryClientProvider client={queryClient}>
        <Header />
        <Component {...pageProps} key={router.route} />
      </QueryClientProvider>
    </CookiesProvider>
  );
}
