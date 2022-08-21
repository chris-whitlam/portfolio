import type { AppProps as NextAppProps } from 'next/app';

import { Layout } from '@templates';
import { EmotionCache, CacheProvider } from '@emotion/react';
import Head from 'next/head';
import { createEmotionCache } from '@utils';

const clientSideEmotionCache = createEmotionCache();

interface AppProps extends NextAppProps {
  emotionCache: EmotionCache;
}

const App = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache
}: AppProps) => (
  <CacheProvider value={emotionCache}>
    <Head>
      <title>Chris Whitlam</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </CacheProvider>
);

export default App;
