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
                <ChildComponent/>
            </div>
        )
    }
}