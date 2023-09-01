import { exitProcess, promptNumber } from "../../../lib/input/input.mjs";

var code1 = await promptNumber()
var num1 = await promptNumber()
var price1 = await promptNumber()
var code2 = await promptNumber()
var num2 = await promptNumber()
var price2 = await promptNumber()
var VALOR = (num1*price1)+(num2*price2)
console.log('VALOR A PAGAR: R$ '+VALOR.toFixed(2))

exitProcess()
