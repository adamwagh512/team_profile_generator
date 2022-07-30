const Engineer = require("../lib/engineer");
const engineer = new Engineer("Adam", "001", "adam@me.com", "adamwagh512");

describe("engineer.githubUsername", () => {
  it("should return the github user name of the engineer", () => {
    expect(engineer.GithubUsername).toEqual("adamwagh512");
  });
});

describe("engineer.getGithubUsername", () => {
  it("should return the github user name of the engineer using the getGithubUsername() method", () => {
    expect(engineer.getGithubUsername()).toEqual("adamwagh512");
  });
});

describe("engineer.getRole", () => {
  it("should return the role of Engineer using the getRole() method", () => {
    expect(engineer.getRole()).toEqual("Engineer");
  });
});
