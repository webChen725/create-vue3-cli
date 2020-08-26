const which =require("which");
const {exec, findNpm} = require("./exec")
const chalk = require("chalk")

/**
 * 执行npm install 命令，安装项目相关依赖
 */
const install = () => {
    const npm = findNpm();
    return new Promise((resolve) => {
        exec(which.sync(npm), ['install'], function(){
            console.log(chalk.white.bold.bgGreen("\n>>>>  The project depends on installation completion..  "));
            resolve()
        })
    })
}

module.exports = {
    install
}