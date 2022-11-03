import Head from "next/head";
import "../styles/reset.scss";
import "../styles/globals.scss";
// import "../styles/swiper.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>demo site</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
