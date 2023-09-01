import { exitProcess, promptNumber } from "../../../lib/input/input.mjs";

// + - * / %
//
var age = await promptNumber()
var ano = age/365
var mes =(age/12)/30
var dia = (age % 365)
var dias = dia % 30
console.log(ano.toFixed(0)+ ' ano (s)')
console.log(Math.round(mes) + ' mes (es)')
console.log(dias.toFixed(0) +' dia (as)')

exitProcess()