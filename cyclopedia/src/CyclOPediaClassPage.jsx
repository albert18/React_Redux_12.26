import React from 'react';
import { getRandomUser } from "./Utility/api";
import Instructor from './instructor';

class CyclOpediaClassPage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            instructor: undefined,
            studentlist:[],
            studentCount:0,
            hideInstructor:true,
            inputName: "",
            inputFeedback: "",
        }
    }

    componentDidMount = async() => {
        if(JSON.parse(localStorage.getItem("cyclopediaState"))) {
            this.setState(JSON.parse(localStorage.getItem("cyclopediaState")));
        } else {
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
    }

    componentDidUpdate = async (previousProps, prevState) => {
        localStorage.setItem("cyclopediaState", JSON.stringify(this.state) );
        if(prevState.studentCount < this.state.studentCount) {
            const response = await getRandomUser();
            this.setState((prevState) => {
                return {
                    studentlist: [
                        ...prevState.studentlist, {
                            name: response.data.first_name + " " + response.data.last_name,
                        },
                    ],
                };
            });
        } else if(prevState.studentCount > this.state.studentCount) {
            this.setState((prevState) => {
                return {
                    studentlist: [],
                };
            });
        }
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

    handleToggleInstructor = () => {
        debugger;
        this.setState((prevState) => {
            return {
                hideInstructor: !prevState.hideInstructor,
            }
        });
    }
    
    render() {
        return(
            <div>
                <div className='p3'>
                    <span className='h4 text-success'>Instructor</span>
                    <i className={`bi ${this.state.hideInstructor ? "bi-toggle-off  btn btn-success btn-sm" : "bi-toggle-on  btn btn-success btn-sm"} `} 
                    onClick={this.handleToggleInstructor}></i>
                    {!this.state.hideInstructor && this.state.instructor ? (
                        <Instructor instructor={this.state.instructor} />   
                    ) : null}
                </div>
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
                    
                    {this.state.studentlist.map((student, index) => {
                        return(
                            <div className='text-white' key={index}>{student.name}</div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default CyclOpediaClassPage;



