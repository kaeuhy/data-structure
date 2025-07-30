/**
 * 이중 연결 리스트의 각 요소를 나타내는 노드 클래스
 */
class DNode<T> {
    public value: T;
    public next: DNode<T> | null;
    public prev: DNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

/**
 * 이중 연결 리스트 ADT
 */
export class DoublyLinkedList<T> {
    private head: DNode<T> | null;
    private tail: DNode<T> | null;
    private count: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    /**
     * 리스트의 끝에 요소를 추가합니다.
     */
    add(item: T): void {
        const newNode = new DNode(item);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail!.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.count++;
    }

    /**
     * 지정된 인덱스에 요소를 삽입합니다.
     */
    insertAt(item: T, index: number): boolean {
        if (index < 0 || index > this.count) {
            return false;
        }

        const newNode = new DNode(item);
        if (index === 0) {
            if (this.head === null) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                newNode.next = this.head;
                this.head.prev = newNode;
                this.head = newNode;
            }
        } else if (index === this.count) {
            this.tail!.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        } else {
            let current = this.head;
            for (let i = 0; i < index; i++) {
                current = current!.next;
            }
            newNode.next = current;
            newNode.prev = current!.prev;
            current!.prev!.next = newNode;
            current!.prev = newNode;
        }
        this.count++;
        return true;
    }

    /**
     * 지정된 인덱스의 요소를 제거합니다.
     */
    removeFrom(index: number): T | null {
        if (index < 0 || index >= this.count || this.head === null) {
            return null;
        }

        let removedNode: DNode<T>;
        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null;
            } else {
                this.tail = null; // 리스트가 비게 됨
            }
        } else if (index === this.count - 1) {
            removedNode = this.tail!;
            this.tail = this.tail!.prev;
            this.tail!.next = null;
        } else {
            let current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next!;
            }
            removedNode = current;
            current.prev!.next = current.next;
            current.next!.prev = current.prev;
        }
        this.count--;
        return removedNode.value;
    }

    /**
     * 리스트의 크기를 반환합니다.
     */
    size(): number {
        return this.count;
    }

    /**
     * 리스트가 비어있는지 확인합니다.
     */
    isEmpty(): boolean {
        return this.size() === 0;
    }

    /**
     * 리스트의 모든 요소를 앞에서부터 콘솔에 출력합니다.
     */
    print(): void {
        if (this.head === null) {
            console.log("DoublyLinkedList: []");
            return;
        }
        let result = [];
        let current = this.head;
        while (current !== null) {
            result.push(current.value);
            current = current.next;
        }
        console.log(`DoublyLinkedList: [${result.join(' <-> ')}]`);
    }
    
    /**
     * 리스트의 모든 요소를 뒤에서부터 콘솔에 출력합니다.
     */
    printReverse(): void {
        if (this.tail === null) {
            console.log("DoublyLinkedList (Reverse): []");
            return;
        }
        let result = [];
        let current = this.tail;
        while (current !== null) {
            result.push(current.value);
            current = current.prev;
        }
        console.log(`DoublyLinkedList (Reverse): [${result.join(' <-> ')}]`);
    }
}
