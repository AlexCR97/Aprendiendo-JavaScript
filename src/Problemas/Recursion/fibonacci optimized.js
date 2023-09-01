function fibonacci(n) {
  return _fibonacci(n, {});
}

function _fibonacci(n, memo) {
  if (memo[n] !== undefined && memo[n] !== null) {
    return memo[n];
  }

  const result = n < 2 ? n : _fibonacci(n - 1, memo) + _fibonacci(n - 2, memo);
  memo[n] = result;
  return result;
}

console.log("fibonacci(0)", fibonacci(0));
console.log("fibonacci(1)", fibonacci(1));
console.log("fibonacci(2)", fibonacci(2));
console.log("fibonacci(3)", fibonacci(3));
console.log("fibonacci(4)", fibonacci(4));
console.log("fibonacci(5)", fibonacci(5));
console.log("fibonacci(10)", fibonacci(10));
console.log("fibonacci(20)", fibonacci(20));
console.log("fibonacci(30)", fibonacci(30));
console.log("fibonacci(99)", fibonacci(99));
