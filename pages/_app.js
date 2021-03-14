import Head from 'next/head'
import { useEffect } from 'react';
import environment from '../environment';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    environment.refreshDarkModeSettings()
  },[])
  return (
    <div>
      <Head>

        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
