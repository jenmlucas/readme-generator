// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseName = license;
  if (licenseName === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (licenseName === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (licenseName === "GNU GPL v3") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else {
    return "N/A";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}
// let licenseLink = license;
// if (licenseLink === "MIT") {
//   return `[![License: MIT](https://opensource.org/licenses/MIT)`
// } else if (licenseLink === "Apache") {
//   return `[![License](https://opensource.org/licenses/Apache-2.0)`
// } else if (licenseLink === "GNU GPL v3") {
//   return `[![License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)`
// } else {
//   return "N/A";
// }
// };

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = license;
  if (licenseSection === "MIT") {
    return `MIT License

    Copyright (c) [year] [fullname]
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.`
  } else if (licenseSection === "Apache") {
    return `Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
    
        http://www.apache.org/licenses/LICENSE-2.0
    
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`
  } else if (licenseSection === "GNU GPL v3") {
    return `Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.`
  } else {
    return "N/A";
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
${renderLicenseBadge(data.license)} 

# ${data.title}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)

## Installation
${data.install}

## Usage
This is what the application will look like on your device.
${data.usage}
[Github Link](https://github.com/${data.username}/${data.gitHubProjectLink})

## License
${renderLicenseSection(data.license)}

## Contributing
${data.collaborators}

## Tests
${data.tests}

## Questions
Please checkout my [Github](https://github.com/${data.username}) for other projects. If you have any other questions or concerns, feel free to email me at ${data.emailLink}.

`;
}

module.exports = generateMarkdown;

