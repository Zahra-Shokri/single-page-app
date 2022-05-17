import React, { Component } from "react";
import styles from "./Logos.module.css";
import logo1 from "../images/logo1.png";
import logo2 from "../images/logo2.png";
import logo3 from "../images/logo3.png";


class Logos extends Component {
    render() {
        return(
            <div className={styles.container}>
                <p>Who Supports us?</p>
                
                <div>
                    <img src={logo2} alt='Logo2' />
                    <img src={logo1} alt='Logo1' />
                    <img src={logo3} alt='Logo3' />
                </div>
            </div>
        );
    }
}
export default Logos;