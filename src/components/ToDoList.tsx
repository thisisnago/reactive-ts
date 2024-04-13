import React from "react";
import './TodoList.css';

interface TodoListProps {
    items: { id: string; text: string }[];
    todoDeleteHandler: (todoId: string) => void;
}

const TodoList = ({ items, todoDeleteHandler }: TodoListProps) => {
    return (
        <ul>
            {items.map((todo) => (
                <li key={todo.id}>
                    <span>{todo.text}</span>
                    {/* <button onClick={() => todoDeleteHandler(todo.id)}>DELETE</button> */}
                    <button onClick={todoDeleteHandler.bind(null, todo.id)}>DELETE</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
