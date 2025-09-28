import styles from "./Navbar.module.css";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { Drawer } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <nav className={styles.navbarContainer}>
            <div className={styles.navbarItems}>
                <Link to={"/"}>
                <img className={styles.logo} src="./images/logo.png" alt="" />
                </Link>
                <div className={styles.navbarLinksContainer}>
                    <Link to={"/"} className={styles.navbarLink}>Início</Link>
                    <Link  to={"/items"} className={styles.navbarLink}>Miniaturas</Link>
                    <Link to={"/cart"}>
                        <MdOutlineShoppingBag className={styles.navbarLink} />
                    </Link>
                    <Link to={"profile"}>
                        <FaUserCircle className={styles.navbarLink} />
                    </Link>
                </div>
            </div>

            <div className={styles.mobileNavbarItems}>
                <Link to={"/"}>
                    <img className={styles.logo} src="./images/logo.png" alt="" />
                </Link>
                <div className={styles.mobileNavbarBtns}>
                    <Link to={"/cart"}>
                        <MdOutlineShoppingBag className={styles.navbarLink} />
                    </Link>
                    <IoMenu className={styles.navbarLink} onClick={handleOpenMenu} />
                </div>
            </div>

            <Drawer
                anchor="right"
                open={openMenu}
                onClose={handleOpenMenu}
            >
                <div className={styles.drawer}>
                    <Link to={"/"} className={styles.navbarLink} onClick={handleOpenMenu}>Início</Link>
                    <Link to={"/items"} className={styles.navbarLink} onClick={handleOpenMenu}>Miniaturas</Link>
                    <Link to={"/profile"} className={styles.navbarLink} onClick={handleOpenMenu}>Perfil</Link>
                </div>
            </Drawer>

        </nav>
    )
}
