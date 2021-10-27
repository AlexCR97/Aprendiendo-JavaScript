var x = true  // 1
var y = false // 0

var z1 = x && x // AND
var z2 = y || y // OR

var and1 = false && false
var and2 = false && true
var and3 = true && true
var and4 = true && false

var or1 = false || false
var or2 = false || true
var or3 = true || true
var or4 = true || false

console.log('AND1 =',and1)
console.log('AND2 =',and2)
console.log('AND3 =',and3)
console.log('AND4 =',and4)
console.log('OR1 =',or1)
console.log('OR2 =',or2)
console.log('0R3 =',or3)
console.log('OR4 =',or4)
