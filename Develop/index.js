// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// linking to page where the README is developed 
const generatePage = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
            validate: nameInpute => {
                if (nameInpute) {
                    return true;
                } else {
                    console.log ('Pleae enter your project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description of your project',
            validate: nameInpute => {
                if (nameInpute) {
                    return true;
                } else {
                    console.log ('Pleae enter your project description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install the app?',
            validate: nameInpute => {
                if (nameInpute) {
                    return true;
                } else {
                    console.log ('Pleae enter how to install the app!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do we use your app?',
            validate: nameInpute => {
                if (nameInpute) {
                    return true;
                } else {
                    console.log ('Pleae enter how we use your app!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contriputors',
            message: 'list collaborators, if any.'
        },
        {
            type: 'input',
            name: 'test', 
            message: 'What command should be run to run tests?',
            default: 'npm test'
        },
        {
            type: 'lists',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: ["Apache Licence 2.0", "MIT License", "GNU GPLv3"],
            validate: nameInpute => {
                if (nameInpute) {
                    return true;
                } else {
                    console.log ('Please choose a license!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false; 
                }
            } 
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false; 
                }
            }
    
        },
        
    ]);
};

// TODO: Create a function to write README file
 function writeToFile (fileName, data) {
     fs.writeFile('README.md', data, error => {
         if (error) {
             return console.log('Sorry there was an error :' + error);
         } else {
             console.log('Sucess! your README has been written!')
         }
     });
 }

// TODO: Create a function to initialize app
const writeFile = data => {
    fs.writeFile('YourREADME.md', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the README has been created 
        } else {
            console.log("Your README has been successfully created!")
        }
    })
}; 

// Function call to initialize app
questions()
.then(answer => {
    return generatePage(answer);
})
.then(data => {
    return writeFile(data);
})
.catch(err => {
    console.log(err)
})
