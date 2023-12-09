import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* PyScript CSS */}
        <link
          rel="stylesheet"
          href="https://pyscript.net/releases/2023.12.1/core.css"
        />
        {/* This script tag bootstraps PyScript */}
        <Script
          defer
          type="module"
          src="https://pyscript.net/releases/2023.12.1/core.js"
          strategy="beforeInteractive"
        ></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
