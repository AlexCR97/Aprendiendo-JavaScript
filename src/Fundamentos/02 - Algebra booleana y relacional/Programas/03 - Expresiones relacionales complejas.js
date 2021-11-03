/**
 * Escribe en codigo JavaScript las siguientes expresiones relacionales complejas
 * e imprime el resultado de cada una.
 * 
 ** (21 > 9) AND (17 <= 16)
 ** (10 == '10') OR (10 === 10) OR (10 === '10')
 ** 5 >= 5 OR 100 === (99 + (-1)) AND ('0' + 1 == 1)
 ** (-32 < 12) AND ((3^3 == '27') OR (3 * 3 * 3 === (54 / 2))) OR TRUE
 ** !FALSE AND (6 <= 9) OR !(TRUE AND !(39 != '39') OR FALSE)
 */
 var op1 = (21 > 9) && (17 <= 16)
 var op2 = (10 == '10') || (10 === 10) || (10 === '10')
 var op3 = 5 >= 5 || 100 === (99 + (-1)) && ('0' + 1 == 1)
 var op4 = (-32 < 12) && ((Math.pow(3,3)  == '27') || (3 * 3 * 3 === (54 / 2))) || true
 var op5 = !false && (6 <= 9) || !(true && !(39 != '39') || false)

 console.log('la variable 1 es:', op1)
 console.log('la variable 2 es:', op2)
 console.log('la variable 3 es:', op3)
 console.log('la variable 4 es:', op4)
 console.log('la variable 5 es:', op5)