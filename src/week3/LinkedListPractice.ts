import {ListInterface} from "./ListInterface";

class Node<T> {
    item: T;
    next: Node<T> | null;

    constructor(item: T) {
        this.item = item;
        this.next = null;
    }
}

export class LinkedList<T> implements ListInterface<T> {
    private head: Node<T> | null;
    private size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(item: T, index: number): void {
        if (index < 0 || index > this.size) {
            throw new Error("Error");
        }

        const newNode = new Node(item);

        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current!.next;
            }
            newNode.next = current.next;
            current.next = newNode;
        }
        this.size++;
    }

    append(item: T): void {
        const newNode = new Node(item);

        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    remove(index: number): T {
        if (index < 0 || index >= this.size) {
            throw new Error("Error");
        }

        let removedNode: Node<T>;

        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
        } else {
            let previous = this.head;
            for (let i = 0; i < index - 1; i++) {
                previous = previous.next!;
            }
            removedNode = previous.next;
            previous.next = removedNode.next;
        }

        this.size--;
        return removedNode.item;
    }


}