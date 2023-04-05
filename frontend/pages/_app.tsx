import NextNProgress from "nextjs-progressbar";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";

import "../public/assets/css/default.css";
import "../public/assets/css/fontAwesome5Pro.css";
import "./index.scss";

import Footer from "@/shared/components/layout/Footer/FooterOne/Footer";
import Header from "@/shared/components/layout/Header/Header";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { clarity } from "react-microsoft-clarity";
import ErrorPageMain from "../shared/components/ErrorPage/ErrorPageMain";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wow.js") : null;

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  React.useEffect(() => {
    const wow = new WOW();
    wow.init();
    clarity.init("gjssm51hc0");
  }, []);

  return (
    <>
      <ThemeProvider defaultTheme="dark">
        <ErrorBoundary FallbackComponent={ErrorPageMain}>
          <>
            <Toaster />

            <NextNProgress
              color="#2785ff"
              startPosition={0.3}
              stopDelayMs={200}
              height={3}
              showOnShallow={true}
            />
            <Header />
            <Component {...pageProps} />
            <Footer />
          </>
        </ErrorBoundary>
      </ThemeProvider>
    </>
  );
}
