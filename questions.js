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
    },
    {
        type: 'input',
        message: "Usage Information:",
        name: 'usage',
    },
    { 
        type: 'input',
        message: "Which license do you use?",
        name: 'license',
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