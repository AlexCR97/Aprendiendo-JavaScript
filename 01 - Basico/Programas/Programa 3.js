/**
 * Programa 3
 * 
 * Dadas las siguientes figuras y sus medidas, calcula e imprime el perimetro de cada una.
 * 
 * Cuadrado
 *      - Lado: 12
 * 
 * Rectangulo
 *      - Base: 16
 *      - Altura: 5
 * 
 * Triangulo rectangulo
 *      - Base: 14
 *      - Altura: 9
 */
var ladoCuadrado = 12
var baseRectangulo = 16
var alturaRectangulo = 5
var baseTriangulo = 14
var alturaTriangulo = 9
var pc = ladoCuadrado*4
var pr = (baseRectangulo*2)+(alturaRectangulo*2)
var pt = baseTriangulo + (alturaTriangulo*2)
console.log ('Perimetro del cuadrado =', pc)
console.log ('Perimetro del rectangulo =',  pr)
console.log ('Perimetro del triangulo = ', pt)

