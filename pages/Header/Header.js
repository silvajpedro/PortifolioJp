import styles from "../../styles/HeaderStyle.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {

  const [lang, setLang] = useState("pt-br")
  const [modal,setModal] = useState("")

  useEffect(() => {

    setLang(localStorage.getItem("lang"))
    setModal(localStorage.getItem("modal"))
  
  }, [])

  console.log(lang)

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
            <Link href={"/"}> {lang === "pt-br" || lang === null ? "Início" : "Home"}</Link>

          </li>
          <li className={styles.Link}>
            <Link href={"/About/About"}> {lang === "pt-br" || lang === null ? "Sobre" : "About"}</Link>
          </li>

          <li className={styles.Link}>
            <Link href={"/Projects/Projects"}>{lang === "pt-br" || lang === null ? "Projetos" : "Projects"}</Link>
          </li>

        </ul>
        <select style={{backgroundColor: modal}}
          className={styles.Select} 
          onMouseOver={()=> setModal("#ffffff")}
          onMouseOut={()=>{setModal(lang === "pt-br" || lang === "en-us" ? "transparent":"")}}
          onChange={(e) => {
            localStorage.setItem("lang", e.target.value)
            localStorage.setItem("modal","transparent")
            location.reload()
          }}>
          <option value=""></option>
          <option value="pt-br">PT-BR</option>
          <option value="en-us">EN-US</option>
        </select>
      </nav>
    </header>
  );
}
