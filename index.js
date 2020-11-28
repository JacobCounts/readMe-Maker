const inquirer = require('inquirer');
const fs = require("fs");
const questions = require("./questions");


inquirer.prompt(questions).then((response) => {
    console.log(response);
    
    const tempelate = `
    
# ${response.title}

${response.license}[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

    
## Description: 
    ${response.description}

## Table of Contents:

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Testing](#testing)

## Installation: 
    ${response.install}

## Usage: ${response.usage}


## License: ${response.license}
#### Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

#### The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

#### THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contributing: 
    ${response.contributing}

## Testing: 
    ${response.testing}

## Questions? I can be contacted with the links below:   
* email: ${response.email}
* gitHub: [gitHub](https://github.com/${response.gitHub})

`
        fs.writeFile("README.md", tempelate, (err) => err
        ? console.error(err) : console.log ("Success!"))
})


