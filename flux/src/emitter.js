export class Emitter {
    constructor() {
        this.events = {}
    }

    on = (event, listener) => {
        if(!this.events[event]) {
            this.events[event] = []
        }
        this.events[event].push(listener);
    }

    emit = (event, ...args) => {
        if (!this.events[event]) return;
        this.events[event].forEach(listener => {
            listener(...args);
        })

    }
    remove = (event, listener) => {
        if (!this.events[event]) return;
        this.events[event] = this.events[event].filter(l => l !== listener)
    }
}