import styles from "./page.module.css";
import { FaInstagram, FaWhatsapp, FaFacebook, FaSearchLocation } from "react-icons/fa";

export default function Home() {
    return (
        <div className={styles.pageContainer}>
            <section className={styles.homeSection}>
                <h1>Bem-vindo(a) à GeekLab!</h1>
                <p>
                    Aqui, cada miniatura conta uma história.
                    Na GeekLab, transformamos paixão em colecionáveis,
                    trazendo peças detalhadas para quem aprecia o universo
                    geek, seja em coleções, RPGs ou jogos de tabuleiro.
                    Se você busca qualidade, exclusividade e aquele toque
                    especial para sua coleção, está no lugar certo. Explore
                    nosso catálogo e encontre a miniatura perfeita para o seu mundo.
                </p>
            </section>

            <section className={styles.miniatureSection}>
                <div className={styles.miniatureInfo}>
                    <img src="./images/homepage/action-figure-icon.png" alt="Ícone de um action figure. Criado por Freepik - Flaticon"></img>
                    <h2>Miniaturas de personagens</h2>
                    <p>
                        Heróis, vilões, aventureiros e lendas. Aqui você
                        encontra miniaturas detalhadas dos personagens que
                        marcaram histórias e conquistaram fãs. Seja para
                        coleção, exibição ou uso em jogos, cada peça traz
                        à vida o universo que você ama.
                    </p>
                </div>
                <div className={styles.miniatureInfo}>
                    <img src="./images/homepage/pokemon-icon.png" alt="Ícone de um pokébola representando o universo Pokémon. Criado por Darius Dan - Flaticon"></img>
                    <h2>Miniaturas de Pokémon</h2>
                    <p>
                        Para treinadores e colecionadores, nossas miniaturas
                        de Pokémon capturam toda a essência e o carisma dessas
                        criaturas icônicas. Escolha seu favorito e leve para
                        casa uma parte do mundo Pokémon.
                    </p>
                </div>
                <div className={styles.miniatureInfo}>
                    <img src="./images/homepage/pet-icon.png" alt="Ícone de um action figure. Criado por Freepik - Flaticon"></img>
                    <h2>Miniaturas de pets</h2>
                    <p>
                        Companheiros fiéis em versão colecionável. De cães e
                        gatos a criaturas fantásticas, nossas miniaturas de
                        pets são perfeitas para quem quer levar um pouco de
                        carinho e personalidade para sua coleção.
                    </p>
                </div>
            </section>

            <section className={styles.contactSection}>
                <h3>Conecte-se com a GeekLab</h3>
                <p>
                    Quer saber mais, tirar dúvidas ou acompanhar nossas 
                    novidades? Estamos sempre por perto! Siga-nos nas 
                    redes sociais e entre em contato para qualquer 
                    informação. Seja para recomendações, pedidos 
                    especiais ou apenas para conversar sobre o universo 
                    geek, ficaremos felizes em falar com você.
                </p>
                <div className={styles.socialButtonContainer}>
                    <button className={styles.socialButton}><FaInstagram />Instagram</button>
                    <button className={styles.socialButton}><FaFacebook />Facebook</button>
                    <button className={styles.socialButton}><FaWhatsapp />WhatsApp</button>
                    <button className={styles.socialButton}><FaSearchLocation />Localização</button>
                </div>
            </section>
        </div>
    )
}