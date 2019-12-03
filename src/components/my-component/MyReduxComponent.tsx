import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

export default function MyReduxComponent({ onCountChange: onTodoChange = (todo: string[]) => { } }) {

    let todos: string[] = useSelector((state: any) => state.todos);
    let dispatch = useDispatch();

    useEffect(() => {
        onTodoChange(todos);
    }, [todos]);

    return (
        <div>
            <button
                onClick={() => {
                    dispatch({ action: 'ADD_TODO', text: "new text added"});
                }}>
                Increment Count
            </button>
            {todos.map( (todo, i) => <div key={"todo-" + i}>{todo}</div>)}
        </div>
    );
}