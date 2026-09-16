export const STORE_CHANGE = 'STORE_CHANGE';

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

    updateChange(emitter) {
        this.emitter.emit(STORE_CHANGE)
    }
}

