const inquirer = require("inquirer")

// 定义用户交互式的questions
const prompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: "author",
            message: "author: "
        },
        {
            type: "input",
            name: "repository",
            message: "GitHub address: ",
        },
        {
            type: "confirm",
            name: "isOk",
            message: "isOK?"
        }
    ])
}

module.exports = {
    prompt
}