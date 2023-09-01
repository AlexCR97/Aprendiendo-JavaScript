/**
 * @param {Number} n
 * @returns {Number} The factorial of `n`.
 */
function factorial(n) {
  if (n <= 1) {
    return n;
  }

  let result = 1;

  for (let i = 1; i < n + 1; i++) {
    result *= i;
  }

  return result;
}

console.log("factorial(0)", factorial(0));
console.log("factorial(1)", factorial(1));
console.log("factorial(2)", factorial(2));
console.log("factorial(3)", factorial(3));
console.log("factorial(4)", factorial(4));
console.log("factorial(5)", factorial(5));
console.log("factorial(99999)", factorial(99999));
