import { createSourceFile } from "typescript";

interface Node<T> {
    value: T;
    next?: Node<T>;
    prev?: Node<T>;
}

export default class DoublyLinkedList<T> {
    public length: number;
    public head?: Node<T>;
    public tail?: Node<T>;
    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    prepend(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.head) {
            this.tail = this.head = node;
            return;
        }
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }
    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw new Error("Outside of the array!!!!");
        }
        if (idx === this.length) {
            this.append(item);
            return;
        }
        if (idx === 0) {
            this.prepend(item);
            return;
        }
        this.length++;

        const curr = this.getAt(idx) as Node<T>;
        const node = { value: item } as Node<T>;
        node.next = curr; // connects F next to C
        node.prev = curr.prev; // connects F prev to B
        curr.prev = node; // connects C prev to F
        if (node.prev) {
            node.prev.next = node; // connects B next to F
        }
    }
    append(item: T): void {
        this.length++;
        const node = { value: item } as Node<T>;
        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }
    remove(item: T): T | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < this.length; ++i) {
            if (curr.value === item) break;
            curr = curr.next;
        }
        if (!curr) return undefined;
        return this.removeNode(curr);
    }
    get(idx: number): T | undefined {
        return this.getAt(idx)?.value;
    }
    removeAt(idx: number): T | undefined {
        const node = this.getAt(idx);
        if (!node) return undefined;
        return this.removeNode(node);
    }
    private getAt(idx: number): Node<T> | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < idx; ++i) {
            curr = curr.next;
        }
        return curr;
    }
    private removeNode(node: Node<T>): T | undefined {
        this.length--;
        if (this.length === 0) {
            this.head = this.tail = undefined;
            return node.value;
        }
        if (node.next) {
            node.next.prev = node.prev; // jumping over 1 elementtt !
        }
        if (node.prev) {
            node.prev.next = node.next;
        }
        if (node === this.head) {
            this.head = node.next;
        }
        if (node === this.tail) {
            this.tail = node.prev;
        }
        node.next = node.prev = undefined;
        return node.value;
    }
}
