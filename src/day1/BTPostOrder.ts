export default function post_order_search(head: BinaryNode<number>): number[] {
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
    walk(curr.right, path);
    // post
    path.push(curr?.value); // we reach every node after calling walk functions which is in the post step of recursing. It's the post order traversal
    return path;
}
