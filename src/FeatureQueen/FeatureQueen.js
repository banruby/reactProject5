import React, { Component } from "react";
import "./FeatureQueen.css";
import SeasonStats from "./SeasonStats/SeasonStats.js";

class FeatureQueen extends Component {
    
    render(){
        return (
            <div className="wrapper featureWrapper">
                <h2>{this.props.feature.name}</h2>
                <p className="quote">"{this.props.feature.quote}"</p>
                <div className="featureImageContainer">
                    <img src={this.props.feature.image_url} alt=""/>
                </div>

                <SeasonStats 
                    seasons={this.props.feature.seasons}
                />                
                    
            </div>
        )
    }
}

export default FeatureQueen;