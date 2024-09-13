import React from 'react';
import { ImCross } from "react-icons/im";

interface TodoItemProps {
  todo: { text: string; completed: boolean };
  index: number;
  toggleTodo: (index: number) => void;
  removeTodo: (index: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, index, toggleTodo, removeTodo }) => {
  return (
    <li className="flex items-center space-x-3">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(index)}
        className="form-checkbox text-yellow-500"
      />
      <span className={todo.completed ? 'line-through text-gray-400' : ''}>{todo.text}</span>
      <button onClick={() => removeTodo(index)}>
        <ImCross className="text-red-500 hover:text-red-700" />
      </button>
    </li>
  );
}

export default TodoItem;
