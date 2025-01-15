import "../styles/globals.css";
import "../styles/custom.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <title>SIEGEPAN</title>
      <meta charSet="UTF-8"></meta>
      <meta name="description" content="Evento que acontecerá para programadores com convidados especiais"></meta>

      <Header />

      <main className="">
        <Component {...pageProps} />
      </main>

      <Footer />
    </>
  );
}

export default App;