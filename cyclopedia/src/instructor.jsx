import React from "react";

class Instructor extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        //debugger;
        return (
            <div>
                Name: {this.props.instructor.name}
                <br /> 
                Email: {this.props.instructor.email}
                <br /> 
                Phone: {this.props.instructor.phone}
            </div>
        )
    }
}

export default Instructor;