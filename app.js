import inquirer from "inquirer";
// const inquirer  = require("inquirer");
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');
// const pageHTML = generatePage(name,github);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'input' ,
      name: 'github',
      message: 'What is your Github username'
    },
    {
      type: 'input',
      name: 'about',
      message: 'Give some information about yourself:'
    }
  ])
};
  // promptUser().then(answers => console.log(answers));
  
  const promptProject = () => {
    console.log(`
  =================
  Add a New Project
  =================
  `);
    return inquirer.prompt([ 
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe your project (Required)'
      },
      {
        type: 'checkbox',
        name: 'languages',
        choices: ['JavaScript','HTML', 'CSS', 'jQUery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter a Github link to your project. (Required)'
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }
    ])
  }
  promptUser()
  .then(answers => console.log(answers))
  .then(promptProject)
  .then(projectAnswers => console.log(projectAnswers))






// fs.writeFile('./index.html', generatePage(name, github), err => {
//   if (err) throw new Error(err);

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });
