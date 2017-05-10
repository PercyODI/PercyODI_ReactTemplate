/**
 * Created by pah9qd on 5/9/2017.
 */
let React = require('react');
let ReactDOM = require('react-dom');

class App extends React.Component {
    state = {counter: 0};

    incrementCounter = (incrementValue) => {
        this.setState((prevState) => ({
            counter: prevState.counter + incrementValue
        }));
    };

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={() => {this.incrementCounter(5)}}>+5</button>
            </div>
        )
    }
}

ReactDOM.render(<App />, app);