
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />
  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#Installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  
  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Collaborators

  ${data.contibuters}

  ## Badges
  This project falls under the license:
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)

  ## Questions
  *[Github] (https://github.com/${data.github})
  * For any additioanl questions, reach me at my [email] (${data.email})
  
  ## Tests

  ${data.test}

`;
}

module.exports = generateMarkdown;
