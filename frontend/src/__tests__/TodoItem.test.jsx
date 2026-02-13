import { render, screen } from '@testing-library/react'
import { expect } from 'vitest'
import TodoItem from '../TodoItem.jsx'

const baseTodo = {
    id: 1,
    title: 'Sample Todo',
    done: false,
    comments: [],
};

describe('TodoItem', () => {
  it('renders with no comments correctly', () => {
    const todoWithComments = {
        ...baseTodo,
        comments: [
            {id: 1,message: 'First comment'},
            {id: 2,message: 'Another comment'},
        ]
    }
    render(
        <TodoItem todo={todoWithComments} />
    );
    expect(screen.getByText('Sample Todo')).toBeInTheDocument();
    expect(screen.getByText('First comment')).toBeInTheDocument();
    expect(screen.getByText('Another comment')).toBeInTheDocument();
  });
});