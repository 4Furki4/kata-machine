var foo = function (n) {
    if (n < 0)
        return 0;
    if (n === 0)
        return 0;
    if (n === 1)
        return 1;
    var result = n + foo(n - 1);
    console.log(result);
    return result;
};
foo(5);
