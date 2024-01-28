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
            inputName: "",
            inputFeedback: "",
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
        console.log("DID UPDATE");
    }

    componentWillUnmount() {
        console.log("DID UNMOUNT");
    }

    handleAddStudent = () => {
        this.setState((prevState) => {
            return {
                studentCount: prevState.studentCount + 1,
            }
        });
    }

    handleRemoveStudent = () => {
        this.setState((prevState) => {
            return {
                studentCount: 0,
            }
        });
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
                    <span className='h4 text-success'>Feedback</span>
                    <br />
                    <input className='form-control' 
                        value={this.state.inputName}
                        onChange={(e)=> {
                            this.setState({inputName: e.target.value });
                        }}
                        type="text" 
                        placeholder='Name...'/>
                    <br />
                    <textarea className='form-control' 
                        value={this.state.inputFeedback}
                        onChange={(e)=> {
                            this.setState({inputFeedback: e.target.value });
                        }}
                        placeholder='Feedback...'>

                    </textarea>
                </div>
                <div className='p-3'>
                    <span className='h4 text-success'>Students</span>
                    <div>Student Count : {this.state.studentCount}</div>
                    <button className='btn btn-success btn-sm' onClick={this.handleAddStudent}>Add Student</button>
                     &nbsp;   
                    <button className='btn btn-danger btn-sm' onClick={this.handleRemoveStudent}>Remove All Student</button>
                </div>
            </div>
        );
    }
}

export default CyclOpediaClassPage;


