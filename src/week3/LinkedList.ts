import {ListInterface} from "./ListInterface";
import {Node} from "./Node"


export class LinkedList<E> implements ListInterface<E> {
    private dummyHead: Node<E> = new Node<E>(null);
    private numItems: number = 0;

    private getNode(index: number): Node<E> {
        if (index < 0 || index >= this.numItems) {
            throw new Error("유효하지 않은 인덱스입니다.");
        }
        let current = this.dummyHead.next!;
        for (let i = 0; i < index; i++) {
            current = current.next!;
        }
        return current;
    }

    add(i: number, x: E): void {
        if (i < 0 || i > this.numItems) {
            throw new Error('유효하지 않은 인덱스입니다.');
        }
        let prev: Node<E> = this.dummyHead;
        for (let k = 0; k < i; k++) {
            prev = prev.next!;
        }
        prev.next = new Node<E>(x, prev.next);
        this.numItems++;
    }

    append(x: E): void {
        this.add(this.numItems, x);
    }

    clear(): void {
        this.dummyHead.next = null;
        this.numItems = 0;
    }

    get(i: number): E | undefined {
        const node = this.getNode(i);
        return node.item ?? undefined;
    }

    indexOf(x: E): number {
        let current = this.dummyHead.next;
        let index = 0;
        while (current !== null) {
            if (current.item === x) return index;
            current = current.next;
            index++;
        }
        return -1;
    }

    isEmpty(): boolean {
        return this.numItems == 0;
    }

    remove(i: number): E | undefined {
        if (i < 0 || i >= this.numItems) {
            throw new Error('유효하지 않은 인덱스입니다.');
        }

        let prev: Node<E> = this.dummyHead;
        for (let k = 0; k < i; k++) {
            prev = prev.next!;
        }

        const deleteNode = prev.next!;
        prev.next = deleteNode.next;
        this.numItems--;

        return deleteNode.item ?? undefined;
    }


    removeItem(x: E): boolean {
        let prev = this.dummyHead;
        let current = this.dummyHead.next;

        while (current !== null) {
            if (current.item === x) {
                prev.next = current.next;
                this.numItems--;
                return true;
            }
            prev = current;
            current = current.next;
        }

        return false;
    }

    set(i: number, x: E): void {
        if (i < 0 || i >= this.numItems) {
            throw new Error("인덱스 범위 초과");
        }
        this.getNode(i).item = x;
    }

    size(): number {
        return this.numItems;
    }


}
