export const STORE_CHANGE = 'STORE_CHANGE';
const ALL = 'all';
const ACTIVE = 'active';
const COMPLETED = 'completed';
const FILTER_VALUES = [ALL, ACTIVE, COMPLETED];

export class TodoStore {
    constructor(dispatcher, emitter) {
        this.dispatcher = dispatcher;
        this.emitter = emitter;

        this.todos = [];
        this.filter = 'all';
        this.nextId = 1;
        this.dispatcher.registerListener(this.handleAction); // subscribe on events from actions
    }

    handleAction = (action) => {
        switch(action.type) {
            case 'ADD_TODO': 
                this.addTodo(action.payload.text);
                break;
            case 'REMOVE_TODO' :
                this.removeTodo(action.payload.id);
                break;
            case 'TOGGLE_TODO':
                this.toggleTodo(action.payload.id);
                break;
            case 'SET_FILTER':
                this.setFilter(action.payload.filter);
            default:
                break;
        }

        this.updateChange();
    }

    updateChange() {
        this.emitter.emit(STORE_CHANGE);
    }

    addTodo = (text) => {
        //this.todos.push({id: this.nextId, text, completed: false}); // mutate data = not correct solution
        this.todos = [...this.todos, {id: this.nextId, text, completed: false}]; // don't mutate, rewrite array with new data -> correct approach
        this.nextId++; // after add todo to array we need to increment next id value
    }

    removeTodo = (id) => {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    toggleTodo = (id) => {
        this.todos = this.todos.map(todo => {
            if(todo.id === id) {
                return {...todo, completed: !todo.completed}
            }
            return todo;
        });
    }

    setFilter = (filter) => {
        this.filter = FILTER_VALUES.includes(filter) ? filter : ALL;
    }

    getVisibleTodos = () => {
        if(this.filter === ACTIVE) {
            return this.todos.filter(todo => !todo.completed);
        }
        if(this.filter === COMPLETED) {
            return this.todos.filter(todo => todo.completed);
        }
        return this.todos = [...this.todos];
    }


    getState = () => {
        return { 
            todos: this.getVisibleTodos(),
            filter: this.filter 
        } 
    }

}

