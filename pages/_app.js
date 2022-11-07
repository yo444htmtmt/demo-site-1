import Head from "next/head";
import "../styles/reset.scss";
import "../styles/globals.scss";
// import "../styles/swiper.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => {
      return url !== router.asPath && setPageLoading(true);
    };

    const handleComplete = () => setPageLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  const loadingComponent = <h2>Loading...</h2>;

  return (
    <>
      <Head>
        <title>demo site</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      {pageLoading ? loadingComponent : <Component {...pageProps} />}
    </>
  );
}

export default MyApp;
