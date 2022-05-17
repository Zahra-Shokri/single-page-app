import React from "react";
import styles from "./Banner.module.css"
import banner from "../images/Banner.jpg";

const Banner = () => {
    return(
        <div className={styles.container}>
            <img src={banner} alt='banner' />

            <div className={styles.textContainer}>
                <h1>The Newest Products</h1>
                <pre>               Together to create the <span>Best</span></pre>
            </div>
        </div>
    );
}

export default Banner;