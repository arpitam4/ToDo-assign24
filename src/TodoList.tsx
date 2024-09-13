import React from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: { text: string; completed: boolean }[];
  toggleTodo: (index: number) => void;
  removeTodo: (index: number) => void;
  title: string;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, removeTodo, title }) => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} index={index} toggleTodo={toggleTodo} removeTodo={removeTodo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
