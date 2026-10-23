import { useState } from 'react';
import type { ITodo } from '../TodoItem/ITodoItem';

import TodoForm from '../TodoForm/TododForm';
import TodoList from '../TodoList/TodoList';
import Footer from '../Footer/Footer';

import './TodoApp.css';
import { ACTIVE, COMPLETED, ALL } from '../../constants';
import LoadedTodos from '../LoadedTodos/LoadedTodos';

type IFilter = ALL | ACTIVE | COMPLETED;

const TodoApp = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [filter, setFilter] = useState<IFilter>(ALL)

    const onAddTodo = (text: string) => {
        const newTodo: ITodo = {
            id: Date.now().toString(16),
            text,
            completed: false
        }

        setTodos([...todos, newTodo]);
    }

    //https://dummyjson.com/products

    const onToggleTodo = (id: number | string) => {
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

    const onDeleteTodo = (id: number | string) => {
        const updatedTodos = todos.filter(t => t.id !== id);
        setTodos(updatedTodos)
    }


    const onFilter = (filter: IFilter) => {
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
            <LoadedTodos/>
        </>
    )
}

export default TodoApp;