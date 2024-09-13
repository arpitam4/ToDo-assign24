import React, { useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md'; // Import the cancel icon

interface Todo {
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [doneTodos, setDoneTodos] = useState<Todo[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [newTodoText, setNewTodoText] = useState('');

  const addTodo = () => {
    if (newTodoText.trim() !== '') {
      setTodos([...todos, { text: newTodoText, completed: false }]);
      setNewTodoText('');
      setIsAdding(false);
    }
  };

  const toggleForm = () => {
    setIsAdding(!isAdding);
  };

  const toggleTodo = (index: number, completed: boolean) => {
    if (completed) {
      const todoToMove = todos[index];
      setDoneTodos([...doneTodos, { ...todoToMove, completed: true }]);
      setTodos(todos.filter((_, i) => i !== index));
    } else {
      const todoToMove = doneTodos[index];
      setTodos([...todos, { ...todoToMove, completed: false }]);
      setDoneTodos(doneTodos.filter((_, i) => i !== index));
    }
  };

  const deleteTodo = (index: number, isDone: boolean) => {
    if (isDone) {
      setDoneTodos(doneTodos.filter((_, i) => i !== index));
    } else {
      setTodos(todos.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">XTodo</h1>


        {/* Todo List */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Things to do</h3>
          <ul>
            {todos.map((todo, index) => (
              <li key={index} className="flex items-center mt-2">
                <input
                  type="checkbox"
                  onChange={() => toggleTodo(index, true)}
                  className="mr-2"
                />
                <span className="flex-grow">{todo.text}</span>
                <button
                  onClick={() => deleteTodo(index, false)}
                  className="text-red-500 hover:text-red-700 ml-2"
                >
                  <MdOutlineCancel size={20} />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Add Todo Button or Form */}
        {isAdding ? (
          <div className="mt-4 p-4 border rounded">
            <h3 className="text-lg font-semibold">Create a todo</h3>
            <input
              type="text"
              value={newTodoText}
              onChange={(e) => setNewTodoText(e.target.value)}
              placeholder="Write a new todo"
              className="border p-2 rounded w-full mt-2"
            />
            <div className="mt-2 flex gap-2">
              <button
                onClick={addTodo}
                className="bg-yellow-500 text-white p-2 rounded"
              >
                Save
              </button>
              <button
                onClick={toggleForm}
                className="bg-gray-300 text-black p-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={toggleForm}
            className="mt-4 bg-yellow-500 text-white p-2 rounded flex items-center"
          >
            + Add a todo
          </button>
        )}

        {/* Completed Todos */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold">Things done</h3>
          <ul>
            {doneTodos.map((todo, index) => (
              <li key={index} className="flex items-center mt-2">
                <input
                  type="checkbox"
                  checked={true}
                  onChange={() => toggleTodo(index, false)}
                  className="mr-2"
                />
                <span className="flex-grow ">{todo.text}</span>
                <button
                  onClick={() => deleteTodo(index, true)}
                  className="text-red-500 hover:text-red-700 ml-2"
                >
                  <MdOutlineCancel size={20} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
