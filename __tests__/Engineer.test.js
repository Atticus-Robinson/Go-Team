const Engineer = require("../lib/Engineer");

it("creates the users GitHub account", () => {
  const data = {
    name: "Razzle",
    id: 1,
    email: "razzle@mcdazzle.com",
    occupation: "Engineer",
    github: "razzle",
  };
  const engineer = new Engineer(data);

  expect(engineer.github).toEqual(expect.any(String));
});

it("creates a return of the the engineers occupation", () => {
  const data = {
    name: "Razzle",
    id: 1,
    email: "razzle@mcdazzle.com",
    occupation: "Engineer",
    github: "razzle",
  };
  const engineer = new Engineer(data);

  expect(engineer.getRole()).toEqual(data.occupation);
});
