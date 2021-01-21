
 const fs = require('fs')
//Open the JSON file and read its content
const dataBuffer = fs.readFileSync('1-json.json')

const JSONtext = dataBuffer.toString()
console.log(JSONtext)

const parsedJSON = JSON.parse(JSONtext)
console.log(parsedJSON)

//updated the JSON file's contents
// parsedJSON.name = 'Akshaya Valluri'
// parsedJSON.city = 'Sydney'
// parsedJSON.age = 6

// console.log(parsedJSON)

// //write the changes made to the json file to disk
// const JSONoutput= JSON.stringify(parsedJSON)
// fs.writeFileSync('1-json.json',JSONoutput)