import React from 'react';

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(<div>
            {
                this.props.view == 0 && 
                    <b> Add Employee </b>
            }

            {
                this.props.view == 1 && 
                    <b> List Employee </b>
            }


            {
                this.props.view == 2 && 
                    <b> Edit Employee </b>
            }

        </div>)
    }
}





export default MainContainer;