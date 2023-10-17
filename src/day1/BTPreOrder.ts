export default function pre_order_search(head: BinaryNode<number>): number[] {
    let path: number[] = [];
    walk(head, path);
    return path;
}

function walk(curr: BinaryNode<number> | null, path: number[]): void {
    //base case
    if (curr === null) {
        return;
    }
    // recurse
    // pre
    path.push(curr?.value); // we reach every node in the first place which makes it pre order traversal

    // recurse
    walk(curr.left, path);
    walk(curr.right, path);

    // post
}
