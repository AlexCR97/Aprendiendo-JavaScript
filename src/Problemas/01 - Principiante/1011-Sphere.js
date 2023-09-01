import { exitProcess, promptNumber } from "../../../lib/input/input.mjs";

var Radio = await promptNumber()
var Volum = ((4/3.0)*3.14159*(Math.pow(Radio,3)))

console.log('VOLUME = '+Volum.toFixed(3))

exitProcess()