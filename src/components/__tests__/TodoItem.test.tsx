import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom";
import TodoItem from '../TodoItem';

describe('TodoItem component', () => {
  it('renders todo description', () => {
    const todo = { id: 1, description: 'Test Todo', completed: false };
    const toggleTodoMock = jest.fn();
    const { getByText } = render(<TodoItem todo={todo} toggleTodo={toggleTodoMock} />);

    const description = getByText('Test Todo');
    expect(description).toBeInTheDocument();
  });

  it('toggles todo completion status when checkbox is clicked', () => {
    const todo = { id: 1, description: 'Test Todo', completed: false };
    const toggleTodoMock = jest.fn();
    const { getByRole } = render(<TodoItem todo={todo} toggleTodo={toggleTodoMock} />);

    const checkbox = getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(toggleTodoMock).toHaveBeenCalledWith(1);
  });

  it('displays description with line-through style when todo is completed', () => {
    const todo = { id: 1, description: 'Test Todo', completed: true };
    const toggleTodoMock = jest.fn();
    const { getByText } = render(<TodoItem todo={todo} toggleTodo={toggleTodoMock} />);

    const description = getByText('Test Todo');
    expect(description).toHaveStyle('text-decoration: line-through');
  });

  it('displays description without line-through style when todo is not completed', () => {
    const todo = { id: 1, description: 'Test Todo', completed: false };
    const toggleTodoMock = jest.fn();
    const { getByText } = render(<TodoItem todo={todo} toggleTodo={toggleTodoMock} />);

    const description = getByText('Test Todo');
    expect(description).not.toHaveStyle('text-decoration: line-through');
  });
});
