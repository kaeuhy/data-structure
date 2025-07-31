export interface DequeInterface<E> {
    addFront(item: E): void;

    addRear(item: E): void;

    removeFront(): E | undefined;

    removeRear(): E | undefined;

    peekFront(): E | undefined;

    peekRear(): E | undefined;

    isEmpty(): boolean;

    isFull(): boolean;

    size(): number;

    clear(): void;
}