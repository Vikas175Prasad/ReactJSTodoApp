import React from 'react'

export const Todo = (props) => {
    return (
        <>
            <div>
                <p>
                    {props.todo.id}
                </p>
                <p>
                    {props.todo.title}
                </p>
                <p>
                    {props.todo.desc}
                </p>
                <button className="btn btn-sm btn-danger" onClick={() => { props.onDelete(props.todo) }}>Delete</button>
            </div>
            <hr></hr>
        </>
    )
}
