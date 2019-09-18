import {getId} from './common';

let todos = [{title: 'First task', complited: true, id: getId(), created: Date.now()}];

export const getT = () => todos;

export const getTodos = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve(todos);
    });
});

export const addTodos = (title) => new Promise((resolve) => {
    setTimeout(() => {
        todos.push({
            title,
            created: Date.now(),
            complited: false,
            id: getId()
        });
        resolve(todos);   
    });
});

export const removeTodos = (id) => new Promise((resolve) => {
    setTimeout(() => {
        todos = todos.filter(todo => todo.id !== id);
        resolve(todos);   
    });
});

export const changeTodos = (id, complited) => new Promise((resolve) => {
    setTimeout(() => {
        todos = todos.map(todo => todo.id === id ? {...todo, complited} : todo);
        resolve(todos);   
    });
});