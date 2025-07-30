/**
 * 원형 연결 리스트의 각 요소를 나타내는 노드 클래스
 */
class CNode<T> {
    public value: T;
    public next: CNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

/**
 * 원형 연결 리스트 ADT
 */
export class CircularLinkedList<T> {
    private head: CNode<T> | null;
    private count: number;

    constructor() {
        this.head = null;
        this.count = 0;
    }

    /**
     * 리스트의 끝에 요소를 추가합니다.
     */
    add(item: T): void {
        const newNode = new CNode(item);
        if (this.head === null) {
            this.head = newNode;
            newNode.next = this.head; // 자기 자신을 가리킴
        } else {
            let tail = this.head;
            while (tail.next !== this.head) {
                tail = tail.next!;
            }
            newNode.next = this.head;
            tail.next = newNode;
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

        const newNode = new CNode(item);
        if (index === 0) {
            if (this.head === null) {
                this.head = newNode;
                newNode.next = this.head;
            } else {
                let tail = this.head;
                while (tail.next !== this.head) {
                    tail = tail.next!;
                }
                newNode.next = this.head;
                this.head = newNode;
                tail.next = this.head; // tail이 새로운 head를 가리키도록 업데이트
            }
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current!.next;
            }
            newNode.next = current!.next;
            current!.next = newNode;
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

        let removedValue: T;
        if (index === 0) {
            removedValue = this.head.value;
            if (this.count === 1) {
                this.head = null;
            } else {
                let tail = this.head;
                while (tail.next !== this.head) {
                    tail = tail.next!;
                }
                this.head = this.head.next;
                tail.next = this.head;
            }
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next!;
            }
            const removedNode = current.next!;
            removedValue = removedNode.value;
            current.next = removedNode.next;
        }
        this.count--;
        return removedValue;
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
     * 리스트의 모든 요소를 콘솔에 출력합니다.
     */
    print(): void {
        if (this.head === null) {
            console.log("CircularLinkedList.ts: []");
            return;
        }
        let result = [];
        let current = this.head;
        for (let i = 0; i < this.count; i++) {
            result.push(current.value);
            current = current.next!;
        }
        console.log(`CircularLinkedList: [${result.join(' -> ')}] -> Head`);
    }
}
