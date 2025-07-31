export class Node<E> {
    item: E | null;
    next: Node<E> | null = null;

    constructor(item: E | null, next: Node<E> | null = null) {
        this.item = item;
        this.next = next;
    }
}