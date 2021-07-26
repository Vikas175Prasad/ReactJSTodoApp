import React from 'react'
import { Todo } from './Todo'

export const Todos = (props) => {
    return (
        <div className="container" >
            <h3 className="text-center my-3">
                Todos List
            </h3>
            {props.todos.length !== 0 ?
                props.todos.map((todo) => {
                    return <Todo todo={todo} key={todo.id} onDelete={props.onDelete} />
                }) : "no todo to display"
            }
        </div>
    )


}
