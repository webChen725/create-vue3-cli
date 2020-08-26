#!/usr/bin/env node
const program = require("commander");

// Create a command line command
//Detect current scaffold tool version
program.version(require("../package.json").version, "-v, --version")
// Create a Vue3 project with a project template built using WebPack
program.command('create <ProjectName>')
    .description('create a new vue3-beta Project using webpack to built')
    .action(require("./action/create"))
program.parse(process.argv)