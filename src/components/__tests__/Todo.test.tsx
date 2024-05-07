import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom";
import Todo from '../Todo';
import TodoList from '../TodoList';
import Filter from '../Filter';

describe('Todo component', () => {
  it('renders without crashing', () => {
    render(<Todo />);
  });

  it('adds todo when Enter key is pressed in the input field', () => {
    const { getByPlaceholderText, getByText } = render(<Todo />);
    const input = getByPlaceholderText('Enter todo description') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'New todo' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    expect(getByText('New todo')).toBeInTheDocument();
  });

  it('toggles todo completion status when clicked', () => {
    const { getByText } = render(<Todo />);
    const todo = getByText('New todo') as HTMLInputElement;
    fireEvent.click(todo);
    expect(todo).toHaveStyle('text-decoration: line-through');
    fireEvent.click(todo);
    expect(todo).not.toHaveStyle('text-decoration: line-through');
  });

  it('stores todos in localStorage after creation', () => {
    const { getByPlaceholderText } = render(<Todo />);
    const input = getByPlaceholderText('Enter todo description') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'New todo' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    expect(localStorage.getItem('todos')).not.toBeNull();
  });

  it('loads todos from localStorage on component mount', () => {
    const todos = [{ id: 1, description: 'Test todo', completed: false }];
    const getItemSpy = jest.spyOn(Storage.prototype, 'getItem').mockReturnValueOnce(JSON.stringify(todos));
    render(<Todo />);
    expect(getItemSpy).toBeCalledWith('todos');
  });

  it('renders Filter component', () => {
    const setFilterMock = jest.fn();
    const { getByTestId } = render(<Filter filter="all" setFilter={setFilterMock} />);
    const selectElement = getByTestId('filter-select');

    expect(selectElement).toBeInTheDocument();
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
