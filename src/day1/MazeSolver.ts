const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
];
function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
): boolean {
    // base cases
    if (
        // out of the range
        curr.x < 0 ||
        curr.x >= maze[0].length ||
        curr.y < 0 ||
        curr.y >= maze.length
    ) {
        return false;
    }

    if (curr.x === end.x && curr.y === end.y) {
        // when we reach to the end
        path.push(end); // make sure the end is added to the path.
        return true;
    }

    if (maze[curr.y][curr.x] === wall) {
        // if we hit the wall
        return false;
    }
    if (seen[curr.y][curr.x]) {
        return false;
    }

    //pre
    // before each recursion call, operate these two so that we store some of the necessary information
    seen[curr.y][curr.x] = true;
    path.push(curr);
    // recursion
    for (let i = 0; i < dir.length; i++) {
        const [x, y] = dir[i];
        if (
            walk(
                maze,
                wall,
                {
                    x: curr.x + x,
                    y: curr.y + y,
                },
                end,
                seen,
                path,
            )
        ) {
            return true;
        }
    }
    // after each recursion FAILS, pop the path we previously step on.
    //post
    path.pop();

    // return
    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];
    for (let i = 0; i < maze.length; i++) {
        // make sure you don't try to reach a value from undefined
        seen.push(new Array<boolean>(maze[0].length).fill(false));
    }
    walk(maze, wall, start, end, seen, path);
    console.log(path);
    return path;
}
