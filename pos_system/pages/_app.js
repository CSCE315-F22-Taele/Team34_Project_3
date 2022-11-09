import React from "react";
import LoadingScreen from "../components/universal/LoadingScreen";
import { Router } from "next/router";
import styles from '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [finishedLoading, setLoading] = React.useState(false);

  React.useEffect(() =>{
    setTimeout(() => setLoading(true), 0);
   }, Router.asPath)

  return (
    <>
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