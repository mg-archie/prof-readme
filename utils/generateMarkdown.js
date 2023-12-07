// function to determine which license badge to display at top of page, passes parameters to generateMarkdown
function renderLicenseBadge(license) {
  if (license === 'Apache' ) {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Creative Commons') {
    return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
  } else if (license === 'Perl') {
    return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'
  } else {
    return '';
  };
}
// function to determine which license link to pass to the function generateMarkdown
function renderLicenseLink(license) {
  if (license === 'Apache' ) {
    return 'Apache \n https://opensource.org/licenses/Apache-2.0';
  } else if (license === 'MIT') {
    return 'MIT \n https://opensource.org/licenses/MIT';
  } else if (license === 'Creative Commons') {
    return 'Creative Commons \n http://creativecommons.org/publicdomain/zero/1.0/'
  } else if (license === 'Perl') {
    return 'Perl \n https://opensource.org/licenses/Artistic-2.0'
  } else {
    return 'Unlicensed';
  };
}
//function that generates markdown based on answers input/selection
function generateMarkdown(answers) {
  const licenseBadge = renderLicenseBadge(answers.license);
  const licenseLink = renderLicenseLink(answers.license);

  return `${licenseBadge} \n
  # ${answers.fileName} \n 
  ## Description \n ${answers.description} \n 
  ## Table of Contents \n - Installation \n - Usage \n - Credits \n - License \n
  ## Installation \n ${answers.installation} \n 
  ## Usage \n ${answers.usage} \n 
  ## License \n ${licenseLink} \n
  ## Contribution Guidelines \n ${answers.contribution} \n 
  ## Tests \n ${answers.test} \n
  ## Questions \n Github: ${answers.github} \n Email: ${answers.email}`;
}

module.exports = generateMarkdown;
