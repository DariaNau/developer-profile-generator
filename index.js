const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");
const pdf = require('html-pdf')

const generateHTML = require("./generateHTML");

const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your github username?"
  },
  {
    type: "list",
    name: "color",
    message: "What is your favorite color?",
    choices: ["green", "blue", "pink", "red"]
  }
];

function firstCall() {
  return new Promise(function(resolve, reject) {
    inquirer.prompt(questions).then(async function(answers) {
      const { username, color } = answers;
      const queryUrl = `https://api.github.com/users/${username}`;
      try {
        const response = await axios.get(queryUrl);
        resolve({
          ...response.data,
          color
        });
      } catch (error) {
        reject(error);
      }
      // axios
      //   .get(queryUrl)
      //   .then(function(response) {
      //     resolve({
      //       ...response.data,
      //       color
      //     });
      //   })
      //   .catch(function(error) {
      //     reject(error);
      //   });
    });
  });
}

// firstCall()
//   .then(function(data) {
//     const html = generateHTML(data);
//     console.log(html);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });

 init()

async function init() {
  try {
    const data = await firstCall();
    const html = generateHTML(data);
    await writeFileAsync('./profile.html', html)
    pdf.create(html).toFile('./profile.pdf', function(err, res){
      if(err) throw err;
      console.log(res)
    })
    console.log(html);
  } catch (error) {
    console.log(error);
  }
}

//need to create a data object with response and color to pass to generateHTML?
// let data = {
//   username:
//   color: questions.color
// }

// firstCall()
//   .then(function(data) {
//     const html = HTMLhelper.generateHTML(data);
//     return writeFileAsync("index.html", JSON.stringify(html));
//   })
//   .then(function() {
//     console.log("Successfully wrote to index.html");
//   })
//   .catch(function(err) {
//     console.log(err);
//   });

// async function writeToFile(fileName, data) {
//   try {
//     await writeFileAsync(fileName, data)
//   } catch (error) {
//     console.log(error)
//   }
// }
// function init() {}
// init();


// function writeFileAsync(){
//   return new Promise(function(resolve, reject){
//     fs.writeFile("./dummy.txt", "Hello!", function(err) {
//       if (err) reject(err);
//     });
//   })
// }
