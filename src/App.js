import React, { Component } from 'react';
import './App.css';
import SearchBar from './containers/search_bar';
import Weatherlist from './containers/weather_list';



class App extends Component {

  render() {
    return (
      <div className="container" style={{marginTop:"5%"}}>
        <SearchBar/>
        <Weatherlist/>

      </div>
    );
  }
}



export default App;
 