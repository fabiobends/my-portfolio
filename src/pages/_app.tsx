import Footer from "../components/Footer";
import Header from "../components/Header";
import { HeaderProvider } from "../contexts/HeaderContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
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
