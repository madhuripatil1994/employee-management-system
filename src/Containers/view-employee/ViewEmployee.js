import React from 'react';

class ViewEmployee extends React.Component {
    
    delete(index){
        this.props.delete(index);
    }

    render(){
        console.log(this.props.employees);
        var that = this;
        return (
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
                            this.props.employees.map(function(employee, index){
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
        );
    }

}

export default ViewEmployee;