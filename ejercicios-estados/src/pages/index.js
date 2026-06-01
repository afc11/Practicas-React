import Head from "next/head";
import App from "./app.js";

export default function Root() {
  return (
    <>
      <Head>
        <title>Mi Proyecto de Estudio</title>
        <meta name="description" content="Ejercicios de useState" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <App />

    </>
  );
}