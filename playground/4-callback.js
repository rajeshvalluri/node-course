const chalk = require('chalk')
const add = ( num1,num2, callback) => {
    setTimeout( () => {
        sumTotal = num1 + num2
        prodTotal = num1 * num2
        callback({sumTotal,prodTotal})
    },1000)
}

add( 3, 4, (data) => {
    console.log(chalk.bold.red(data.sumTotal))
    console.log(chalk.bold.italic.blue(data.prodTotal))
})