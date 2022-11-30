import { exitProcess, promptNumber } from "../../../lib/input/input.mjs"

var pi = 3.14159
var R = await promptNumber()
var A =(pi*(R*R)).toFixed(4)

console.log('A = '+ A)

exitProcess()