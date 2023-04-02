import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="Video2Text - Transcibe Videos easily"
          content="Video2Text - Transcibe Videos easily"
          about="Video2Text - Transcibe Videos easily"
        />
        <link rel="icon" href="/favicon.ico" />
        <script
          id="buy-me-coffee-btn"
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="hayerhans"
          data-description="Support me on Buy me a coffee!"
          data-message="Thank you for your support"
          data-color="#BD5FFF"
          data-position="Right"
          data-x_margin="18"
          data-y_margin="18"
        ></script>
      </Head>
      <body className="body-bg">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
