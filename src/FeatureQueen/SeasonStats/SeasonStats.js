import React, { Component } from "react";
import "./SeasonStats.css";

class SeasonStats extends Component {
    render(){
        return (
            <div>
            {this.props.seasons.map((season, i) => {
                return (
                    <div className="seasonStats" key={i}>
                        <div className="season">
                            <div className="seasonNumber">
                                <p className="seasonNumber">{season.seasonNumber}</p>
                            </div>
                            <p className="season">Season</p>
                        </div>
                        <div className="place">
                            <div className="placeNumber">
                                <p className="placeNumber">{season.place}</p>
                            </div>
                            <p className="season">Place</p>
                        </div>
                    </div>
                )
            })}
            </div>
        )
    }
}

export default SeasonStats;