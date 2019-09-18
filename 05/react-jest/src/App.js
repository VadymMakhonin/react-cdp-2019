import React, { Component } from 'react';
import {Form} from './components/Form/Form';
import {List} from './components/List/List';
import {getTodos, addTodos, removeTodos, changeTodos} from './utils/todos';
import './App.css';


class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    this.getTodos();
  }

  getTodos = () => {
    getTodos().then(this.updateTodos);
  }

  updateTodos = (todos) => this.setState({todos});

  handlerCreate = (title) => {
    addTodos(title).then(this.updateTodos);
  };

  handlerRemove = (id) => {
    removeTodos(id).then(this.updateTodos)
  }

  handlerChange = (id, value) => {
    changeTodos(id, value).then(this.updateTodos);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Form onCreate={this.handlerCreate} />
          </div>
        </div>
        <List todos={this.state.todos} onRemove={this.handlerRemove} onChange={this.handlerChange}></List>
      </div>
    );
  }
}

export default App;
