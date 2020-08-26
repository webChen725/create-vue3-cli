const path = require("path");
const { prompt } = require("../command/create-demo");
const chalk = require("chalk");
const { updateFile } = require("../../lib/file");
const { install } = require("../../lib/install");
// 创建vue3项目action处理:
const createDemo = (projectName) => {
    prompt().then(async (results) => {
        const { author, repository, isOk } = results;
        console.log(isOk)
        if (!isOk){
            return;
        }
        // clone项目模板
        const { clone } = require("../../lib/download");
        console.log(chalk.green(`Start creating projects: ${projectName}`))
        await clone('github.com:webChen725/vue3-template', projectName)
        console.log(chalk.green(`Projects ${projectName} creating a successful`));
        // 更新package.json配置
        const packageJson = path.join(path.resolve(projectName), "package.json");
        const repositoryObj = repository ? {
            type: "git",
            url: repository
        } : {};
        updateFile(packageJson, {
            name: projectName,
            author,
            repository: repositoryObj
        })
        // 安装相应依赖
        console.log(chalk.blue("项目依赖安装中..."))
        const projectPath = path.resolve(projectName)
        process.chdir(projectPath)
        install().then(() => {
            console.log(chalk.green("\nOnce the project is created, you can launch the project in the following directions: "))
            console.log(chalk.blue(`\n\t cd ${projectName}`))
            console.log(chalk.blue(`\n\t If you are currently in the development phase of debugging, you can execute: ${chalk.green.bold("npm run dev")}`))
            console.log(chalk.blue(`\n\t If you are currently in the online packaging phase, you can do this: ${chalk.green.bold("npm run build")}`))
        })
    })
 }

 module.exports = createDemo