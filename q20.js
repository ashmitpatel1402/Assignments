class Stack {
    constructor() {
    this.items = [];
    }
    push(element) {
    this.items.push(element);
    }
    search(element) {
    return this.items.includes(element);
    }
    }