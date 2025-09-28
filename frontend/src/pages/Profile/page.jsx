import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authServices from "../../services/auth.jsx";
import orderServices from "../../services/order.jsx";
import styles from "./page.module.css";
import { IoLogOut, IoTime, IoAlertCircleSharp } from "react-icons/io5";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import Loading from "../Loading/page.jsx";

export default function Profile() {
    const { logout } = authServices();
    const { getUserOrders, orderLoading, refetchOrders, ordersList } = orderServices();
    const navigate = useNavigate();
    const authData = JSON.parse(localStorage.getItem("auth"));

    useEffect(() => {
        if (!authData) {
            return navigate("/auth");
        } else if (refetchOrders) {
            getUserOrders(authData?.user?._id)
        }
    }, [authData, refetchOrders])

    if (orderLoading) {
        return (<Loading />);
    }

    const handleLogout = () => {
        logout();
        return navigate("/auth");
    }

    console.log(ordersList);

    return (
        <div className={styles.pageContainer}>
            <div>
                <h1>{authData?.user?.fullname}</h1>
                <h2>{authData?.user?.email}</h2>
            </div>

            <div>
                <button onClick={handleLogout}>Logout <IoLogOut /></button>
            </div>

            {ordersList.length > 0 ?
                <div className={styles.ordersContainer}>
                    {ordersList.map((order) => (
                        <div key={order._id} className={styles.orderContainer}>
                            {order.pickupStatus === "Pendente" ? <p className={`${styles.pickupStatus} ${styles.pending}`}><IoTime />{order.pickupStatus}</p> : null}
                            {order.pickupStatus === "Finalizado" ? <p className={`${styles.pickupStatus} ${styles.completed}`}><IoIosCheckmarkCircle />{order.pickupStatus}</p> : null}
                            {order.pickupStatus === "Cancelado" ? <p className={`${styles.pickupStatus} ${styles.canceled}`}><IoAlertCircleSharp />{order.pickupStatus}</p> : null}
                            <p>{order.pickupTime}</p>
                            {order.orderItems.map((item) => (
                                <div key={item._id}>
                                    <h3>{item.itemDetails[0].name}</h3>
                                    <p>Quantidade: {item.quantity}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                :
                <div>
                    <h4>Você não tem pedidos realizados ainda!</h4>
                    <Link to={"/items"} className={styles.miniaturesLink}>Clique aqui para conferir as nossas miniaturas!</Link>
                </div>
            }
        </div>
    )
}