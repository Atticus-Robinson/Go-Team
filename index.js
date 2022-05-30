const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
fs = require("fs");

prompts().then((input) => {
  let team = [];
  input.forEach((element) => {
    switch (element.occupation) {
      case "Manager":
        const manager = new Manager(element);
        team.push(manager);
        return;
      case "Engineer":
        const engineer = new Engineer(element);
        team.push(engineer);
        return;
      case "Intern":
        const intern = new Intern(element);
        team.push(intern);
        return;
    }
  });
  fs.writeFile(`./dist/index.html`, markupGenerator(team), (err) => {
    if (err) {
      reject(err);
      return;
    }
  });
});
