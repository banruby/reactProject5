import React, { Component } from 'react';
import Axios from 'axios';
import './App.css'; //compiled with scss

import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";
import QueenCard from "./QueenCard/QueenCard.js";
import FeatureQueen from "./FeatureQueen/FeatureQueen.js";


class App extends Component {
  constructor(){
    super();
    this.state = {
      queens: [],
      featureQueen: {}
    }
  }

  componentDidMount() {
    this.getQueens();
  }

  getQueens = () => {
    Axios({
      method: "GET",
      url: "http://www.nokeynoshade.party/api/queens?limit=3&offset=55",
      dataResponse: "json"
    }).then(response => {
      response = response.data;
      console.log(response);
      this.setState({
        queens: response
      })
    })
  }

  displayFeature = (selectedQueenID) => {
    Axios({
      method: "GET",
      url: `http://www.nokeynoshade.party/api/queens/${selectedQueenID}/`,
      dataResponse: "json"
    }).then(response => {
      response = response.data;
      console.log(response);
      this.setState({
        featureQueen: response
      })
    })
  }
  
  render() {
    return (
      <div className="App">
          <Header />
          <FeatureQueen
            feature={this.state.featureQueen}
          />
          <div className="wrapper queenCardWrapper">
          {this.state.queens.map(queen => {
            return (
              <QueenCard 
                key={queen.id}
                id={queen.id}
                name={queen.name}
                imageSrc={queen.image_url}
                displayFeature={this.displayFeature}
              />
            )
          })}
          </div>
          <Footer />
      </div>
    );
  }
}

export default App;
