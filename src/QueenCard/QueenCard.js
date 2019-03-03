import React, { Component } from "react";
import "./QueenCard.css";

class QueenCard extends Component {
    render(){
        return (
            <div
                className="queenCard"
                key="{props.key}">
                <img src={this.props.imageSrc} alt={this.props.name} />
                <div>
                    <h3>{this.props.name}</h3>
                    <button 
                    onClick={() => this.props.displayFeature(this.props.id)}>More Info
                    </button>
                </div>
            </div>
        )
    }
}

export default QueenCard;