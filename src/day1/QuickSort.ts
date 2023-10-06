function partition(arr: number[], lo: number, hi: number) {
    const pivot = arr[hi];
    let idx = lo - 1;

    for (let i = lo; i < hi; ++i) {
        // search the values less than our pivot and put them to the beggining in order.
        if (arr[i] <= pivot) {
            idx++;
            const tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    }
    idx++; // incase we can't find more number less than our pivot, we put our pivot to the idx so that the right side of the pivot will be bigger than pivot.
    arr[hi] = arr[idx];
    arr[idx] = pivot;

    return idx;
}

function qs(arr: number[], lo: number, hi: number) {
    //base case
    if (lo >= hi) {
        return;
    }

    const pivotIdx = partition(arr, lo, hi); // we define new pivots each call so that we apply "divide and conq"

    qs(arr, lo, pivotIdx - 1);
    qs(arr, pivotIdx + 1, hi);
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
