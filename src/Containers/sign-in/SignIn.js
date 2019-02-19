import React from 'react';

class SignIn extends React.Component {

    changeLoggedIn(isLoggedIn){
        this.props.changeLoggedIn(isLoggedIn);
    }

    render(){
        return (
            <form>
  <div className="form-group">
    <label>Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label >Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
    <label className="form-check-label">Check me out</label>
  </div>
  <button type="button" className="btn btn-primary" onClick = {this.changeLoggedIn.bind(this,true)}>Submit</button>
  </form>
        );
    }

}

export default SignIn;