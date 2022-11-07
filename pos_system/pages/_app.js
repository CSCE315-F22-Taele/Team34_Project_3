import React from "react";
import LoadingScreen from "../components/universal/LoadingScreen";
import { Router } from "next/router";
import styles from '../styles/globals.css';
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const [finishedLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setLoading(true), 0);
   }, Router.asPath)

  return (<>
    <Script src="https://accounts.google.com/gsi/client" async defer></Script>
      {finishedLoading ? (
        <React.Fragment>
          <Component {...pageProps} />
        </React.Fragment>
      ) : (
        <LoadingScreen />
       )}
    </>
  );
}

export default MyApp