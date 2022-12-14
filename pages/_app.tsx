/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Head from 'next/head';
import { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
        <NotificationsProvider>
          <Component {...pageProps} />
        </NotificationsProvider>
      </MantineProvider>
    </>
  );
}
