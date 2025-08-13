export interface QueueInterface<E> {
    // 데이터를 추가합니다.
    enqueue(item: E): void;

    // 데이터를 삭제합니다.
    dequeue(): E | null;

    // 큐의 맨 앞에 있는 데이터를 확인합니다.
    peek(): E | null;

    isEmpty(): boolean;

    isFull(): boolean;

    size(): number;

    clear(): void;
}
