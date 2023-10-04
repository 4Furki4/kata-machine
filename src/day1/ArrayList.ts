export default class ArrayList<T> {
    public length: number;
    public capasity: number;
    private items: Array<T>;

    constructor(capacity: number = 10, private growthFactor: number = 2) {
        this.length = 0;
        this.capasity = capacity;
        this.items = new Array<T>();
        this.growthFactor = growthFactor;
    }
    private grow(): void {
        this.capasity *= this.growthFactor;
        const newItems = new Array<T>(this.capasity);
        for (let i = 0; i < this.length; i++) {
            newItems[i] = this.items[i];
        }
        this.items = newItems;
    }
    public indexOf(item: T): number {
        for (let i = 0; i < this.length; i++) {
            if (this.items[i] === item) {
                return i;
            }
        }
        return -1;
    }
    prepend(item: T): void {
        this.insertAt(item, 0);
    }
    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) {
            throw new RangeError("Index out of range");
        }
        if (this.length >= this.capasity) {
            this.grow();
        }
        for (let i = this.length; i > idx; i--) {
            this.items[i] = this.items[i - 1];
        }
        this.items[idx] = item;
        this.length++;
    }
    append(item: T): void {
        if (this.length >= this.capasity) {
            this.grow();
        }
        this.items[this.length++] = item;
    }
    remove(item: T): T | undefined {
        const idx = this.indexOf(item);
        if (idx === -1) {
            return undefined;
        }
        return this.removeAt(idx);
    }
    get(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }
        return this.items[idx];
    }
    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }
        const item = this.items[idx];
        for (let i = idx; i < this.length - 1; i++) {
            this.items[i] = this.items[i + 1];
        }
        this.length--;
        return item;
    }
}
