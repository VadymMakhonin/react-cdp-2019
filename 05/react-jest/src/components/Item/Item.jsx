import React from 'react';
import { dateFormater } from './../../utils/common';


export const Item = ({ todo, onRemove, onChange }) => (
    <div className="row" key={todo.id}>
        <div className="col-1">
            <input type="checkbox" checked={todo.complited} onChange={(event) => {
                onChange(todo.id, event.target.checked);
            }} />
        </div>
        <div className="col-1">{todo.id}</div>
        <div className="col-7">{todo.title}</div>
        <div className="col-1">{dateFormater(todo.created)}</div>
        <div className="col-2 text-right">
            <button className="btn btn-danger" onClick={() => { onRemove(todo.id) }}>
                Remove
                </button>
        </div>

    </div>
);