import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
  return (
    <Html lang="en">
      <title>{process.env.NEXT_PUBLIC_TITLE}</title>
      <Head>
        <meta
          name="google-site-verification"
          content="5T65_b1YbNynUnjTL51ERXggF9j2Jf_2ovwhs1qJ1BY"
        />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
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
