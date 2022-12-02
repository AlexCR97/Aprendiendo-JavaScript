import { exitProcess, promptNumber } from "../../../lib/input/input.mjs";

var A = await promptNumber()
var B = await promptNumber()
var PROD = A*B
console.log('PROD = '+PROD)

exitProcess()
