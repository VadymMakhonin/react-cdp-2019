import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.input = React.createRef();
    }

    componentDidMount() {
        this.input.current.focus();
    }

    state = {
        value: ''
    };

    onChange = e => {
        this.setState( { value: e.target.value } );
    };

    onClick = () => {
        alert(this.input.current.value);
    };

    render() {
        return (
            <div className="App">
                <input ref={this.input}/>
                <button onClick={this.onClick}>click</button>
            </div>
        );
    }
};

export default App;
