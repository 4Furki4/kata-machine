const foo = (n: number): number => {
    // base cases!
    if (n < 0) return 0;
    if (n === 0) return 0;
    if (n === 1) return 1;

    // pre step that can be executed before the recursion called!

    const result = n + foo(n - 1)!;

    // post step that can be executed after the recursion called!
    console.log(result);

    // return the result to the return address
    return result;
};

foo(1);
