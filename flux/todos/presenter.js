import { View } from "./view.js";
import { STORE_CHANGE } from '../src/store.js'

export class Presenter {
    constructor({emitter, todoActions, store}) {
        this.emitter = emitter;
        this.todoActions = todoActions;
        this.view = new View({
            onAdd: this.onAdd,
            onDelete: this.onDelete,
            onToggle: this.onToggle,
            onFilter: this.onFilter,
        });
        this.store = store;
        this.emitter.on(STORE_CHANGE, this.onStorageChange)
    }

    onAdd = (text) => {
        console.log('text: ', text)
        this.todoActions.addTodo(text);
    }

    onToggle = (id) => {
        this.todoActions.toggleTodo(id);

    }
    onDelete = (id) => {
        this.todoActions.removeTodo(id);

    }
    onFilter = (filter) => {
        this.todoActions.setFilter(filter);
    }

    onStorageChange = () => {
        const store = this.store.getState();
        console.log('store change', store)
        this.view.render(store);
    }

}