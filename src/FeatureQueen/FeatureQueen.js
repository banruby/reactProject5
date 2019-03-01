import React, { Component } from "react";
import "./FeatureQueen.css";
import SeasonStats from "./SeasonStats/SeasonStats.js";
import ChallengeStats from "./ChallengeStats/ChallengeStats.js";

class FeatureQueen extends Component {
    
    render(){
        return (
            <div className="wrapper featureWrapper">
                <h2>{this.props.feature.name}</h2>
                <p className="quote">"{this.props.feature.quote}"</p>
                <div className="featureImageContainer">
                    <img src={this.props.feature.image_url} alt=""/>
                </div>

                <div className="featureInfoPanel">
                    <p className="stats">Season Stats</p>
                    <SeasonStats 
                        seasons={this.props.feature.seasons}
                    />
                    <p className="stats">Challenge Stats</p>
                    <ChallengeStats 
                        challenges={this.props.feature.challenges}
                        lipsyncs={this.props.feature.lipsyncs}
                    />
                </div>  
            </div>
        )
    }
}

export default FeatureQueen;