const inquirer = require('inquirer');
const fs = require("fs");

inquirer 
.prompt([
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
    },
    {
        type: 'input',
        message: "Provide a brief description of your project.",
        name: 'description',
    },
    {
        type: 'input',
        message: "How do you install your application?",
        name: 'installation',
    },
    {
        type: 'input',
        message: "Usage?",
        name: 'usage',
    },
    {
        type: 'input',
        message: "Contributing",
        name: 'contributing',
    },
    {
        type: 'input',
        message: "Tests",
        name: 'tests',
    },
    {
        type: 'input',
        message: "Table of contents",
        name: 'contents',
    },
    {
        type: 'input',
        message: "License",
        name: 'license',
    },
    {
        type: 'input',
        message: "What is your email?",
        name: 'title',
    }









])
.then(function(user) {
    console.log(user);
    fs.appendFile("log.txt", JSON.stringify(user, null, 2), function(err){
        console.log("Wrote to the file");
    });
});