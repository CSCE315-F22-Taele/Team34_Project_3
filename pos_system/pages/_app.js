import React from "react";
import chicfila from '../assets/chick-fil-a-logo-vector.png';
import Image from 'next/image'


import styled from "styled-components";
import { Router } from "next/router";

const Screen = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  opacity: 0;
  animation: fade 0.4s ease-in forwards;

  @keyframes fade {
    0% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Balls = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .ball {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background: #E60E33;
    margin: 0 60px 0 0;
    animation: oscillate 0.7s ease-in forwards infinite;
  }

  .one {
    animation-delay: 0.5s;
  }
  .two {
    animation-delay: 1s;
  }
  .three {
    animation-delay: 1.5s;
  }

  @keyframes oscillate {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;


function MyApp({ Component, pageProps }) {
  const [finishedLoading, setLoading] = React.useState(false);

  React.useEffect(() =>{
    setTimeout(() => setLoading(true), 5000);
   }, Router.asPath)

  return (
    <>
      {finishedLoading ? (
        <React.Fragment>
          <Component {...pageProps} />
        </React.Fragment>
      ) : (
        <Screen>
        <div
        style={{
          display: "flex",
          position: "absolute",
          top: "35%",
          left: "48%",
          transform: "translate(-50%, -50%)"
        }}
      >
            <Image src={chicfila} width={400} height={250}/>
          </div>
          <Balls>
            <div className="ball one"></div>
            <div className="ball two"></div>
            <div className="ball three"></div>
          </Balls>
        </Screen>
       )}
    </>
  );
}

export default MyApp