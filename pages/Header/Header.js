import styles from "../../styles/HeaderStyle.module.scss";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.HeaderBoxStyle}>
      <nav>
        <ul className={styles.ul}>
          <Image
            width={137}
            height={158}
            src="/logo.png"
            alt="imagem logo da página <jp/>"
          />
          <li className={styles.Link}>Início</li>
          <li className={styles.Link}>Sobre</li>
          <li className={styles.Link}>Projetos</li>
        </ul>
      </nav>
    </header>
  );
}
