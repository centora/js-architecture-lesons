import type { ITodo } from "../TodoItem/ITodoItem";
import TodoItem from "../TodoItem/TodoItem";

interface ITodoList {
    todos: ITodo [];
    onToggleTodo: (id: number) => void;
    onDeleteTodo: (id: number) => void;
}

const TodoList = ({todos, onToggleTodo, onDeleteTodo}: ITodoList) => {

    return (
        <>
            {
                todos.map((todo: ITodo) => <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    onToggleTodo={onToggleTodo}
                    onDeleteTodo={onDeleteTodo}
                />)
            }
            
        </>
    )
}

export default TodoList;