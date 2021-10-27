/**
 * Programa 5
 * 
 * La distancia entre dos puntos en un plano cartesiano se calcula con la siguiente formula:
 * https://www.google.com/imgres?imgurl=http%3A%2F%2Fpspc1.weebly.com%2Fuploads%2F2%2F4%2F5%2F4%2F24543920%2F2278227_orig.png&imgrefurl=http%3A%2F%2Fpspc1.weebly.com%2Fdistancia-entre-puntos.html&tbnid=Xko6zZe-uvlIwM&vet=12ahUKEwj46JLn7ZbzAhVOe6wKHXiJDeMQMygIegUIARDLAQ..i&docid=RK-T4Kp28VqNYM&w=520&h=122&itg=1&q=distancia%20entre%20dos%20puntos%20formula&ved=2ahUKEwj46JLn7ZbzAhVOe6wKHXiJDeMQMygIegUIARDLAQ
 * 
 * Dados los puntos (x1, x2) y (y1, y2), calcula la distancia entre ambos e imprime el resultado.
 * Los valores de los puntos pueden ser cualquier numero.
 */

var x1 = 10
var x2 = 20
var y1 = 15
var y2 = 30
const distanciaPuntos = Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)
const raizCuadrada = Math.sqrt (distanciaPuntos)
console.log ('La distancia entre ambos punto es =', raizCuadrada)