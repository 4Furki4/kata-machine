export default function bubble_sort(arr: number[]): void {
    // In Bubble sort algorithm, we loop thru all element except the last one and ask the adjacent element if it's bigger or lower than the current el and swap.

    for (let i = 0; i < arr.length; ++i) {
        for (let j = 0; j < arr.length - 1 - i; ++j) {
            // the reason we subtract 1 is we don't wanna exceed the length of array since we try to reach the adjacent of each element
            // the reason we subtract n is we don't need to check the last elements since they are already sorted. at every step, we put the biggest elements to the right or vice versa.
            let currentNumber = arr[j];
            const nextNumber = arr[j + 1];
            if (currentNumber > nextNumber) {
                arr[j + 1] = currentNumber;
                arr[j] = nextNumber;
            }
        }
    }
}
