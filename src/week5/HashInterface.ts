export interface HashInterface<E> {
    hash(data: E): number;

    insert(data: E): void;

    search(data: E): E | undefined;

    delete(data: E): void;

    isEmpty(): boolean;

    isFull(): boolean;

    clear(): void;
}