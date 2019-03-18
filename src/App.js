import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';
import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";
import QueenCard from "./QueenCard/QueenCard.js";
import FeatureQueen from "./FeatureQueen/FeatureQueen.js";
import SeasonSearch from "./SeasonSearch/SeasonSearch.js";


class App extends Component {
  constructor(){
    super();
    this.state = {
      queens: [],
      featureClick: false,
      featureQueen: {}
    }
  }

  getQueens = (url) => {
    Axios({
      method: "GET",
      url: url,
      dataResponse: "json"
    }).then(response => {
      response = response.data;
      this.setState({
        queens: response,
        featureClick: false
      })
    })
  }

  displayFeature = (selectedQueenID) => {
    Axios({
      method: "GET",
      url: `https://www.nokeynoshade.party/api/queens/${selectedQueenID}/`,
      dataResponse: "json"
    }).then(feature => {
      feature = feature.data;
      this.setState({
        featureClick: true,
        featureQueen: feature
      })
    })
  }

  clearFeature = (value) => {
    this.setState({
      featureClick: value,
      featureQueen: {}
    })
  }

  render() {
    return (
      <div className="App">
          <Header />
          { this.state.featureClick ?
              <FeatureQueen
                feature={this.state.featureQueen}
                featureClick={this.state.featureClick}
                clearFeature={this.clearFeature}
              />
              : null
          }
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
          <SeasonSearch
            getQueens={this.getQueens}
          />
          <Footer />
      </div>
    );
  }
}

export default App;
