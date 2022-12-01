import { exitProcess, promptNumber } from "../../../lib/input/input.mjs";

var A = await promptNumber()
var B = await promptNumber()
var C = await promptNumber()
var D = await promptNumber()
var DIFERENCA = ((A*B)-(C*D))

console.log ('DIFERENCA = '+DIFERENCA)

exitProcess()