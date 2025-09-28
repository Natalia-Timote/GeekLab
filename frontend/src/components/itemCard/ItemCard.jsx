import styles from "./ItemCard.module.css";

export default function ItemCard({ itemData }) {
    return (
        <>
            <div className={styles.cardContainer}>
                <img src={itemData.imgUrl} alt={itemData.name} />
                <div className={styles.cardContent}>
                    <h4>{itemData.name}</h4>
                    <p>{itemData.description}</p>
                    <h5 className={styles.price}>R$ {itemData.price}</h5>
                </div>
            </div>
        </>
    )
}