import React from "react";
import '../style.css';

interface TodoItemProps {
    todo: {
        id: number;
        description: string,
        completed: boolean
    };
    toggleTodo: (id: number) => void;
}
const TodoItem: React.FC<TodoItemProps> = ( { todo, toggleTodo }) => {

    return (
        <div className="flex items-center py-2 border-b">
            <input type="checkbox" checked={todo.completed} onChange={ () => toggleTodo(todo.id) } className="mr-2" />

            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} className="text-lg" onClick={() => { toggleTodo(todo.id) }}>
                {todo.description}
            </span>

        </div>
    )
};

export default TodoItem;