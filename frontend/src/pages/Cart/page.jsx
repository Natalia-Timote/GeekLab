import { useState } from "react";
import { useCartContext } from "../../contexts/useCartContext";
import styles from "./page.module.css";
import { IoIosRemoveCircle, IoMdAddCircle } from "react-icons/io";
import ConfirmOrderPopup from "../../components/confirmOrderPopup/confirmOrderPopup";
import orderServices from "../../services/order";

export default function Cart() {

    const { cartItems, updateCartItems, removeFromCart, clearCart } = useCartContext();
    const [confirmPopupOpen, setConfirmPopupOpen] = useState(false);
    const { sendOrder } = orderServices();

    const handleChangeItemQty = (mode, itemId) => {
        const updatedCartItems = cartItems.map((item) => {
            if (item._id === itemId) {
                if (mode === "less" && item.quantity > 1) {
                    item.quantity -= 1;
                } else if (mode === "more") {
                    item.quantity += 1;
                }
            }

            return item;
        })

        updateCartItems(updatedCartItems);
    }

    const handleOpenPopup = (e) => {
        e.preventDefault();
        setConfirmPopupOpen(!confirmPopupOpen);
    }

    const handleConfirmOrder = (orderData) => {
        orderData.items = cartItems.map((item) => {
            return { itemId: item._id, quantity: item.quantity }
        })
        console.log(orderData);
        sendOrder(orderData);
        setConfirmPopupOpen(!confirmPopupOpen);
        clearCart();
    }

    if (!cartItems.length) {
        return (
            <div className={styles.pageContainer}>
                <h2>O seu carrinho está vazio...</h2>
                <button>Confira as nossas miniaturas!</button>
            </div>
        )

    }

    return (
        <>
            <div className={styles.pageContainer}>
                <h1>Seus items:</h1>
                <section>
                    <div className={styles.itemsListContainer}>
                        {cartItems.map((item) => (
                            <div className={styles.itemContainer} key={item._id}>
                                <img src={item.imgUrl} alt={item.name} />
                                <div className={styles.itemContent}>
                                    <h2>{item.name}</h2>
                                    <p>{String(item.materials)}</p>
                                    <p>{item.description}</p>
                                    <div className={styles.quantityContainer}>
                                        <p>Quantidade:</p>
                                        <p>{item.quantity}</p>
                                        <div className={styles.quantityBtns}>
                                            <a onClick={() => { handleChangeItemQty("less", item._id) }}><IoIosRemoveCircle /></a>
                                            <a onClick={() => { handleChangeItemQty("more", item._id) }}><IoMdAddCircle /></a>
                                        </div>
                                    </div>
                                    <button onClick={() => { removeFromCart(item._id) }}>Remover item</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <button className={styles.confirmBtn} onClick={handleOpenPopup}>Confirmar pedido!</button>
            </div>

            <ConfirmOrderPopup open={confirmPopupOpen} onClose={handleOpenPopup} onConfirm={handleConfirmOrder} />
        </>
    )
}