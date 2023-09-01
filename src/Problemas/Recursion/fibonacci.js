/**
 * @param {Number} n
 */
const fibonacci = (n) => (n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2));

console.log("fibonacci(0)", fibonacci(0));
console.log("fibonacci(1)", fibonacci(1));
console.log("fibonacci(2)", fibonacci(2));
console.log("fibonacci(3)", fibonacci(3));
console.log("fibonacci(4)", fibonacci(4));
console.log("fibonacci(5)", fibonacci(5));
console.log("fibonacci(10)", fibonacci(10));
console.log("fibonacci(99)", fibonacci(99));
