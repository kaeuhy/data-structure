import {ListInterface} from "./ListInterface";

// 리스트를 구성하는 기본 단위인 노들르 정의하는 클래스 입니다.
class Node<T> {
    // 제네릭을 사용하여 숫자, 문자열, 객체 등 어떤 타입의 데이터를 저장합니다.
    // item은 노드에 저장될 실제 데이터입니다.
    item: T;
    // 다음 노드를 참조하고 리스트의 마지막 노드일 경우 null 값을 가집니다.
    next: Node<T> | null;
    // 이전 노드를 참조하고 리스트의 첫 번째 노드일 경우 null 값을 가집니다.
    prev: Node<T> | null;

    constructor(item: T) {
        this.item = item;
        this.next = null;
        this.prev = null;
    }
}

// 노드들을 관리하여 리스트의 전체적인 동작을 책임지는 클래스입니다.
export class DoublyLinkedList<T> implements ListInterface<T> {
    // 리스트의 첫 번째 노드를 가리켜 head를 통해 리스트의 모든 데이터에 접근할 수 있습니다.
    private head: Node<T> | null;
    // 리스트의 마지막 노드를 가리켜 tail이 있으면 리스트의 마지막에 데이터를 추가하거나 마지막에서부터 탐색을 시작할 때 효율적입니다.
    private tail: Node<T> | null;
    // 리스트에 있는 노드의 총개수입니다.
    private size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // 특정 인덱스에 새로운 노드를 삽입합니다.
    add(index: number, item: T): void {
        if (index < 0 || index > this.size) {
            throw new Error("Index out of bounds");
        }

        const newNode = new Node(item);

        // 맨 뒤에 추가하는 경우다.
        if (index === this.size) {
            this.append(item);
            return;
        }

        // 맨 앞에 추가하는 경우다.
        if (index === 0) {
            // 리스트에 이미 노드가 존재하면, 기존 첫 노드 앞에 새 노드를 연결합니다.
            if (this.head) {
                // 당연히 새 노드의 다음은 기존 첫 노드의 head 겠죠?
                newNode.next = this.head;
                // 기존 첫 노드의 head의 이전은 새노드가 됩니다.
                this.head.prev = newNode;
            } else {
                // 빈 리스트라면 새 노드가 유일한 노드이므로 tail이 됩니당.
                this.tail = newNode;
            }

            this.head = newNode;
        }

        // 중간에 추가하는 경우다.




        this.size++;
    }

    // 리스트의 맨 뒤에 새로운 노드를 추가합니다.
    append(item: T): void {
        const newNode = new Node(item);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail!.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.size++;
    }

    // 특정 값을 가진 노드를 삭제합니다.
    remove(index: number): T {
        if (index < 0 || index >= this.size) {
            throw new Error("Index out of bounds");
        }

        let removedNode: Node<T>;

        if (index === 0) {
            removedNode = this.head!;
            this.head = this.head!.next;
            if (this.head) this.head.prev = null;
            if (removedNode === this.tail) this.tail = null;
        } else if (index === this.size - 1) {
            removedNode = this.tail!;
            this.tail = this.tail!.prev;
            if (this.tail) this.tail.next = null;
            if (removedNode === this.head) this.head = null;
        } else {
            let current = this.head!;
            for (let i = 0; i < index; i++) {
                current = current.next!;
            }

            removedNode = current;
            const prevNode = current.prev!;
            const nextNode = current.next!;

            prevNode.next = nextNode;
            nextNode.prev = prevNode;
        }

        this.size--;
        return removedNode.item;
    }

    // 특정 값을 가진 노드를 삭제합니다.
    removeItem(x: T): boolean {
        let current = this.head;
        let index = 0;
        while (current !== null) {
            if (current.item === x) {
                this.remove(index);
                return true;
            }
            current = current.next;
            index++;
        }
        return false;
    }

    // 특정 값을 가진 노드를 삭제합니다.
    get(index: number): T {
        if (index < 0 || index >= this.size) {
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
        if (index < 0 || index >= this.size) {
            throw new Error("Index out of bounds");
        }

        let current = this.head!;
        for (let i = 0; i < index; i++) {
            current = current.next!;
        }

        current.item = item;
    }

    // 특정 값이 있는 리스트에서 처음 나타나는 인덱스를 반환합니다.
    indexOf(x: T): number {
        let current = this.head;
        let index = 0;

        while (current !== null) {
            if (current.item === x) return index;
            current = current.next;
            index++;
        }

        return -1;
    }

    isSize(): number {
        return this.size;
    }

    isEmpty(): boolean {
        return this.size === 0;
    }

    clear(): void {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
}
