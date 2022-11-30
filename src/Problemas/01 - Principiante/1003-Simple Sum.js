import { exitProcess, promptNumber } from "../../../lib/input/input.mjs";

var A = await promptNumber()
var B = await promptNumber()
var SOMA = A+B

console.log('SOMA = '+SOMA)

exitProcess()

