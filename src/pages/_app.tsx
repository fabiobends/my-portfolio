import React, { useEffect } from "react";
import ReactGA from "react-ga";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { HeaderProvider } from "../contexts/HeaderContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    ReactGA.initialize("G-KNBPDT6VZL");
    ReactGA.pageview(window.location.pathname + window.location.search);
    return () => {
      ReactGA.initialize("G-KNBPDT6VZL");
      ReactGA.pageview(window.location.pathname + window.location.search);
    };
  }, []);

  return (
    <HeaderProvider>
      <div className="container">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </HeaderProvider>
  );
}

export default MyApp;
