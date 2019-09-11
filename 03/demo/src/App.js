import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actions from './redux/actions'

class App extends React.Component {

    render() {
        const {
            counter,
            increment,
            asyncIncrement,

        } = this.props;

        return (
            <div className="App">
                <h1>COUNTER</h1>
                <button
                    onClick={() => {
                        increment();
                    }}>
                    INCREMENT
                </button>
                <Button
                    name={{ name: 'name' }}
                    onClick={() => {
                        increment(100);
                    }}>
                    INCREMENT 100
                </Button>
                <p>
                    state of counter: <span>{counter}</span>
                </p>
                <button
                    onClick={() => {
                        increment(-100);
                    }}>
                    DECREMENT 100
                </button>
                <button onClick={() => asyncIncrement(100)}>ASYNC INCREMENT 100</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    counter: state.counter
});

const mapDispatchToProps = {
    increment: actions.increment,
    asyncIncrement: actions.asyncIncrement
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
