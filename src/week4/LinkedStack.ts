import {StackInterface} from "./StackInterface";

class Node<E> {
    data: E;
    next: Node<E> | null = null;

    constructor(data: E) {
        this.data = data;
    }
}

export default class ListStack<E> implements StackInterface<E> {
    private top: Node<E> | null = null;
    private size: number = 0;

    push(item: E): void {
        const newNode = new Node(item);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }

    pop(): E | undefined {
        if (this.top === null) {
            return undefined;
        }

        const value = this.top.data;
        this.top = this.top.next;
        this.size--;
        return value;
    }

    peek(): E | undefined {
        return this.top.data;
    }
    isSize(): number {
        return this.size;
    }

    isEmpty(): boolean {
        return this.top === null;
    }

    clear(): void {
        this.top = null;
        this.size = 0;
    }
}
