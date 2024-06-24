import styles from "../../styles/HeaderStyle.module.scss";
import Image from "next/image";
import Link from "next/link";

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
          <li className={styles.Link}>
            <Link href={"/"}>Início</Link>
            </li>
          <li className={styles.Link}>
            <Link href={"/About/About"}>Sobre</Link>
          </li>
          <li className={styles.Link}>
            <Link href={"/Projects/Projects"}>Projetos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
