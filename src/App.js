import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Components/Header';
import Footer from './Components/Footer';
import MainContainer from './Containers/main-container/MainContainer';
import SignIn from './Containers/sign-in/SignIn';


class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      isLoggedIn: true,
      view: 0,
      employees: [{
        name: "Madhuri",
        lastname: "Patil",
        designation: "Project Manager"
      }, {
        name: "Ashwini",
        lastname: "Patil",
        designation: 'Tech Lead'
      }]
    }
  }

  addEmployee(employee) {
    
  }

  changeView(view) {
    this.setState({
      view: view
    });
  }

  changeLoggedIn(isLoggedIn, state){
    console.log("state", state);
    this.setState(
      {
        isLoggedIn : isLoggedIn
      }
    )
  }

  render() {
    return (
      <div className="App">
       
        <Header
            isLoggedIn={this.state.isLoggedIn} 
            changeView={this.changeView.bind(this)}
            changeLoggedIn={this.changeLoggedIn.bind(this)}
        />

        <div className="row">
          <div className="col-sm-3">

          </div>
          <div className="col-sm-6">
          {

              this.state.isLoggedIn ? 
                <MainContainer
                  view={this.state.view}
                  employees={this.state.employees}/> 

              : <SignIn changeLoggedIn = {this.changeLoggedIn.bind(this)}/>
          }
          </div>
        </div>
        
        
        
        <Footer /> 

      </div>
    );
  }
}

export default App;
