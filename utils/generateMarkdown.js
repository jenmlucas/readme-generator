// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}
// return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 
## Description
${data.description}

## Table of Contents

## Installation
${data.install}

## Usage
${data.usage}

## License
${renderLicenseBadge(data.license)}

## Contributing
${data.collaborators}

## Tests

## Questions

`;
}

module.exports = generateMarkdown;

