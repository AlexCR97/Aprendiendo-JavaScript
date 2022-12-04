import { exitProcess, promptNumber, promptString } from "../../../lib/input/input.mjs";

var Name = await promptString()
var Salary = await promptNumber()
var Comission = await promptNumber()
var TOTAL = Salary+(Comission*.15)

console.log('TOTAL = R$ '+TOTAL.toFixed(2))

exitProcess()

