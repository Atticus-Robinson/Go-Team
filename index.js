const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
fs = require("fs");

const inquirer = require("inquirer");
const generate = require("./lib/generate");
const prompts = require("./lib/prompts");

prompts().then((data) => {
  let peopleData = [];
  data.forEach((element) => {
    switch (element.occupation) {
      case "Manager":
        const manager = new Manager(element);
        peopleData.push(manager);
        return;
      case "Engineer":
        const engineer = new Engineer(element);
        peopleData.push(engineer);
        return;
      case "Intern":
        const intern = new Intern(element);
        peopleData.push(intern);
        return;
    }
  });
  fs.writeFile(`./dist/index.html`, generate(peopleData), (err) => {
    if (err) {
      reject(err);
      return;
    }
  });
});
