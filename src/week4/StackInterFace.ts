export interface StackInterface<E> {
    push(newItem: E): void; // 삽입
    pop(): E | undefined; // 제거
    peek(): E | undefined // top 반환
    isEmpty(): boolean; // 스택이 빈 스택인지
    clear(): void; // 스택 초기화
    isSize(): number; // 스택 사이즈
}