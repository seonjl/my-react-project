import { GlobalLayout } from '@/shared/components/layout';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { NextPageWithLayout } from '@/shared/types/layout';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <QueryClientProvider client={queryClient}>
      <GlobalLayout>
          <Component {...pageProps} />
        </GlobalLayout>
    </QueryClientProvider>,
  );
}
