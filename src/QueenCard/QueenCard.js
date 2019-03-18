import React, { Component } from "react";
import "./QueenCard.css";

class QueenCard extends Component {
    render(){
        return (
            <div
                className="queenCard"
                key="{props.key}">
                <img src={this.props.imageSrc} alt={this.props.name} />
                <div className="cardContainer">
                    <h3>{this.props.name}</h3>
                    <a href="#" className="button"
                    onClick={() => this.props.displayFeature(this.props.id)}>
                        More Info
                    </a>
                </div>
            </div>
        )
    }
}

export default QueenCard;