import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="John P. Newbury online front end web developer portfolio"
          />
          <meta property="og:title" content="John P. Newbury" />
          <meta
            property="og:description"
            content="John P. Newbury online front end web developer portfolio."
          />
          <meta
            property="og:image"
            content="https://portfolio-jpnewbury.vercel.app/_next/image?url=%2F1.jpeg&w=1920&q=75"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
