import { exitProcess, promptNumber } from "../../../lib/input/input.mjs";

var a = await promptNumber();
var b = await promptNumber();
var x = a + b;
console.log("X = " + x);

exitProcess();
