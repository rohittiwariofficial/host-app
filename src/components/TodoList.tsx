import React from "react";
import TodoItem from "./TodoItem";
import Filter from "./Filter";
import '../style.css';

interface TodoListProps {
    todos: {
        id: number,
        description: string,
        completed: boolean
    }[],
    toggleTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ( { todos, toggleTodo } ) => {

    const [filter, setFilter] = React.useState<'all' | 'active' | 'completed'>('all');

    const filteredTodos = React.useMemo ( () => {
        switch(filter) {
            case 'active':
                return todos.filter( todo => !todo.completed );
            case 'completed':
                return todos.filter( todo => todo.completed );
            default:
                return todos;
        }
    }, [todos, filter]);

    return (

        <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
            <h3 className="text-2xl mb-4">Todo List</h3>
            <Filter filter={filter} setFilter={setFilter} />
            <br />

            {filteredTodos.map(todo => (
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
            ))}
        </div>

    )
};

export default TodoList;