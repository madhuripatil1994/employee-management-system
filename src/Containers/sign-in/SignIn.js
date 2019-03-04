import React from 'react';
import {applicationUsers} from '../../Utils/LocalStorage';

class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    onChange(key, event) {
        
        this.setState({
            [key]: event.currentTarget.value
        })
    }

    componentWillMount(){
        applicationUsers();
    }

    changeLoggedIn(){
        
    }

    isValiadLogIn(username, password) {
        if(username == 'madhuri' && password == 'madhu') {
            return true;
        }
        return false;
    }

    render(){
        return (
            <form>
                <div className="form-group">
                    <label>Email address</label>
                    
                    <input type="text"
                        className="form-control" placeholder="Enter email"
                        onChange={this.onChange.bind(this, 'username')}>
                    </input>
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input 
                        type="password"
                        className="form-control" 
                         placeholder="Password"
                         onChange={this.onChange.bind(this, 'password')}>
                    </input>
                </div>
                <button type="button" className="btn btn-primary" onClick = {this.changeLoggedIn.bind(this)}>Submit</button>
                </form>
        );
    }

}

export default SignIn;