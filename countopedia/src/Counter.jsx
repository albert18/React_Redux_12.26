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

    handleAttack = () => {
        // this.setState((previousState) => {
        //     return {
        //         count: previousState.count + 10,
        //     }
        // });
        this.setState((previousState) => {
            let newCount = previousState.count + Math.round(Math.random() * 10);
            return {
                count: newCount,
            }
        });
        // Old Syntaxs
        // this.setState({count: this.state.count + 10});
        // this.setState({count: this.state.count + 1});
    }

    defendAttack = () => {
        // this.setState({count: this.state.count - 1});
        this.setState((previousState) => {
            let newCount = previousState.count - Math.round(Math.random() * 10);
            return {
                //count: previousState.count - 1,
                count: newCount,
            }
        });
    }

    handleRandomPlay = () => {
        let playMode = Math.round(Math.random());
        if (playMode==0) {
            this.handleAttack();
        } else {
            this.defendAttack();
        }
    }

    handleReset = () => {
        this.setState(() => {
            return {
                count: 0,
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
            
            <button onClick={this.handleRandomPlay} style={{ width: "200px"}}>Random</button>
            <button onClick={this.handleReset} style={{ width: "200px"}}>Reset</button>

        </div>) 
    }
}