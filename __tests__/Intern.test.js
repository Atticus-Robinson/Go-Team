const Intern = require("../lib/Intern");

it("creates the users GitHub account", () => {
  const data = {
    name: "Razzle",
    id: 1,
    email: "razzle@mcdazzle.com",
    occupation: "Intern",
    school: "Derek Zoolander Center",
  };
  const intern = new Intern(data);

  expect(intern.school).toEqual(expect.any(String));
});

it("creates a return of the the interns occupation", () => {
  const data = {
    name: "razzle",
    id: 1,
    email: "razzle@mcdazzle.com",
    occupation: "Intern",
    school: "Derek Zoolander Center",
  };
  const intern = new Intern(data);

  expect(intern.getRole()).toEqual(data.occupation);
});
