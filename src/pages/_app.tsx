import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Boilerplate</title>
          <link rel="shortcut icon" href="/img/icon.png" />
          <link rel="apple-touch-icon" href="/img/icon.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="description"
            content="Um projeto simples com TypeScript, React, NextJS and Styled Components"
          />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
