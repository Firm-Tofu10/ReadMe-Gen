// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"title",
    }, 
        {
            type:"input",
            name:"description",
            message:"enter description",
        },
        {
            type:"input",
            name:"instalation",
            message:"enter instalation instructions",
        },
        {
            type:"input",
            name:"testing",
            message:"enter testing instructions",
        },
        {
            type:"input",
            name:"usage",
            message:"enter usage instructions",
        },
        {
            type:"input",
            name:"contributers",
            message:"enter contributers instructions",
        },
        {
            type:"list",
            name:"license",
            message:"choose license",
            choices:["MIT","ISC","GPL","APACHE2.0","NONE"]
        },
        {
            type:"input",
            name:"github",
            message:"enter github username",
        },
        {
            type:"input",
            name:"email",
            message:"enter email address",
        },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
    console.log(response);
    const  readMeContent = `
# Title: ${response.title}

## Description: ${response.description}

### Tabel of contents

* [License](#license)

* [instalation](#instalation)

* [testing](#testing)

* [usage](#usage)

* [contributers](#contributers)

* [github](#github)

* [email](#email)
    `
    }) 
}

// Function call to initialize app
init();
