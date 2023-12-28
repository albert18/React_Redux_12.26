import React from "react";

export default class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.handleAttack = this.handleAttack.bind(this);
        this.defendAttack = this.defendAttack.bind(this);
        this.state = {
            count: 0,
            gameStatus: "",
            lastPlay: "",
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
                gameStatus: newCount > 10 ? "You Won!!" : previousState.gameStatus,
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
                gameStatus: newCount < -10 ? "You Lost!!" : previousState.gameStatus,
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

    // lastPlay = () => {
    //     this.setState(() => {
    //         return {
    //             count: 0,
    //         }
    //     });
    // }

    // handleStatus = () => {
    //     this.setState(() => {
    //         return {
    //             count: 0,
    //         }
    //     });
    // }

    render() {
        return(
        <div className="row text-white">
            <h1>Game Score: {this.state.count} </h1>
            <p>You win a +10 points and lose at -10 points!</p>
            <p>Lets Play:</p>
            <h3>Game Status: {this.state.gameStatus}</h3>

            <button onClick={this.handleAttack} style={{ width: "200px"}}>+1</button>
            <button onClick={this.defendAttack} style={{ width: "200px"}}>-1</button>
            
            <button className="btn btn-secondary" onClick={this.handleRandomPlay} style={{ width: "200px"}}>Random</button>
            <button className="btn btn-warning" onClick={this.handleReset} style={{ width: "200px"}}>Reset</button>

        </div>) 
    }
}