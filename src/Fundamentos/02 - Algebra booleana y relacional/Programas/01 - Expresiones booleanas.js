/**
 * Escribe en codigo JavaScript las siguientes expresiones booleanas e imprime el resultado de cada una.
 * 
 ** 0 AND 0 OR 1
 ** 1 AND 1 OR 1 AND 0 OR 0 AND 1
 ** (1 OR 1) AND (0 OR 1) AND (0 OR 0)
 ** (1 AND 1) OR (0 AND 1) OR (0 AND 0)
 ** (1 AND 0) OR ((1 0R 1) AND (0 AND 0))
 ** 1 AND (0 OR (1 AND ((0 OR 1) OR (1 AND 1))))
 */

var op1 = false && false || true
var op2 = true && true || true && false || false && true
var op3 = (true || true) && (false || true) && (false || false)
var op4 = (true && true) || (false && true)|| (false && false)
var op5 = (true && false) || ((true || true) && (false && false))
var op6 = true && (false || (true &&((false || true) || (true && true))))

console.log('Operacion 1 = ',op1)
console.log('Operacion 2 = ', op2)
console.log('Operacion 3 =', op3)
console.log('Operacion 4 =', op4)
console.log('Operacion 5 =', op5)
console.log('Operacion 6 =',op6)
