export interface ListInterface<T> {
    add(item: T, index: number,): void;
    append(item: T,): void;
    remove(index: number): E;
    removeItem(item: T,): boolean;
    get(index: number): E;
    set(index: number, item: T,): void;
    indexOf(item: T,): number;
    size(): number;
    isEmpty(): boolean;
    clear(): void;
}