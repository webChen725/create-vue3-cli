const { promisify } = require("util");
const ora = require('ora');
const { exit } = require("process");

const clone = async function (repo, desc) {
    const download = promisify(require("download-git-repo"))
    // 显示下载进度
    const process = ora(`the Vue3 project is being created....`);
    process.start();
    try {
        await download(repo, desc);
        process.succeed();
    }catch(error){
        process.fail(error.message)
        exit(1)
    }
}

module.exports = {
    clone
}