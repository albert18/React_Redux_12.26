import React from "react";

export default class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.handleAttack = this.handleAttack.bind(this);
        this.defendAttack = this.defendAttack.bind(this);
        this.state = {
            count: 0
        }
    }

    handleAttack() {
        // this.setState((previousState) => {
        //     return {
        //         count: previousState.count + 10,
        //     }
        // });
        this.setState((previousState) => {
            return {
                count: previousState.count + 1,
            }
        });
        // Old Syntaxs
        // this.setState({count: this.state.count + 10});
        // this.setState({count: this.state.count + 1});
    }

    defendAttack() {
        // this.setState({count: this.state.count - 1});
        this.setState((previousState) => {
            return {
                count: previousState.count - 1,
            }
        });
    }

    render() {
        return(
        <div className="row text-white">
            <h1>Game Score: {this.state.count} </h1>
            <p>You win a +10 points and lose at -10 points!</p>
            <p>Lets Play:</p>
            <h3>Game Status:</h3>
            
            <button onClick={this.handleAttack} style={{ width: "200px"}}>+1</button>
            <button onClick={this.defendAttack} style={{ width: "200px"}}>-1</button>
        </div>) 
    }
}