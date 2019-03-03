import React, { Component } from "react";
import "./SeasonSearch.css";

class SeasonSearch extends Component {
    constructor(){
        super();
    }

    render() {
        const season1 = "http://www.nokeynoshade.party/api/seasons/1/queens";
        const season2 = "http://www.nokeynoshade.party/api/seasons/2/queens";
        const season3 = "http://www.nokeynoshade.party/api/seasons/3/queens";
        const season4 = "http://www.nokeynoshade.party/api/seasons/4/queens";
        const season5 = "http://www.nokeynoshade.party/api/seasons/6/queens"
        const season6 = "http://www.nokeynoshade.party/api/seasons/7/queens";
        const season7 = "http://www.nokeynoshade.party/api/seasons/8/queens";
        const season8 = "http://www.nokeynoshade.party/api/seasons/9/queens";


        const allStars1 = "http://www.nokeynoshade.party/api/seasons/5/queens";

        return (
            <div className="wrapper">
                <div className="seasonSearchContainer">
                    <a href="#"
                        onClick={() => this.props.getQueens(season1)}
                    >
                        <div>
                            <img src="" alt=""/>
                            <p>S1</p>
                        </div>
                    </a>
                    <a href="#"
                        onClick={() => this.props.getQueens(season2)}
                    >
                        <div>
                            <img src="" alt="" />
                            <p>S2</p>
                        </div>
                    </a>
                    <a href="#"
                        onClick={() => this.props.getQueens(season3)}
                    >
                        <div>
                            <img src="" alt="" />
                            <p>S3</p>
                        </div>
                    </a>
                    <a href="#"
                        onClick={() => this.props.getQueens(season4)}
                    >
                        <div>
                            <img src="" alt="" />
                            <p>S4</p>
                        </div>
                    </a>
                    <a href="#"
                        onClick={() => this.props.getQueens(season5)}
                    >
                        <div>
                            <img src="" alt="" />
                            <p>S5</p>
                        </div>
                    </a>
                    <a href="#"
                        onClick={() => this.props.getQueens(season6)}
                    >
                        <div>
                            <img src="" alt="" />
                            <p>S6</p>
                        </div>
                    </a>
                    <a href="#"
                        onClick={() => this.props.getQueens(season7)}
                    >
                        <div>
                            <img src="" alt="" />
                            <p>S7</p>
                        </div>
                    </a>
                    <a href="#"
                        onClick={() => this.props.getQueens(season8)}
                    >
                        <div>
                            <img src="" alt="" />
                            <p>S8</p>
                        </div>
                    </a>
                    <a href="#"
                        onClick={() => this.props.getQueens(season1)}
                    >
                        <div>
                            <img src="" alt="" />
                            <p>S1</p>
                        </div>
                    </a>
                    <a href="#"
                        onClick={() => this.props.getQueens(season1)}
                    >
                        <div>
                            <img src="" alt="" />
                            <p>S1</p>
                        </div>
                    </a>
                    <a href="#"
                        onClick={() => this.props.getQueens(season1)}
                    >
                        <div>
                            <img src="" alt="" />
                            <p>S1</p>
                        </div>
                    </a>
                    <a href="#"
                        onClick={() => this.props.getQueens(season1)}
                    >
                        <div>
                            <img src="" alt="" />
                            <p>S1</p>
                        </div>
                    </a>
                    
                </div>
            </div>
        )
    }

}



export default SeasonSearch;