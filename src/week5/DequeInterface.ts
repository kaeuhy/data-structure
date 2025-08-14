export interface DequeInterface<T> {
    addFront(newItem: T): void;

    addTail(newItem: T): void;

    deleteFront(): T | undefined;

    deleteTail(): T | undefined;

    isEmpty(): boolean;

    size(): number;

    clear(): void;
}