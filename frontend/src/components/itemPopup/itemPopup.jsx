import { Dialog } from "@mui/material";
import styles from "./itemPopup.module.css";

export default function ItemPopup({ itemData, onClose, onAddToCart }) {
    return (
        <Dialog open={true} onClose={onClose}>
            <div className={styles.popupContainer}>
                <img src={itemData.imgUrl} alt="" />
                <div className={styles.popupContent}>
                    <h1>{itemData.name}</h1>
                    <p className={styles.materials}>Materiais: {String(itemData.materials)}.</p> 
                    <p>{itemData.description}</p>
                    <h2>{itemData.price}</h2>
                    <button onClick={() => { onAddToCart(itemData) }}>Adicione ao carrinho</button>
                </div>
            </div>
        </Dialog>
    )
}