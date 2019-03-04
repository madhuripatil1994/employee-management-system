import React from 'react';
import AddEmployee from '../add-employee/AddEmployee';
import EditEmployee from '../edit-employee/EditEmployee';
import ViewEmployee from '../view-employee/ViewEmployee';
import SignIn from '../sign-in/SignIn';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../Components/Header';

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Router>
            <div>
                <Header />
                <Route path="/add-employee" component={AddEmployee}></Route>
                <Route path="/edit-employee" component={EditEmployee}></Route>
                <Route path="/view-employee" component={ViewEmployee}></Route>
                <Route path="/sign-in" component={SignIn}></Route>
            </div>
        </Router>
        );
    }
}


export default MainContainer;