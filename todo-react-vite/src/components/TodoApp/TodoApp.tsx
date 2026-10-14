import { useState } from 'react';
import type { ITodo } from '../TodoItem/ITodoItem';

import TodoForm from '../TodoForm/TododForm';
import TodoList from '../TodoList/TodoList';
import Footer from '../Footer/Footer';

import './TodoApp.css';
import { ACTIVE, COMPLETED, ALL } from '../../constants';

const TodoApp = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [filter, setFilter] = useState<string>(ALL)

    const onAddTodo = (text: string) => {
        const newTodo: ITodo = {
            id: todos.length + 1,
            text,
            completed: false
        }

        setTodos([...todos, newTodo]);
    }

    const onToggleTodo = (id: number) => {
        const updatedTodos = todos.map(todo => {
            if(todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }    
            return todo;
        })
        setTodos(updatedTodos);
    }

    const onDeleteTodo = (id: number) => {
        const updatedTodos = todos.filter(t => t.id !== id);
        setTodos(updatedTodos)
    }


    const onFilter = (filter: string) => {
        setFilter(filter);
    }

    let filteredTodos = todos;

    if(filter === ACTIVE) {
        filteredTodos = todos.filter(todo => !todo.completed);
    }

    if(filter === COMPLETED) {
        filteredTodos = todos.filter(todo => todo.completed);
    }

    return (
        <>
            <h2>Todo List</h2>
            <TodoForm onAddTodo={onAddTodo} />
            <hr />
            <TodoList 
                todos={filteredTodos} 
                onToggleTodo={onToggleTodo}
                onDeleteTodo={onDeleteTodo}
            />
            <Footer 
                activeTodosNumber={filteredTodos.length} 
                onFilter={onFilter}
                activeFilter={filter}
            />
        </>
    )
}

export default TodoApp;