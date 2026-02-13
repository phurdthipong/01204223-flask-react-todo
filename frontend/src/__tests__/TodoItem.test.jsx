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
  it('renders with comments correctly', () => {
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
    expect(screen.getByText(/2/)).toBeInTheDocument();
  });

  it('renders with no comments correctly', () => {
    const todoWithoutComments = {
        ...baseTodo,
        comments: [],
    };
    render(
        <TodoItem todo={todoWithoutComments} />
    );
    expect(screen.getByText('No comments:')).toBeInTheDocument();
  });

  it('does not show no comments message when it has a comments', () => {
    const todoWithComments = {
        ...baseTodo,
        comments: [
            {id: 1,message: 'First comment'},
        ]
    };
    render(
        <TodoItem todo={todoWithComments} />
    );
    expect(screen.queryByText('No comments:')).not.toBeInTheDocument();
    });
}); 