import { useState } from "react";


function UserPostsExplorer() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Learn TypeScript", completed: false },
    { id: 3, text: "Prepare for interview", completed: false }
  ]);

  const toggleTodo = (id) => {
    const todo = todos.find(todo => todo.id === id);

    if (todo) {
      todo.completed = !todo.completed;
      setTodos(todos);
    }
  };

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          {todo.text}
        </li>
      ))}
    </ul>
  );
}

export default UserPostsExplorer;

