const questions = [
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
    },
    {
        type: 'input',
        message: "Provide a brief description of your project:",
        name: 'description',
    },
    {
        type: 'input',
        message: "How do you install your application?",
        name: 'install',
        default: "npm install"
    },
    {
        type: 'input',
        message: "Usage Information:",
        name: 'usage',
    },
    { 
        type: 'list',
        message: "Select a license",
        name: 'license',
        choices: [{name:'MIT',value:"MIT"}, 
        {name:'Mozilla', value: "Mozilla"}, 
        {name:'GPL 3.0',value: "GPL_3.0"}, 
        {name: "None", value: "None"}],
    },
    {
        type: 'input',
        message: "Anyone else contribute to this project?",
        name: 'contributing',
    },
    {
        type: 'input',
        message: "Testing instructions:",
        name: 'testing',
        default: "npm test"
    },
    {
        type: 'input',
        message: "What is your Email?",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is your gitHub user info?",
        name: 'gitHub',
    }
    ]
    module.exports = questions;