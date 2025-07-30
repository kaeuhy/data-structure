export interface ListInterface<E> {
    add(i: number, x: E): void;

    append(x: E): void;

    remove(i: number): E;

    removeItem(x: E): boolean;

    get(i: number): E;

    set(i: number, x: E): void;

    indexOf(x: E): number;

    size(): number;

    isEmpty(): boolean;

    clear(): void;
}