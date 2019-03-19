import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

class Header extends Component {
    render(){
        return (
            <header id="header">
                <div className="wrapper">
                    <Link to="/">
                        <h1>The Library</h1>
                    </Link>
                    <p>Read up on all your favourite queens before they read you.</p>
                </div>
            </header>
        )
    }
}

export default Header;