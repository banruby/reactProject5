import React, { Component } from "react";
import "./ChallengeStats.js";

class ChallengeStats extends Component {
    constructor(){
        super();
        this.state = {
            featureMiniWins: "",
            featureMainWins: ""
        }
    }

    componentDidMount(){
        const challenges = this.props.challenges;
        const mainWins = challenges.filter((value) => {
            return value.type === "main" && value.won === true

        });
        const miniWins = challenges.filter((value) => {
            return value.type === "mini" && value.won === true

        });
        this.setState({
            featureMainWins: mainWins.length,
            featureMiniWins: miniWins.length
        })
    }
    
    render(){
        return (
            <div className="challengeStats">
                <div className="mini">
                    <div className="winsNumber">
                        <p className="winsNumber">{this.state.featureMainWins}</p>
                    </div>
                    <p className="challengeWins">Mini</p>
                </div>
                <div className="main">
                    <div className="winsNumber">
                        <p className="winsNumber">{this.state.featureMiniWins}</p>
                    </div>
                    <p className="season">Main</p>
                </div>
            </div>
        )
    }
}

export default ChallengeStats;