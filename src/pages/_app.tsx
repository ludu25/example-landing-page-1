import "../styles/globals.css";
import "../styles/custom.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="author" content="Lucas Ventavele Ribeiro">
      <meta name="description" content="Evento que acontecerá para programadores com convidados especiais">
      <title>SIEGEPAN</title>

      <Header />

      <main className="">
        <Component {...pageProps} />
      </main>

      <Footer />
    </>
  );
}

export default App;