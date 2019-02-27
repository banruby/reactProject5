import React from "react";
import "./QueenCard.css";

const QueenCard = (props) => {
    return (
        <div
        className="queenCard"
        key="{props.key}">
            <img src={props.imageSrc} alt=""/>
            <h3>{props.name}</h3>
        </div>
    )
}

export default QueenCard;