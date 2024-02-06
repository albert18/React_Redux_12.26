import { useState } from "react";

const Counter = () => {
    //const [counter, setCounter] = useState(10);  :: The different is when it execution, check console.log to see whats going on.
    const [counterState, setCounterState] = useState(() => {
        console.log("hello")
        //return 10;
        return {counter: 10};
    });

    function incrementCounter() {
        setCounterState((prevState) => {
            //return prevState + 1;
            return { counter: prevState.counter + 1 };
        });
    };

    function decrementCounter() {
        setCounterState((prevState) => {
            return { counter: prevState.counter - 1 };
        });
    };
    return (
        <div className="col-12 col-md-2 offset-md-4 border text white">
            <span className="h2 pt-4 m-2 text-white-50">Fun Counter</span>
            <button onClick={incrementCounter} className="btn btn-success m-1">+1</button>
            <button onClick={decrementCounter} className="btn btn-danger m-1">-1</button>
            <br />
            <span className="h4">
                Counter: &nbsp;
                <span className="text-success">{counterState.counter}</span>
            </span>
        </div>
    );
};

export default Counter;
