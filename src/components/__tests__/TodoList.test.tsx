import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom";
import TodoList from '../TodoList';

describe('TodoList component', () => {
  it('renders without crashing', () => {
    render(<TodoList todos={[]} toggleTodo={() => {}} />);
  });

  it('renders TodoList component', () => {
    const todos = [
      { id: 1, description: 'Todo 1', completed: false },
      { id: 2, description: 'Todo 2', completed: true }
    ];
    const toggleTodoMock = jest.fn();
    const { getByText, getByTestId } = render(<TodoList todos={todos} toggleTodo={toggleTodoMock} />);
    const todo1 = getByText('Todo 1');
    const todo2 = getByText('Todo 2');
    const filterSelect = getByTestId('filter-select');

    expect(todo1).toBeInTheDocument();
    expect(todo2).toBeInTheDocument();
    expect(filterSelect).toBeInTheDocument();
  });

});
