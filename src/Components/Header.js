import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        console.log('this.props', this.props);
        var a = 10, b = 20;
        return(<nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand"> Employee Mangment</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {
                          this.props.isLoggedIn && 
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Add Employee <span className="sr-only">(current)</span></a>
                            </li>

                        }
                        {
                            this.props.isLoggedIn && 
                            <li className="nav-item">
                                <a className="nav-link" href="#">View Employee</a>
                            </li>
                        }
                        
                       
                        <li className="nav-item" style={{'float': 'right'}}>

                        {
                            
                            
                                this.props.isLoggedIn
                                ? <a className="nav-link" href="#">Sign Out</a>
                                : <a className="nav-link" href="#">Sign In</a>
                            
                            
                          
                        }
                          </li>
                    </ul>
                    </div>
                </nav>)
    }
}


export default Header;