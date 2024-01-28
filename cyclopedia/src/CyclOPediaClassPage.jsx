import React from 'react';
import { getRandomUser } from "./Utility/api";

class CyclOpediaClassPage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            instructor: undefined,
            studentlist:[],
            studentCount:0,
            hideInstructor:false,
        }
    }

    componentDidMount = async() => {
        const response = await getRandomUser();
        this.setState(() => {
            return {
                instructor: {
                    name: response.data.first_name + " " + response.data.last_name,
                    email: response.data.email,
                    phone: response.data.phone_number,
                },
            };
        });
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
    }

    render() {
        return(
            <div>
                {this.state.instructor && (
                    <div className='p-3'>
                        <span className='h4 text-success'>Instructor</span>
                        <i className='bi bi-toggle-off  btn btn-success btn-sm'></i>
                        <br /> 
                        Name: {this.state.instructor.name}
                        <br /> 
                        Email: {this.state.instructor.email}
                        <br /> 
                        Phone: {this.state.instructor.phone}
                    </div>
                )}
                <div className='p-3'>
                    <span className='h4 text-success'>Students</span>
                    <div>Student Count : {this.state.studentCount}</div>
                    <button className='btn btn-success btn-sm'>Add Student</button>
                     &nbsp;   
                    <button className='btn btn-danger btn-sm'>remove Student</button>
                </div>
            </div>
        );
    }

}

export default CyclOpediaClassPage;



