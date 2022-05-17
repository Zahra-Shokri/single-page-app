import React, { Component } from "react";
import styles from "./Card.module.css";


class Card extends Component {
    render() {
        const { image, nameMidPhoto, priceMidPhoto } = this.props;

        return(
            <div className={styles.container}> 
                <img src={image} alt='Pic' />
                <h3>{nameMidPhoto}</h3>
                <p>{priceMidPhoto}</p>
            </div>
        );
    }
}

export default Card;