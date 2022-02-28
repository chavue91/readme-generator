// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (license == 'Apache') {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  } else if (license == 'ISC') {
    return `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg))`
  } else if (license == 'BSD') {
    return `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`
  } else if (license == 'No license') {
    return ''
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'MIT') {
    return `![License: MIT](https://opensource.org/licenses/MIT)`
  } else if (license == 'Apache') {
    return `![License](https://opensource.org/licenses/Apache-2.0)`
  } else if (license == 'ISC') {
    return `![License: ISC](https://opensource.org/licenses/ISC)`
  } else if (license == 'BSD') {
    return `![License](https://opensource.org/licenses/BSD-3-Clause)`
  } else if (license == 'No license') {
    return ''
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'MIT') {
    return `## License
    The license for this application is [${license}]`
  } else if (license == 'No license') {
    return ''
  }
};
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  
  ## Credits
  ${data.credits}

  ### License
  ${data.license}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(license)}

  #### Github
  ${data.github}
`;
}

module.exports = generateMarkdown;
