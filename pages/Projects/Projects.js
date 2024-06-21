import Carrosel from "./Carousel.js"
import PrismicContext from "../api/prismic"
import { useContext } from "react"
import styles from "../../styles/ProjectsStyle.module.scss"
import Image from "next/image.js"

export default function Projects() {

    const infoApi = useContext(PrismicContext)

    console.log(infoApi)

    if (!infoApi) {
        return (
            <p>Carregando...</p>
        )
    }

    return (
        <>

            <section className={styles.CarroselBox}>
                <h2>Projetos</h2>

                <Carrosel className={styles.Carrosel}>

                    {/* a caixa figure que vai alinhar cada um no seu quadrado 
  verificar o estilo e tentar diminuir o máximo de linhas possível
  arquivo carousel.jsx e project style.jsx */}

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
        </>
    )
}