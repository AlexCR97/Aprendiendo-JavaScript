import { exitProcess, promptNumber } from "../../../lib/input/input.mjs";

var NUMBER = await promptNumber()
var HOURS = await promptNumber()
var AMOUNT = await promptNumber()
var SALARY = HOURS*AMOUNT

console.log('NUMBER = '+NUMBER) 
console.log ('SALARY = U$ '+SALARY.toFixed(2))

exitProcess()