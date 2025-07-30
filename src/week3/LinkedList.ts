// class Node<T> {
//     public value: T;
//     public next: Node<T> | null;
//
//     constructor(value: T) {
//         this.value = value;
//         this.next = null;
//     }
// }
//
// export class LinkedList<T> {
//     private head: Node<T> | null;
//     private count: number;
//
//     constructor() {
//         this.head = null;
//         this.count = 0;
//     }
//
//     add(item: T): void {
//         const newNode = new Node(item);
//         if (this.head === null) {
//             this.head = newNode;
//         } else {
//             let current = this.head;
//             while (current.next !== null) {
//                 current = current.next;
//             }
//             current.next = newNode;
//         }
//         this.count++;
//     }
//
//     insertAt(item: T, index: number): boolean {
//         if (index < 0 || index > this.count) {
//             return false;
//         }
//
//         const newNode = new Node(item);
//         if (index === 0) {
//             newNode.next = this.head;
//             this.head = newNode;
//         } else {
//             let current = this.head;
//             let previous: Node<T> | null = null;
//             let i = 0;
//             while (i++ < index) {
//                 previous = current;
//                 current = current!.next;
//             }
//             newNode.next = current;
//             previous!.next = newNode;
//         }
//         this.count++;
//         return true;
//     }
//
//     removeFrom(index: number): T | null {
//         if (index < 0 || index >= this.count || this.head === null) {
//             return null;
//         }
//
//         let removedNode: Node<T> | null;
//         if (index === 0) {
//             removedNode = this.head;
//             this.head = this.head.next;
//         } else {
//             let current = this.head;
//             let previous: Node<T> | null = null;
//             let i = 0;
//             while (i++ < index) {
//                 previous = current;
//                 current = current.next!;
//             }
//             removedNode = current;
//             previous!.next = current.next;
//         }
//         this.count--;
//         return removedNode.value;
//     }
//
//     size(): number {
//         return this.count;
//     }
//
//     isEmpty(): boolean {
//         return this.size() === 0;
//     }
//
//     print(): void {
//         if (this.head === null) {
//             console.log("LinkedList: []");
//             return;
//         }
//         let result = [];
//         let current = this.head;
//         while (current !== null) {
//             result.push(current.value);
//             current = current.next;
//         }
//         console.log(`LinkedList: [${result.join(' -> ')}]`);
//     }
// }
