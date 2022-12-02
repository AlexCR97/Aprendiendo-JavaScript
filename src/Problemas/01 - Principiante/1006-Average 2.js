import { exitProcess, promptNumber } from "../../../lib/input/input.mjs";

var A = await promptNumber()
var B = await promptNumber()
var C = await promptNumber()
var MEDIA = ((A*2)+(B*3)+(C*5))/(2+3+5)

console.log('MEDIA = '+MEDIA.toFixed(1))

exitProcess()
