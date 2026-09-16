export class Dispatcher{
    constructor() {
        this.listeners = [];
    }
    dispatch = (action) => {
        this.listeners.forEach(listener => listener(action));
    }

    registerListener(listener) {
        this.listener.push(listener);
    }
}