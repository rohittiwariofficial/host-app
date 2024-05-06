import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import '../style.css';

const Todo: React.FC = () => {
    const [todos, setTodos] = useState<{
        id: number;
        description: string;
        completed: boolean
    }[]>([]);

    useEffect(() => {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    useEffect(() => {
        if (todos && todos.length) {
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    }, [todos]);

    const toggleTodo = (id: number) => {
        setTodos(prevTodos => 
            prevTodos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const handleTodoCreation = (description: string) => {
        if (!description.trim()) {
            // Don't add empty todos
            return;
        }
        const newTodo = {
            id: Date.now(),
            description,
            completed: false
        };
        setTodos(prevTodos => [...prevTodos, newTodo]);
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
            <h1 className="text-4xl mb-8 text-center font-bold text-blue-600">Todo App</h1>
            
            <div className="mb-4">
                <input 
                    type="text" 
                    placeholder="Enter todo description" 
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleTodoCreation((e.target as HTMLInputElement).value);
                            (e.target as HTMLInputElement).value = '';
                        }
                    }}
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                    required
                />
            </div>

            <TodoList todos={todos} toggleTodo={toggleTodo} />
        </div>
    );
};

export default Todo;
