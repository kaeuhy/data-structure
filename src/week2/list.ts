// class Node {
//     item: number;
//     next: Node | null;
//
//     constructor(newItem: number, nextNode: Node | null = null) {
//         this.item = newItem;
//         this.next = nextNode;
//     }
// }
//
// class linkedList {
//     head: Node | null = null;
//     length: number = 0;
//
//     add(i: number, node: Node) {
//         let prev = null;
//         let current = this.head;
//         let currentI = 1;
//
//         if (i > this.length) {
//             console.log("error!");
//             return;
//         }
//
//         if (i === 1) {
//             node.next = this.head;
//             this.head = node;
//             this.length += 1;
//
//             return;
//         }
//
//         while (current.next && i !== currentI) {
//             prev = current;
//             current = current.next;
//             currentI += 1;
//         }
//
//         node.next = current;
//         prev.next = node;
//         this.length += 1;
//     }
//
//     append(node: Node) {
//         let current = this.head;
//
//         if (!current) {
//             this.head = node;
//             this.length += 1;
//
//             return;
//         }
//
//         while (current.next) {
//             current = current.next;
//         }
//
//         current.next = node;
//         this.lenth += 1;
//     }
// }