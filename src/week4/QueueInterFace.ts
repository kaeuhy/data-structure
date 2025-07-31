export interface QueueInterface<E> {
    // 맨 끝 요소에 원소를 추가
    enqueue(item: E): void;

    // 맨 앞 요소에 원소를 삭제
    dequeue(): E | null;

    peek(): E | null;

    isEmpty(): boolean;

    isFull(): boolean;

    size(): number;

    clear(): void;
}