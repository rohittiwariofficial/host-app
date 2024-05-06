import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom";
import Todo from '../Todo';
import '../style.css';

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

});
