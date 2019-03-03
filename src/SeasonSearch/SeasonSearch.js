import React, { Component } from "react";
import "./SeasonSearch.css";

class SeasonSearch extends Component {
    render() {
        const season1 = "https://www.nokeynoshade.party/api/seasons/1/queens";
        const season2 = "https://www.nokeynoshade.party/api/seasons/2/queens";
        const season3 = "https://www.nokeynoshade.party/api/seasons/3/queens";
        const season4 = "https://www.nokeynoshade.party/api/seasons/4/queens";
        const season5 = "https://www.nokeynoshade.party/api/seasons/6/queens"
        const season6 = "https://www.nokeynoshade.party/api/seasons/7/queens";
        const season7 = "https://www.nokeynoshade.party/api/seasons/8/queens";
        const season8 = "https://www.nokeynoshade.party/api/seasons/9/queens";
        const season9 = "https://www.nokeynoshade.party/api/seasons/11/queens";
        const season10 = "https://www.nokeynoshade.party/api/seasons/13/queens";
        const allStars1 = "https://www.nokeynoshade.party/api/seasons/5/queens";
        const allStars2 = "https://www.nokeynoshade.party/api/seasons/10/queens";
        const allStars3 = "https://www.nokeynoshade.party/api/seasons/12/queens";
        const allStars4 = "https://www.nokeynoshade.party/api/seasons/14/queens";
        const winners = "https://www.nokeynoshade.party/api/queens/winners";

        return (
            <div className="wrapper">
                <div className="searchContainer">
                    <a href="#"
                        onClick={() => this.props.getQueens(season1)}>
                        <p>Season One</p>
                    </a>
                    <a href="#"
                        onClick={() => this.props.getQueens(season2)}>
                        <p>Season Two</p>
                    </a>
                    <a href="#"
                        onClick={() => this.props.getQueens(season3)}>
                        <p>Season Three</p>
                    </a>
                    <a href="#"
                        onClick={() => this.props.getQueens(season4)}>
                        <p>Season Four</p>
                    </a>
                    <a href="#"
                        onClick={() => this.props.getQueens(season5)}>
                        <p>Season Five</p>
                    </a>
                    <a href="#"
                        onClick={() => this.props.getQueens(season6)}>
                        <p>Season Six</p>
                    </a>
                    <a href="#"
                        onClick={() => this.props.getQueens(season7)}>
                        <p>Season Seven</p>
                    </a>
                    <a href="#"
                        onClick={() => this.props.getQueens(season8)}>
                        <p>Season Eight</p>
                    </a>
                    <a href="#"
                        onClick={() => this.props.getQueens(season9)}>
                        <p>Season Nine</p>
                    </a>
                    <a href="#"
                        onClick={() => this.props.getQueens(season10)}>
                        <p>Season Ten</p>
                    </a>
                    <a href="#"
                        onClick={() => this.props.getQueens(allStars1)}>
                        <p>All Stars One</p>
                    </a>
                    <a href="#"
                        onClick={() => this.props.getQueens(allStars2)}>
                        <p>All Stars Two</p>
                    </a>
                    <a href="#"
                        onClick={() => this.props.getQueens(allStars3)}>
                        <p>All Stars Three</p>
                    </a>
                    <a href="#"
                        onClick={() => this.props.getQueens(allStars4)}>
                        <p>All Stars Four</p>
                    </a>
                    <a href="#"
                        onClick={() => this.props.getQueens(winners)}>
                        <p>Winners</p>
                    </a>
                </div>
            </div>
        )
    }
}

export default SeasonSearch;