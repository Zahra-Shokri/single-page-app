import React, { Component } from "react";
import styles from "./Cards.module.css";
import mid1 from "../images/mid1.jpg";
import mid2 from "../images/mid2.jpg";
import mid3 from "../images/mid3.jpg";
import mid4 from "../images/mid4.jpg";
import Card from "./Card";


class Cards extends Component {
    render() {
        return(
            <div className={styles.container}>
                <Card image={mid1} nameMidPhoto='iphone promax13' priceMidPhoto='500 $' />
                <Card image={mid2} nameMidPhoto='Apple watch' priceMidPhoto='350 $' />
                <Card image={mid3} nameMidPhoto='Apple ipad' priceMidPhoto='625 $' />
                <Card image={mid4} nameMidPhoto='Wireless Headphone' priceMidPhoto='220 $' />
            </div>
        );
    }
}

export default Cards;