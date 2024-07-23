import { GlobalLayout } from "@/shared/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { type NextPageWithLayout } from "@/shared/types/layout";

import { Amplify } from "aws-amplify";

Amplify.configure({
  API: {
    GraphQL: {
      endpoint:
        "https://hstto7lhzzgf7j5m3uxntuckke.appsync-api.ap-northeast-2.amazonaws.com/graphql",
      region: "ap-northeast-2",
      defaultAuthMode: "apiKey",
      apiKey: "da2-2xrs7fkqvbcavhwmj2wcuks4ti",
    },
  },
});

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
    </QueryClientProvider>
  );
}
