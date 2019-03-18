import React, { Component } from "react";
import "./Lipsyncs.css";

class Lipsyncs extends Component {
    constructor(){
        super();
        this.state = {
            lipsyncWins: 0,
            lipsyncLosses: 0,
        }
    }

    componentDidMount(){
        const lipsyncs = this.props.lipsyncs;
        const lipsyncWins = lipsyncs.filter((value) => {
            return value.won === true

        });
        const lipsyncLosses = lipsyncs.filter((value) => {
            return value.won === false

        });
        this.setState({
            lipsyncWins: lipsyncWins.length,
            lipsyncLosses: lipsyncLosses.length
        })
    }

    render(){
        return (
            <div className="lipsyncStats">
                <div className="wins">
                    <div className="winsNumber">
                        <p className="winsNumber">{this.state.lipsyncWins}</p>
                    </div>
                    <p className="wins">Wins</p>
                </div>
                <div className="losses">
                    <div className="lossesNumber">
                        <p className="lossesNumber">{this.state.lipsyncLosses}</p>
                    </div>
                    <p className="losses">Losses</p>
                </div>
            </div>
        )
    }
}

export default Lipsyncs;