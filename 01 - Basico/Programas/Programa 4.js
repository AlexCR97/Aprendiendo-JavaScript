/**
 * Programa 4
 * 
 * Dadas las siguientes figuras y sus medidas, calcula e imprime el area de cada una.
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
 * 
 * Circulo
 *      - Radio: 13
 */
 var ladoCuadrado = 12
 var baseRectangulo = 16
 var alturaRectangulo = 5
 var baseTriangulo = 14
 var alturaTriangulo = 9
 var radioCirculo = 13
 const PI = 3.1416
 var areaCuadrado = ladoCuadrado * ladoCuadrado
 var areaRectangulo = baseRectangulo * alturaRectangulo
 var areaTriangulo = (baseTriangulo * alturaTriangulo) / 2
 var areaCirculo = PI * (radioCirculo * radioCirculo)

 console.log ('Area del cuadrado =', areaCuadrado)
 console.log ('Area del retangulo =', areaRectangulo)
 console.log ('Area del triangulo =', areaTriangulo)
 console.log ('Area del circulo =', areaCirculo)
 
