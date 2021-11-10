// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "readMe",
        message: "Let's create a ReadMe. (Press Enter to Begin)",
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
    {
        input: "input",
        name: "description",
        message: "Please enter your descritption:",
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
        when: ({ confirmUsage }) => {
            if (confirmUsage) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: "input",
        name: "collaborators",
        message: "Please add your contributions."
    },
    {
        type: "list",
        name: "license",
        message: "Choose a License for this project.",
        choices: [
            "MIT",
            "Apache",
            "GNU GPL v3",
        ]
    },
    {
        type: "input",
        name: "tests",
        message: "Please enter your Test information here"
    },
    {
        type: "input",
        name: "emailLink",
        message: "Enter your email. (Required)",
        validate: emailLink => {
            if (emailLink) {
                return true;
            } else {
                console.log("Please enter your email!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "username",
        message: "Enter your Github Username. (Required)",
        validate: username=> {
            if (username) {
                return true;
            } else {
                console.log("Please enter your Github username");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "gitHubProjectLink",
        message: "Enter your repositories name. Example: readme-generator. (Required)",
        validate: gitHubProjectLink=> {
            if (gitHubProjectLink) {
                return true;
            } else {
                console.log("Please enter the link to your Github project");
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(filename, readMeData) {
    const inputData = generateMarkdown(readMeData)
    fs.writeFile(filename, inputData, (err) => {
        if (err) { console.log(err) }
    })
}
// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => writeToFile("./dist/ProjectReadMe.md", answers))
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
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under- done

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile-done

// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions- done

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README-done