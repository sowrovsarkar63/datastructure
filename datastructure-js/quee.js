console.log("-------------------------");
class Quee {
    constructor() {
        this.elements = [];
    }
    Enquee(element) {
        return this.elements.push(element);
    }
    Dequee() {
        return this.elements.shift();
    }
}

let quee = new Quee();

quee.Enquee("html");
console.log(quee.elements);
quee.Enquee("css");
console.log(quee.elements);
quee.Enquee("js");
console.log(quee.elements);
quee.Enquee("react");
console.log(quee.elements);
quee.Enquee("git");
console.log(quee.elements);

// dequee

quee.Dequee();
console.log(quee.elements);
