import { useState } from "react";

interface User {
  id: number;
  name: string;
}

function TodoStudy1() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState<User[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedName = name.trim();
    
    if(!trimmedName) {
        return;
    }

    setName('');
    setUsers((prev) => {
        return [
            ...prev,
            {
                id: Number(Date.now()),
                name: trimmedName
            }
        ]
    })
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <button type="submit">Add user</button>
      </form>

      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoStudy1;