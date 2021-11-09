// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions=[
        {
            type: "confirm",
            name: "confirmReadMe",
            message: "Would you like to create a ReadMe?",
            default: true
        },
        {
            type: "input",
            name: "readMe",
            message: "Let's do this!",
            when: ({confirmReadMe}) => {
                if (confirmReadMe) {
                    return true;
                }else {
                    console.log("Okay, see you later")
                    return false;
                    questions();
                }
            }
        },
        
        {
            type: "input",
            name: "title",
            message: "What is the title of your Project? (Required)",
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log("Please enter a title.");
                    return false;
                }
            }
        },
        // {
        //     type: "confirm",
        //     name: "confirmDescription",
        //     message: "Would you like to add a description to your Readme?",
        //     default: true
        // },
        {
            input: "input",
            name: "description",
            message: "Please enter your descritption:",
            // when: ({ confirmDescription }) => {
            //     if (confirmDescription) {
            //         return true;
            //     } else {
            //         return false;
            //     }
            // }
        },
        {
            type: "confirm",
            name: "confirmInstall",
            message: "Would you like to describe the installation process?",
            default: true
        },
        {
            type: "input",
            name: "install",
            message: "Please describe the installation process",
            when: ({ confirmInstall }) => {
                if (confirmInstall) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: "confirm",
            name: "confirmUsage",
            message: "Would you like to create a usage section?",
            default: true
        },
        {
            type: "input",
            name: "usage",
            message: "Please describe the usage of this project",
            when: ({confirmUsage}) => {
                if(confirmUsage) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "collaborators",
            message: "Please enter your collaborators"
        },
        {
            type: "list",
            name: "license",
            message: "Choose a License for this project",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Open",
            ]
        },
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    const inputData= generateMarkdown(data)
    fs.writeFile(fileName, inputData, (err) => {
        if (err) {console.log(err)}
    })
}
// TODO: Create a function to initialize app
function init() {
    inquirer 
    .prompt(questions)
    .then((answers) => writeToFile("ProjectReadMe.md", answers))
    .catch((error) => console.log(error))
}

// Function call to initialize app
init();



// GIVEN a command-line application that accepts user input

// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions- done (hardcoded)

// WHEN I enter my project title
// THEN this is displayed as the title of the README- Done

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests- Done

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README