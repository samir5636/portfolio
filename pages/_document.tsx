import { Html, Head, Main, NextScript } from "next/document";

export const metadata = {
  charset: "utf-8",
  title: "Samir Ziani - Portfolio",
  description:
    "A website about Samir Ziani, full stack developer, and tech creator.",
  keywords:
    "Samir Ziani, Full Stack Develope, Morroco",
  author: "Samir Ziani",
  
};

export default function Document() {
  return (
    <Html
      lang="en"
      className={""}
    >
      <Head>
      <meta name="google-site-verification" content="DozK7IwE0NzDFQrCFgDa48yB-0X0jZvuwQ2MOPGRmQ4" />
        <meta charSet={metadata.charset} />
        <meta
          name="title"
          content={metadata.title}
        />
        <meta
          name="description"
          content={metadata.description}
        />
        <meta
          name="keywords"
          content={metadata.keywords}
        />
        <meta
          name="author"
          content={metadata.author}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
