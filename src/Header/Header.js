import React, { Component } from "react";
import "./Header.css"; 

class Header extends Component {
    render(){
        return (
            <header id="header">
                <div className="wrapper">
                    <h1>The Library</h1>
                    <p>Read up on all your favourite queens before they read you.</p>
                </div>
            </header>
        )
    }
}

export default Header;