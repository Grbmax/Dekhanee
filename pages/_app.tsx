import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <> 
      <div className="bg-[#EFEFEF] bg-opacity-100">
      <Component {...pageProps} />
      <Footer />
      </div>
    </>
  );
}

export default MyApp;
