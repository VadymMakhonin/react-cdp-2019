import React, { Component } from 'react';


export class Form extends Component {

    input = null;

    createHandler = () => {
        if (this.input.value) {
            this.props.onCreate(this.input.value);
        }
    }

    render() {
        return (
            <div className="input-group mb-3">
                <input type="text" className="form-control" ref={ref => this.input = ref} />
                <div className="input-group-prepend">
                    <button className="btn btn-outline-secondary" onClick={this.createHandler}>Добавить</button>
                </div>
            </div>
        );
    }
}
