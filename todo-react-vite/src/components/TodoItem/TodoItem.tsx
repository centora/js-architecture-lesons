import type { ITodo } from './ITodoItem';

interface ITodoItem {
    todo: ITodo;
    onToggleTodo: (id: number) => void;
    onDeleteTodo: (id: number) => void;
}

const TodoItem = ({todo, onToggleTodo, onDeleteTodo}: ITodoItem) => {
    const handleChange = () => {
        onToggleTodo(todo.id)
    }

    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <input 
                type="checkbox" 
                checked={todo.completed} 
                onChange={handleChange}
                
            />
            <span>{todo.text}</span>
            <button type="button" onClick={() => {onDeleteTodo(todo.id)}}>Delete</button>
        </li>
    )
}

export default TodoItem;