export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}

function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    //base case
    if (curr === null) {
        return path;
    }
    // recurse
    // pre

    // recurse
    walk(curr.left, path);
    path.push(curr?.value); // we reach every node betwixt the walk function calls which makes it in order traversal
    walk(curr.right, path);
    // post
    return path;
}
