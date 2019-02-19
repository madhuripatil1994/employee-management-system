import React from 'react';

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



    changeLoggedIn(isLoggedIn){
        console.log("this,state", this.state);
        if(this.isValiadLogIn(this.state.username, this.state.password)) {
            this.props.changeLoggedIn(isLoggedIn, this.state);
        } else {
            alert("Invalid credentials")
        }
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
                    
                    <input type="email"
                        className="form-control" placeholder="Enter email"
                        onChange={this.onChange.bind(this, 'username')}>
                    </input>

                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
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
                <button type="button" className="btn btn-primary" onClick = {this.changeLoggedIn.bind(this,true)}>Submit</button>
                </form>
        );
    }

}

export default SignIn;