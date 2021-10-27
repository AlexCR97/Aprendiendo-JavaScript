import { promptNumber, promptString } from './input.js'

const name = await promptString('What is your name?')
console.log("name:", name)

const age = await promptNumber('What is your age?')
console.log("age:", age)

process.exit()
