/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let fib1 = 0;
    let fib2 = 1;
    while (true) {
        yield fib1;
        let tmp = fib1;
        fib1 = fib2;
        fib2 += tmp;
    }
    return;
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */