const ActionsTypes = {
    ADD_TODO: 'ADD_TODO',
    REMOVE_TODO: 'REMOVE_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    SET_FILTER: 'SET_FILTER'
}

export class TodoActions {
    constructor(dispatcher) {
        this.dispatcher = dispatcher;
    }

    addTodo = (text) => {
       this.dispatcher.dispatch({
        type: ActionsTypes.ADD_TODO,
        payload: { text }
       })
    }

    removeTodo = (id) => {
        this.dispatcher.dispatch({
            type: ActionsTypes.REMOVE_TODO,
            payload: { id }
        })
    }

    toggleTodo = (id) => {
        this.dispatcher.dispatch({
            type: ActionsTypes.TOGGLE_TODO,
            payload: { id }
        })
    }

    setFilter = (filter) => {
        this.dispatcher.dispatch({
            type: ActionsTypes.SET_FILTER,
            payload: { filter } 
        })
    }
}