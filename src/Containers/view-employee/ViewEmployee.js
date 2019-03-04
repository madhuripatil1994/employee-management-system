import React from 'react';
import {getemployees, deleteEmployee} from '../../Utils/LocalStorage';

class ViewEmployee extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            employees :[]
        }
    }
    delete(index){
        deleteEmployee(index);
        this.updateEmployees();
    }

    componentWillMount(){
       this.updateEmployees();
    }

    updateEmployees(){
        var employees = getemployees();
        this.setState({
            employees
        })
    }

    render(){
        console.log(this.props.employees);
        var that = this;
        return (
            <div>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Designation</th>
                    <th scope="col">Delete</th>
                    <th scope="col">Edit</th>
                    </tr>
                </thead>
                    <tbody>
                        {
                            this.state.employees.map(function(employee, index){
                                return (<tr key={index}>
                                    <th scope="row">1</th>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.designation}</td>
                                    <td>
                                    <button type="button" className="btn btn-danger" 
                                            onClick ={that.delete.bind(that,index)}>
                                            Delete</button>   
                                    </td>
                                    <td>
                                    <button type="button" className="btn btn-primary" >
                                            Edit</button>   
                                    </td>
                                </tr>)
                            })
                        }
                        
                    </tbody>
                </table>
                </div>
        );
    }

}

export default ViewEmployee;