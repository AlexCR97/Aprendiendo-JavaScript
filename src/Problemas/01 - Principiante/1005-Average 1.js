import { exitProcess, promptNumber } from "../../../lib/input/input.mjs"

var A = await promptNumber()
var B = await promptNumber()
var MEDIA = ((A*3.5)+(B*7.5))/(3.5+7.5)
console.log('MEDIA = '+MEDIA.toFixed(5))

exitProcess()
