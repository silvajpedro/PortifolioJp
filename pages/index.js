import Head from "next/head";
import Header from "./Header/Header";
import PrismicContext from "./api/prismic";
import { useFirstPrismicDocument } from "@prismicio/react";
import styles from "../styles/IndexStyle.module.scss"
import Typing from "./Typing/Typing";
import About from "./About/About";

export default function Home() {

  const [document] = useFirstPrismicDocument();
  return (
    <>
      <PrismicContext.Provider value={document}>
        <Head>
          <title>João | Portfólio</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="./favicon.ico" />
        </Head>
        <Header />
        <main className={styles.MainBox}>
          <section className={styles.ContentBox}>
          <Typing FirstSentence="Oi, eu sou o João" SecondSentence="Desenvolvedor front-end."/>
          <About/>
          </section>
        </main>
      </PrismicContext.Provider>
    </>
  );
}
