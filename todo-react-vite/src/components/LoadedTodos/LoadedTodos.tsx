import { useEffect, useState } from "react";
interface ITodoLoaded {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
}



const LoadedTodos = () => {
    const [todos, setTodos] =  useState<ITodoLoaded[]>([]);

    useEffect(() => {
        const fetchData = async() => {
            try{
                const res = await fetch('https://dummyjson.com/todos');

                if(!res.ok) {
                    throw new Error('Something is wrong');
                }
                const data = await res.json();
                setTodos(data.todos);


            } catch (err) {
                console.error(err.message)
            }
        }
        fetchData();
    }, [])

    return (
        <ul>
            {/* <li>asdfasdfa</li> */}
            {
                todos.map(todo => (
                    <li key={todo.id}>{todo.todo}</li>
                ))
            }
        </ul>
    )
}

export default LoadedTodos;