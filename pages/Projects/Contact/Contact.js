import { useState, useEffect } from "react";
import styles from "../../../styles/ContactStyle.module.scss"
import Image from "next/image";

export default function Contact() {

  const [modalCellPhone, setModalCellPhone] = useState(true);
  const [hour, setHour] = useState(new Date().toLocaleTimeString("pt-BR"))

  const today = new Date().toLocaleDateString("pt-BR");

  useEffect(() => {
    setTimeout(() => {
      setHour(new Date().toLocaleTimeString("pt-BR"))
    }, 1000)
  }, [hour])

  return (
    <section className={styles.PhoneBox}>
      
      <h2 className={styles.PhoneTitle}>
        {modalCellPhone ? "Desbloqueie o celular para entrar em contato" : "Fale comigo, vamos trocar uma ideia!"}
      </h2>

      <div className={styles.PhoneImageBox}>
       
        {modalCellPhone && <h2>{hour}</h2>}
        {modalCellPhone && <h4>{today}</h4>}
        
        <Image
          width={668}
          height={722}
          className={styles.PhoneImage}
          src={modalCellPhone ? "/Cellphone_block.png" : "/Cellphone.png"}
          alt="tela de celular" />

        { !modalCellPhone && <nav>

          <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-belo/" target="_blank">
            <img src="/Linkedin.svg" className={styles.ContactImages} alt="icone contato Linkedin" />
          </a>

          <a href="mailto:belojpedro.31@gmail.com" target="_blank">
            <img src="/Email.svg" className={styles.ContactImages} alt="icone contato E-mail" />
          </a>

          <a href="https://wa.me/5521983112220?text=Oiii,%20Jo%C3%A3o%20vi%20o%20seu%20Portf%C3%B3lio,%20vamos%20trocar%20uma%20ideia?" target="_blank">
            <img src="/Whatssap.svg" className={styles.ContactImages} alt="icone contato whatssap" />
          </a>
        </nav> }

        <button
          className={styles.ButtonCellPhone}
          onClick={() => {
            setModalCellPhone(!modalCellPhone);
          }}
        ></button>

      </div>

    </section>
  );
}