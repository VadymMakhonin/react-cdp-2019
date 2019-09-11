import React, { Component } from 'react';

export class ChildComponent extends Component {
    render() {
        return <div>Child</div>;
    }
}

export class ParentComponent extends Component {
    render() {
        return (
            <div>
                <main>Wrapper</main>
                {this.props.children}
            </div>
        )
    }
}

export class App extends Component {
    render() {
        return (
            <ParentComponent>
                <ChildComponent />
            </ParentComponent>
        )
    }
}
