import {StackInterface} from "./StackInterFace";
import {LinkedList} from "../week3/LinkedList";


export class UseLinkedStack<E> implements StackInterface<E> {
    private list = new LinkedList<E>();

    push(newItem: E): void {
        this.list.add(0, newItem);
    }

    peek(): E | undefined {
        if (this.isEmpty()) {
            throw new Error("Stack is Empty");
        }
        return this.list.get(0);
    }

    pop(): E | undefined {
        if (this.isEmpty()) {
            throw new Error("Stack is Empty");
        }
        return this.list.remove(0);
    }

    isSize(): number {
        return this.list.size();
    }

    clear(): void {
        this.list.clear();
    }

    isEmpty(): boolean {
        return this.list.isEmpty();
    }



}