import React, {Component} from 'react';

const Context = React.createContext({});
const ...

export class Counter extends Component {
    state = {
        counter: 0
    };

    increment = () => {
        this.setState({counter: this.state.counter + 1});
    };

    decrement = () => {
        this.setState({counter: this.state.counter - 1});
    };

    render() {
        const data = {
            counter: this.state.counter,
            increment: this.increment,
            decrement: this.decrement
        };

        return (
            <NewContext.provider
            <Context.Provider value={data}>
                {this.props.render(data)}
            </Context.Provider>
        );
    }
}

const Buttons = () => (
    <Context.Consumer>
        {
            ({ increment, decrement }) => (
                <div>
                    <button onClick={increment}>increment</button>
                    <button onClick={decrement}>decrement</button>
                </div>
            )
        }
    </Context.Consumer>

);

export class App extends Component {
    render() {
        return (
            <Counter render={
                ({counter}) => (
                    <React.Fragment>
                        <div>{counter}</div>
                        <Buttons />
                    </React.Fragment>
                )
            }/>
        )
    }
}