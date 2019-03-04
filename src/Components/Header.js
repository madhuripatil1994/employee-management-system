import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    changeLoggedIn(isLoggedIn){
        this.props.changeLoggedIn(isLoggedIn);
    }
    render() {

        console.log('this.props', this.props);
       
        return(<nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand"> Employee Mangment</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <Link to="/add-employee">
                        <li className="nav-item active">
                            <a className="nav-link cursor-pointer" > Add Employee </a>
                        </li>
                        </Link>

                        <Link to="/view-employee">
                        <li className="nav-item">
                            <a className="nav-link cursor-pointer" >View Employee</a>
                        </li>
                        </Link>
                       
                        <li className="nav-item" style={{'float': 'right'}}>

                        {
                            
                            
                                this.props.isLoggedIn
                                ? <a className="nav-link cursor-pointer" onClick = {this.changeLoggedIn.bind(this,false)} >
                                        Sign Out</a>
                                : 
                                <Link to="/sign-in">
                                <a className="nav-link" href="#">Sign In</a>
                                </Link>
                            
                          
                        }
                        </li>
                    </ul>
                    </div>
                </nav>)
    }
}


export default Header;