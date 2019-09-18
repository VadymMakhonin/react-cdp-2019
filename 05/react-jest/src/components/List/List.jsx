import React from 'react';
import {Item} from './../Item/Item';

export const List = ({ todos, onRemove, onChange }) => (todos.length ? todos.map((todo) => (
    <Item todo={todo} onRemove={onRemove} onChange={onChange}/>
)) : 'Todos is empty');