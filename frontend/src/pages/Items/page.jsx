import { useEffect, useState } from "react";
import itemServices from "../../services/items.jsx";
import Loading from "../Loading/page";
import ItemCard from "../../components/itemCard/ItemCard.jsx";
import styles from "./page.module.css";
import ItemPopup from "../../components/itemPopup/itemPopup.jsx";
import { useCartContext } from "../../contexts/useCartContext.jsx";

export default function Items() {

    const { getAvailableItems, itemsList, itemsLoading, refetchItems } = itemServices();
    const [itemSelected, setItemSelected] = useState(null);
    const { addToCart } = useCartContext();

    useEffect(() => {
        if (refetchItems) {
            getAvailableItems();
        }
    }, [refetchItems])

    const handleItemSelected = (item) => {
        setItemSelected(item);
    }

    const handleClosePopup = () => {
        setItemSelected(null);
    }

    const handleAddToCart = (itemToAdd) => {
        addToCart(itemToAdd);
        handleClosePopup();
    }

    if (itemsLoading) {
        return (<Loading />);
    }

    return (
        <>
            <div className={styles.pageContainer}>
                <h1>Miniaturas</h1>
                <div className={styles.itemsContainer}>
                    {itemsList.map((item) => (
                        <div key={item._id} className={styles.cardContainer} onClick={() => { handleItemSelected(item) }}>
                            <ItemCard itemData={item} />
                        </div>
                    ))}
                </div>

                {itemSelected && (
                    <ItemPopup
                        itemData={itemSelected}
                        onClose={handleClosePopup}
                        onAddToCart={handleAddToCart}
                    />
                )}
            </div>
        </>
    )
}