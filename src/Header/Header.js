import React, { Component } from "react";
import "./Header.css"; 

class Header extends Component {
    render(){
        return (
            <header>
                <div className="wrapper">
                    <h1>This is the header!</h1>
                </div>
            </header>
        )
    }
}

export default Header;