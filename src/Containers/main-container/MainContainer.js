import React from 'react';
import AddEmployee from '../add-employee/AddEmployee';
import EditEmployee from '../edit-employee/EditEmployee';
import ViewEmployee from '../view-employee/ViewEmployee';


class MainContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(<div>
            {
                this.props.view == 0 && 
                    <AddEmployee/>
                    
                    
            }

            {
                this.props.view == 1 && 
                    <ViewEmployee employees={this.props.employees}/>
            }


            {
                this.props.view == 2 && 
                    <EditEmployee />
            }

        </div>)
    }
}





export default MainContainer;