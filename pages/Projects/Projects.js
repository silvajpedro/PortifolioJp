import Carrosel from "./Carousel.js"
import PrismicContext from "../../Components/api/_prismic.js"
import { useContext, useState, useEffect } from "react"
import styles from "../../styles/ProjectsStyle.module.scss"
import Image from "next/image.js"
import Header from "../Header/Header.js"
import Contact from "./Contact/Contact.js"
import Head from "next/head.js"
import Loading from "../Loading/Loading.js"

export default function Projects() {

    const [loading, setLoading] = useState(true);
    const infoApi = useContext(PrismicContext)
    const [lang,setLang] = useState("pt-br")

    useEffect(() => {
        setLang(localStorage.getItem("lang"))
      }, [])
    

    console.log(infoApi)

    if (!infoApi || !infoApi.data) {
        return(
            <Loading/>
        );
    }

    const handleImageLoad = () => {
        setLoading(false);
    };


    return (
        <>
            <Head>
                <title>Projetos</title>
                <link rel="icon" href="../favicon.ico" />
            </Head>

            <Header />

            <main className="MainBox">
                
                <section className="ContentBox">

                    <section className={styles.CarroselBox}>
                        <h2>{lang === "pt-br" || lang === null ? "Projetos":"Projects"}</h2>
                        {loading && <Loading />}
                        <Carrosel className={styles.Carrosel}>

                            {infoApi.data.body[0].items.map((item, id) => (

                                <figure key={id}>

                                    <Image
                                        width={1650}
                                        height={1010}
                                        src={item.imagem_projeto.url} alt="imagem dos projetos do joao"
                                        onLoad={()=> handleImageLoad()}
                                    />

                                    <div className={styles.DescriptionProject}>

                                        <figcaption>{lang === "pt-br" ? item.descricao_projeto[0].text: item.descricao_projeto_en[0].text}</figcaption>

                                        <nav>
                                            <a href={item.link.url} target="_blank">{lang === "pt-br" || lang === null ? "Acessar projeto":"Access Project"}</a>
                                            <a href={item.link_codigo.url} target="_blank" >{lang === "pt-br" || lang === null ? "Acessar código":"Access code"}</a>
                                        </nav>

                                    </div>

                                </figure>

                            ))}
                        </Carrosel>
                    </section>

                    <Contact />

                    <address className={styles.AddressInfo}>
                        <p>{lang === "pt-br" || lang === null ? "Desenvolvido por <João Pedro Belo/>":"Made by <Joao Pedro Belo/>"}</p>
                    </address>

                </section>

            </main>
        </>
    )
}