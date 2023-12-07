import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <link rel="icon" href="%PUBLIC_URL%/favicon.ico" /> */}
        {/* <meta property="og:url" content="https://astrothemeastral.com/" />
        <meta property="og:title" content="Apprendre à faire un thème astral" />
        <meta
          property="og:image"
          content="https://annedenicourt.com/images/laptop.png"
        />
        <meta
          property="og:description"
          content="Portfolio Anne Denicourt développeur web"
        />
        <meta
          property="og:site_name"
          content="Portfolio Anne Denicourt développeur web"
        />
        <meta property="og:type" content="portfolio" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Montserrat+Alternates:wght@400;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
