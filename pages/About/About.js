import { useContext, useState, useEffect } from "react";
import PrismicContext from "../../Components/api/_prismic";
import Image from "next/image.js";
import styles from "../../styles/AboutStyle.module.scss"
import Header from "../Header/Header.js";
import Loading from "../Loading/Loading";
import Head from "next/head";

export default function About() {

  const [lang, setLang] = useState("pt-br")
  const [guardaId, setGuardaId] = useState({
    id: null,
    modal: true,
  });

  useEffect(() => {
    setLang(localStorage.getItem("lang"))
  }, [])

  const infoApi = useContext(PrismicContext)

  if (!infoApi || !infoApi.data) {
    return (
      <Loading />
    );
  }

  console.log(infoApi)

  return (
    <>
      <Head>
        <title>Sobre mim</title>
        <link rel="icon" href="../favicon.ico" />
      </Head>

      <Header />

      <main className="MainBox">

        <section className="ContentBox">

          <section className={styles.AboutMeBox}>

            <figure className={styles.MyImageBox}>

              <Image
                className={styles.JoaoImage}
                width={720}
                height={750}
                priority
                src="/coding.png" alt="ilustração do joão" />

            </figure>

            <div className={styles.DescriptionBox}>

              <h2 className={styles.AboutMeTitle}>{lang === "pt-br" || lang === null ? "Sobre mim" : "About me"}</h2>

              <p className={styles.AboutMeText}>
                {lang === "pt-br" || lang === null ?
                  "Sou João, um apaixonado por tecnologia e entusiasta de resolução de problemas e desafios, essas paixões acabaram me levando a trilhar o caminho da programação. Assim iniciei meus estudos em programação em março de 2022, onde aprendi os principais conceitos de front-end como HTML, CSS, JS e React fui colocando-os em prática em meus projetos. Com muita curiosidade e um toque de criatividade, me tornando cada vez mais fascinado pela área, pelos seus desafios e pelas suas infinitas possibilidades." : "I am João, a technology enthusiast and passionate about problem-solving and challenges. These passions led me to pursue a path in programming. I started my programming studies in March 2022, where I learned the main front-end concepts such as HTML, CSS, JS, and React, and applied them to my projects. With a lot of curiosity and a touch of creativity, I became increasingly fascinated by the field, its challenges, and its endless possibilities."}
              </p>

            </div>

          </section>

          <section className={styles.HabilitiesBox}>

            <h2 className={styles.HabilitiesTitle}>{lang === "pt-br" || lang === null ? "Habilidades" : "Habilities"}</h2>

            <div className={styles.TecnologiesBox}>

              <div className={styles.TecnologiesDescription}>

                <h2>{guardaId.modal === true ? "" : infoApi.data.body1[0].items[guardaId.id].titulo_habilidades[0].text}</h2>

                {lang === null && <p>{guardaId.modal === true ? "Passe o mouse nos cards para ler" : infoApi.data.body1[0].items[guardaId.id].texto_habilidade[0].text}</p>}
                {lang === "pt-br" && <p>{guardaId.modal === true ? "Passe o mouse nos cards para ler" : infoApi.data.body1[0].items[guardaId.id].texto_habilidade[0].text}</p>}
                {lang === "en-us" && <p>{guardaId.modal === true ? "Hover over the cards to read." : infoApi.data.body1[0].items[guardaId.id].texto_habilidade_en[0].text}</p>}

              </div>

              <div className={styles.TecnologiesImages}>

                {infoApi.data.body1[0].items.map((item) => (
                  <figure className={styles.FigureHabilities}
                    // aqui o id que vem do map está sendo guardado na const guardaId para mostrar
                    // a informação condizente com as tecnologias
                    onMouseOut={() => { setGuardaId({ modal: true, id: null }) }}
                    onMouseOver={() => {
                      setGuardaId({ id: item.id, modal: false })
                    }}
                    key={item.id}
                    style={{ backgroundImage: `url(${item.lightimage.url})` }}>

                    <Image
                      className={styles.HabilitiesImage}
                      width={148}
                      height={135}
                      key={item.id}
                      src={item.darkimage.url}
                      style={{ visibility: guardaId.id === item.id ? "hidden" : "" }}
                      alt={item.lightimage.alt} />
                  </figure>
                ))}

              </div>

            </div>

          </section>

        </section>

      </main>
    </>
  );
}