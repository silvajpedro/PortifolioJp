import { useState, useEffect, memo } from "react";
import styles from "../../../styles/TypingStyle.module.scss";
import Image from "next/image";

function Typing({ FirstSentence = "", SecondSentence = "" }) {

    // frases separadas e tornadas em um array
    const FirstArraySentence = FirstSentence.split("");
    const SecondArraySentence = SecondSentence.split("");
    // contadores do índice do array
    const [count, setCount] = useState(0);
    const [secondCount, setSecondCount] = useState(0);

    // onde o texto será adicionado novamente
    const [MainTextAdd, setMainTextAdd] = useState("");
    const [SecondTextAdd, setSecondTextAdd] = useState("");

    // modal de abrir a mão e laptop
    const [openModalHand, setOpenHand] = useState(false);
    const [openModalLaptop, setOpenLaptop] = useState("0")

    useEffect(() => {
        if (count < FirstArraySentence.length) {
            // primeira frase
            setTimeout(() => {
                setMainTextAdd(MainTextAdd.concat(FirstArraySentence[count]));
                setCount(count + 1);
            }, 240);
            //abre o modal da mão
            setTimeout(() => {
                setOpenHand(true);
            }, 4500);
        } else if (secondCount < SecondArraySentence.length) {
            // segunda frase
            setTimeout(() => {
                setSecondTextAdd(SecondTextAdd.concat(SecondArraySentence[secondCount]));
                setSecondCount(secondCount + 1);
            }, 200);
        }
        // modal do laptop
        setTimeout(() => {
            setOpenLaptop("1")
        }, 1000)
    });

    return (
        <>
            <section className={styles.TypingBox}>

                <div className={styles.HelloBox}>

                    <div className={styles.NameBox}>
                        
                        <h1>{MainTextAdd}</h1>
                        {openModalHand && <Image 
                        width={186} 
                        height={193} 
                        className={styles.HelloHand} 
                        src="/robot_hand.svg" 
                        alt="mão robotica de cor verde acenando" />}
                    
                    </div>

                    <div className={styles.DevelopBox}>
                        <h2>{SecondTextAdd}</h2>
                    </div>
                </div>

                <figure className={styles.LaptopBox}>
                    <Image
                        width={539}
                        height={575}
                        src="/testenote.gif" className={styles.LaptopImage} style={{ opacity: `${openModalLaptop}` }} alt="" />
                </figure>

            </section>
        </>
    )
}

export default memo(Typing)