import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <Link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <Link
          rel="stylesheet"
          href="path/to/font-awesome/css/font-awesome.min.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
