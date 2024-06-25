import Carrosel from "./Carousel.js"
import PrismicContext from "../../Components/api/_prismic.js"
import { useContext } from "react"
import styles from "../../styles/ProjectsStyle.module.scss"
import Image from "next/image.js"
import Header from "../Header/Header.js"
import Contact from "./Contact/Contact.js"
import Head from "next/head.js"
import Loading from "../Loading/Loading.js"

export default function Projects() {

    const infoApi = useContext(PrismicContext)

    if (!infoApi) {
        return (
            <Loading/>
        )
    }

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
                        <h2>Projetos</h2>

                        <Carrosel className={styles.Carrosel}>

                            {infoApi.data.body[0].items.map((item, id) => (
                                
                                <figure key={id}>

                                    <Image
                                        width={1651}
                                        height={1011}
                                        src={item.imagem_projeto.url} alt="imagem dos projetos do joao" />

                                    <div className={styles.DescriptionProject}>

                                        <figcaption>{item.descricao_projeto[0].text}</figcaption>

                                        <nav>
                                            <a href={item.link.url} target="_blank">Acessar projeto</a>
                                            <a href={item.link_codigo.url} target="_blank" >Acessar código</a>
                                        </nav>

                                    </div>

                                </figure>

                            ))}
                        </Carrosel>
                    </section>

                    <Contact/>
                
                <address className={styles.AddressInfo}>
                    <p>Desenvolvido por {"<Joao Pedro Belo/>"}</p>
                </address>
                
                </section>
            
            </main>
        </>
    )
}