import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <img src="images/logo.png" alt="Logo da GeekLab"></img>
            <div>
                <p>Links importantes</p>
                <div className={styles.linksContainer}>
                    <Link className={styles.link} to={"/"}>Início</Link>
                    <Link className={styles.link} to={"/items"}>Miniaturas</Link>
                    <Link className={styles.link} to={"/profile"}>Perfil</Link>
                </div>
            </div>
            <div className={styles.creditsContainer}>
                <p>
                    Desenvolvido por Natalia Timote através do projeto
                    fullstack do canal do Eduardo Pazitto no YouTube.
                </p>
                <a href="https://www.linkedin.com/in/nataliamiriantimote" target="_blank">Clique aqui e confira mais do meu trabalho!</a>
            </div>
        </footer>
    )
}