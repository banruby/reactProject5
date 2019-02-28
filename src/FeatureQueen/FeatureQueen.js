import React, { Component } from "react";
import "./FeatureQueen.css";

class FeatureQueen extends Component {
    
    render(){
        console.log(this.props);
        return (
            <div className="wrapper featureWrapper">
                <h2>{this.props.feature.name}</h2>
                <div className="featureImageContainer">
                    <img src={this.props.feature.image_url} alt=""/>
                </div>
                <div className="featureInfoPanel">
                    <p>Featured Quote: "{this.props.feature.quote}"</p>
                </div>
            </div>
        )
    }
}

export default FeatureQueen;