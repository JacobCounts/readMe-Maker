const inquirer = require('inquirer');
const fs = require("fs");
const questions = require("./questions");


inquirer.prompt(questions).then((response) => {
    console.log(response);
    
    const tempelate = `
    
# ${response.title}
    
## Description: ${response.description}

# Table of Contents
* [description](#description)
* [installation](#installation)
* [usage](#usage)
* [contributing](#contributing)
* [tests](#tests)

## Installation: ${response.install}

## Usage: ${response.usage}


## License: ${response.license}[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Contributing: ${response.contributing}

## Testing: ${response.testing}

## Questions? I can be contacted with the links below:   
* email: ${response.email}
* gitHub: [gitHub](https://github.com/${response.gitHub})

`
        fs.writeFile("README.md", tempelate, (err) => err
        ? console.error(err) : console.log ("Success!"))
})


