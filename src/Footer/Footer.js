import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
    render(){
        return (
            <footer>
                <div className="wrapper footerWrapper">
                    <p>Ruby Bantock</p>
                    <p>HackerYou 2019</p>
                    <p>Data: <a href="https://drag-race-api.readme.io/docs">No Key No Shade</a></p>
                </div>
            </footer>
        )
    }
}

export default Footer;