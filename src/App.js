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
        firstName: "Madhuri",
        lastName: "Patil",
        designation: "Project Manager"
      }]
    }
  }

  delete(index){
    var updatedArray = [];

    this.state.employees.forEach(function(employee, originalIndex){
    console.log("index-->", index);
    console.log("originalIndex-->", originalIndex);

        if(index != originalIndex){
          updatedArray.push(employee);
        }
    })
    this.setState({
      employees :updatedArray
    });
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
      

        <div className="row">
          <div className="col-sm-3">

          </div>
          <div className="col-sm-6">
          {

              this.state.isLoggedIn ? 
                <MainContainer
                  view={this.state.view}
                  employees={this.state.employees}
                  changeView = {this.changeView.bind(this)}
                  delete = {this.delete.bind(this)}/> 

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
