const counter = {
    count: 0,
    increment() {
        this.count++;
        return this.count;
    }
}
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.count);