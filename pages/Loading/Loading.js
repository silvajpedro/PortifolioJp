import styles from "../../styles/LoadingStyle.module.scss"

export default function Loading() {
    return (
        <section className={styles.LoadingBox}>
            <img src="/loading.gif" style={{ filter: "saturate(3)" }} alt="imagem animada de carregando informações" />
        </section>
    )
}