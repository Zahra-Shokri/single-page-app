import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Search from "./components/Search";
import Logos from "./components/Logos";
import Footer from "./components/Footer";


class App extends Component {
    render() {
        return(
            <>
                <div><Navbar /></div>
                <div><Banner /></div>
                <div><Cards /></div>
                <div><Search /></div>
                <div><Logos /></div>
                <div><Footer /></div>
            </>
        );
    }
}

export default App;