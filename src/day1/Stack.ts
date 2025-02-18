type Node<T> = {
    value: T;
    prev?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;
    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.head) {
            this.head = node;
            return;
        }
        node.prev = this.head;
        this.head = node;
    }
    pop(): T | undefined {
        if (!this.head) {
            // if Queue doesn't have no head, we don't decrease the length which would cause -1.
            return undefined;
        }
        this.length--; // this will be decreased only if the queue has head.
        const head = this.head;
        this.head = head.prev;
        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
