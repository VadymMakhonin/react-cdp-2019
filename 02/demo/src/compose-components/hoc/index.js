import React, {Component} from 'react';

import {Contacts} from './contacts';

export class HOCExample extends Component {
    state = {contacts: []};

    componentDidMount() {
        fetch('https://randomuser.me/api/?results=10')
            .then((response) => response.json())
            .then(({results}) => this.setState({contacts: results}));
    }

    render() {
        return (
            <div className="App">
                <Contacts contacts={this.state.contacts} />
            </div>
        );
    }
}