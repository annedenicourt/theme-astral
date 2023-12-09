import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content="https://astrothemeastral.fr/" />
        <meta property="og:title" content="Apprendre à faire un thème astral" />
        <meta
          property="og:image"
          content="https://astrothemeastral.fr/images/theme-astral.png"
        />
        <meta
          property="og:description"
          content="Formation en ligne pour apprendre à faire un thème astral. Vous découvrirez 
          les mystères des signes, des planètes, des maisons mais surtout vous découvrirez un aspect
          rarement abordé lors des formations en ligne : la Lune Noire et les blessures qu'elle génère."
        />
        <meta
          property="og:site_name"
          content="J'apprends à faire un thème astral"
        />
        <meta property="og:type" content="site" />
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
