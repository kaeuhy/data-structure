/**
 * 배열 리스트 ADT (추상 데이터 타입)
 */
export class ArrayList<T> {
    private data: T[];

    constructor() {
        this.data = [];
    }

    /**
     * 리스트의 끝에 요소를 추가합니다.
     */
    add(item: T): void {
        this.data.push(item);
    }

    /**
     * 지정된 인덱스의 요소를 가져옵니다.
     */
    get(index: number): T | undefined {
        if (index >= 0 && index < this.data.length) {
            return this.data[index];
        }
        return undefined;
    }

    /**
     * 지정된 인덱스의 요소를 제거합니다.
     */
    remove(index: number): void {
        if (index >= 0 && index < this.data.length) {
            this.data.splice(index, 1);
        }
    }

    /**
     * 리스트의 크기(요소의 수)를 반환합니다.
     */
    size(): number {
        return this.data.length;
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
        console.log(`ArrayList: [${this.data.join(', ')}]`);
    }
}
