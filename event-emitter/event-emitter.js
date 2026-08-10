export class Emitter {
    constructor() {
        this.events = {};
    }

    //subscribe
    on(event, listener) {
        !this.events[event] && (this.events[event] = [])
        this.events[event].push(listener)
    }

    //emit (trigger)
    emit(event, ...args) {
        if(!this.events[event]) return
        this.events[event].forEach(listener => {
            listener(...args)
        });

    }

    //unsubscribe
    remove(event, listener) {
        if(!this.events[event]) return
        this.events[event] = this.events[event].filter(l => l !== listener)
    }
}