import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from "../../styles/ProjectsStyle.module.scss"

export default function Carrosel({ children }) {


    return (
        <Carousel
            showStatus={false}
            showThumbs={false}
            showArrows={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={4000}
            className={styles.Carrosel}>
        
            {children}
        
        </Carousel>
    )
}