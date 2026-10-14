import { useState } from "react";

interface ITodoForm {
    onAddTodo: (text:string) => void
}

const TodoForm = ({onAddTodo}: ITodoForm) => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!inputValue.trim()) return;

        onAddTodo(inputValue);
        setInputValue('');
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    return(
        <form className="todo-form" onSubmit={handleSubmit}>
            <input 
                className="todo-input" 
                type="text" 
                placeholder="What needs to be done?"
                onChange={handleChange}
                value={inputValue}
            />
            <button 
                type="submit"
                disabled={!inputValue.trim()}
                >Add</button>
        </form>
    )
}

export default TodoForm;