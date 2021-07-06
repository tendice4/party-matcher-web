import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>PT.Matcher</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/ress/dist/ress.min.css"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
