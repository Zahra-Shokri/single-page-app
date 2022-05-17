import React from "react";
import styles from "./Navbar.module.css";
import PZ from "../images/PZ.jpg";


const Navbar = () => {
    return(
        <header className={styles.header}>
            <div className={styles.listContainer}>
                <ul className={styles.list}>
                    <li>Home Page</li>
                    <li>Products</li>
                    <li>About US</li>
                </ul>
            </div>

            <div>
                <img className={styles.logo} src={PZ} alt='Logo' />
            </div>
        </header>
    );
}

export default Navbar;