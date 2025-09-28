import { useState } from "react"

export default function itemServices() {
    const [itemsLoading, setItemsLoading] = useState(false);
    const [refetchItems, setRefetchItems] = useState(true);
    const [itemsList, setItemsList] = useState([]);

    const url = "http://localhost:3000/items";

    const getAvailableItems = (userId) => {
        setItemsLoading(true);
        
        fetch(`${url}/availables`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
        })
        .then((response) => response.json())
        .then((result) => {
            if(result.success) {
                setItemsList(result.body || []);
            } else {
                console.log(result);
                setItemsList([]);
            }
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setItemsLoading(false);
            setRefetchItems(false);
        })
    }

    return { getAvailableItems, itemsLoading, refetchItems, itemsList };
}