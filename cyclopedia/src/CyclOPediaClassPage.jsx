import React from 'react';

class CyclOpediaClassPage extends React.Component {
    constructor(props) {
        super(props); 
        this.state={
            instructor: undefined,
            studentList: [],
            studentCount: 0,
            hideInstructor: false
        }
    }

    componentDidMount(){
        console.log("Component did Mount");
    }

    componentDidUpdate(){
        console.log("Component did Update");
    }

    componentWillUnmount(){
        console.log("Component did Unmount");
    }

    render() {
        console.log("Render Component");
        return(
            <div>
                hello
            </div>
        ) 

    }
}

export default CyclOpediaClassPage;



