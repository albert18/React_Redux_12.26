import React from 'react';
import { getRandomUser } from "./Utility/api";

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

    componentDidMount = async() => {
        debugger;
        const response = await getRandomUser();
        console.log(response);
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



