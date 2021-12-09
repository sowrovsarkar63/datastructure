console.log("Everything is working ");
console.log("-----------------------------------");
console.log("==============================");

// const list = {
//     head:{
//         value:6
//         next:{
//             vlaue:10
//             next:{
//                 value:12
//                 next:{
//                     value:3
//                     next:null
//                 }
//             }
//         }
//     }
// }
// console.log(list);
//
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Implementing LinkeList In JavaScript ..

class LinkeList {
    constructor(head = null) {
        this.head = head;
    }
}

let node1 = new ListNode(2);
let node2 = new ListNode(5);
node1.next = node2;

let list = new LinkeList(node1);

console.log(list.head.next.data);
