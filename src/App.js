import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Components/Header';
import Footer from './Components/Footer';
import MainContainer from './Containers/main-container/MainContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      isLoggedIn: true,
      view: 0
    }
  }


  render() {
    return (
      <div className="App">
        <Header isLoggedIn={this.state.isLoggedIn}/>
          <MainContainer view={this.state.view}/> 
        <Footer /> 

      </div>
    );
  }
}

export default App;
