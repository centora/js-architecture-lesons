import { View } from "./view.js";
import { STORE_CHANGE } from '../src/store.js'
export class Presenter {
    constructor(emitter) {
        this.emitter = emitter;
        this.view = new View({
            onAdd: this.onAdd,
            onDelete: this.onDelete,
            onToggle: this.onToggle,
            onFilter: this.onFilter,
        });

        this.emitter.on(STORE_CHANGE, this.onStorageChange)
    }

    onAdd = (text) => {

    }

    onToggle = (id) => {

    }
    onDelete = (id) => {

    }
    onFilter = (filter) => {

    }

    onStorageChange = () => {

    }

}