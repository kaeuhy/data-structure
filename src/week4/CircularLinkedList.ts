import {ListInterface} from "./ListInterface";

class Node<T> {
    item: T;
    next: Node<T> | null;

    constructor(item: T) {
        this.item = item;
        this.next = null;
    }
}

export class CircularLinkedList<T> implements ListInterface<T> {
    private head: Node<T> | null;
    private tail: Node<T> | null;
    private length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    add(index: number, item: T): void {
        if (index < 0 || index > this.length) {
            throw new Error("Index out of bounds");
        }

        const newNode = new Node(item);

        // 맨 앞 삽입할때
        if (index === 0) {
            if (this.head === null) {
                this.head = newNode;
                this.tail = newNode;
                newNode.next = newNode;
            } else {
                newNode.next = this.head;
                this.tail!.next = newNode;
                this.head = newNode;
            }
        } else {
            let prev = this.head!;
            // 삽입할 위치의 바로 이전 노드를 찾는다
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next!;
            }
            newNode.next = prev.next;
            prev.next = newNode;
            // 맨 끝에 추가하는 경우 tail을 새 노드로 업데이트 해야함
            if (prev === this.tail) this.tail = newNode;
        }

        this.length++;
    }

    append(item: T): void {
        this.add(this.length, item);
    }

    // 특정 값을 가진 노드를 삭제합니다.
    remove(index: number): T {
        if (index < 0 || index >= this.length) {
            throw new Error("Index out of bounds");
        }

        let removedNode: Node<T>;

        // 맨 앞 노드면 head와 tail을 모두 null로 만들어 삭제
        if (index === 0) {
            removedNode = this.head!;
            if (this.length === 1) {
                // 노드가 하나만 있을 때
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head!.next;
                this.tail!.next = this.head;
            }
        } else {
            let prev = this.head!;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next!;
            }
            removedNode = prev.next!;
            prev.next = removedNode.next;
            if (removedNode === this.tail) {
                this.tail = prev;
            }
        }

        this.length--;
        return removedNode.item;
    }

    // 특정 값을 가진 노드를 삭제합니다.
    removeItem(item: T): boolean {
        let current = this.head;
        for (let i = 0; i < this.length; i++) {
            if (current!.item === item) {
                this.remove(i);
                return true;
            }
            current = current!.next;
        }
        return false;
    }

    // 특정 값을 가진 노드를 삭제합니다.
    get(index: number): T {
        if (index < 0 || index >= this.length) {
            throw new Error("Index out of bounds");
        }

        let current = this.head!;
        for (let i = 0; i < index; i++) {
            current = current.next!;
        }
        return current.item;
    }

    // 특정 인덱스의 노드 데이터를 새로운 item 으로 교체합니다.
    set(index: number, item: T): void {
        if (index < 0 || index >= this.length) {
            throw new Error("Index out of bounds");
        }

        let current = this.head!;
        for (let i = 0; i < index; i++) {
            current = current.next!;
        }
        current.item = item;
    }

    // 특정 값이 있는 리스트에서 처음 나타나는 인덱스를 반환합니다.
    indexOf(item: T): number {
        let current = this.head;
        for (let i = 0; i < this.length; i++) {
            if (current!.item === item) return i;
            current = current!.next;
        }
        return -1;
    }

    isSize(): number {
        return this.length;
    }

    isEmpty(): boolean {
        return this.length === 0;
    }

    clear(): void {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}