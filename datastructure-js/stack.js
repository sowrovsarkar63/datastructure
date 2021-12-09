console.log("-----------------------");
class Stack {
    constructor() {
        this.stack = [];
    }
    add(elements) {
        return this.stack.push(elements);
    }

    remove(elements) {
        return this.stack.pop();
    }
}

let StackDsa = new Stack();

StackDsa.add("html");
console.log(StackDsa.stack);
StackDsa.add("css");
console.log(StackDsa.stack);
StackDsa.add("js");
console.log(StackDsa.stack);
StackDsa.add("react");
console.log(StackDsa.stack);
StackDsa.add("material ui");

console.log(StackDsa.stack);
// Remove Data From Array

StackDsa.remove();
console.log(StackDsa.stack);
StackDsa.remove();
console.log(StackDsa.stack);
StackDsa.remove();
console.log(StackDsa.stack);
StackDsa.remove();
console.log(StackDsa.stack);
