import React, { useState } from 'react';

interface AddTodoProps {
  addTodo: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-4 mt-6">
      <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 flex items-center">
        + Add a todo
      </button>
    </form>
  );
}

export default AddTodo;
