import React from 'react';

class AddEmployee extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            employee : {
                firstName :'',
                lastName: '',
                designation: ''
            }
        }
    }

    onChange(key, event) {
        var currentEmployee = this.state.employee;
        currentEmployee[key] = event.currentTarget.value;
        this.setState({
          employee: currentEmployee
        })
    }

    addEmployee(){
        this.props.addEmployee(this.state.employee);
        this.props.changeView(1);
    }

    render(){
        return (
            <form>
                <div className="form-group">
                    <label>First Name</label>
                    
                    <input type="text"
                        className="form-control" placeholder="Enter First Name"
                        onChange={this.onChange.bind(this, 'firstName')}>
                    </input>

                </div>
                <div className="form-group">
                    <label >Last Name</label>
                    <input 
                        type="text"
                        className="form-control" 
                         placeholder="Enter Last Name"
                         onChange={this.onChange.bind(this, 'lastName')}>
                    </input>
                </div>
                <div className="form-group">
                <label >Designation</label>
                <input 
                    type="text"
                    className="form-control" 
                     placeholder="Enter Designation"
                     onChange={this.onChange.bind(this, 'designation')}>
                </input>
            </div>
                <button type="button" className="btn btn-primary" onClick = {this.addEmployee.bind(this)}>
                    Add Employee</button>
                </form>
        );
    }

}

export default AddEmployee;