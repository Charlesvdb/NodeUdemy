const validator = require("validator")
const getNotes = require('./notes.js')
const chalk = require("chalk")

const msg = getNotes()
console.log(msg)
console.log("charles")

console.log(validator.isEmail("andrew@example.com"))
console.log(validator.isURL("www.panenco.com"))
console.log(chalk.green("Success!"))

