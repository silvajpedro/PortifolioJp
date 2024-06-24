import { useContext, useState } from "react";
import PrismicContext from "../api/prismic.js";
import Image from "next/image.js";
import styles from "../../../styles/AboutStyle.module.scss"
import Header from "../Header/Header.js";
import Loading from "../Loading/Loading.js";

export default function About({ data }) {

  const [guardaId, setGuardaId] = useState({
    id: null,
    modal: true,
  });

  const infoApi = useContext(PrismicContext)

  console.log(infoApi)

  if (!infoApi) {
    return (
      <Loading />
    )
  }

  return (
    <>
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
              <h2 className={styles.AboutMeTitle}>Sobre mim</h2>
              <p className={styles.AboutMeText}>
                Sou João, um apaixonado por tecnologia e entusiasta de resolução de problemas e desafios, essas paixões acabaram me levando a trilhar o caminho da programação. Assim iniciei meus estudos em programação em março de 2022, onde aprendi os principais conceitos de front-end como HTML, CSS, JS e React fui colocando-os em prática em meus projetos. Com muita curiosidade e um toque de criatividade, me tornando cada vez mais fascinado pela área, pelos seus desafios e pelas suas infinitas possibilidades.
              </p>
            </div>
          </section>

          <section className={styles.HabilitiesBox}>
            <h2 className={styles.HabilitiesTitle}>Habilidades</h2>
            <div className={styles.TecnologiesBox}>

              <div className={styles.TecnologiesDescription}>

                <h2>{guardaId.modal === true ? "" : infoApi.data.body1[0].items[guardaId.id].titulo_habilidades[0].text}</h2>

                <p>{guardaId.modal === true ? "Passe o mouse nos cards para ler" : infoApi.data.body1[0].items[guardaId.id].texto_habilidade[0].text}</p>

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