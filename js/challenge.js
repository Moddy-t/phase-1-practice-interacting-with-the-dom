const { expect } = require("chai");
const { someFunction } = require("./helpers.js");

describe("Helpers Module", () => {
  describe("someFunction", () => {
    it("should return the expected result", () => {
      const result = someFunction();
      expect(result).to.equal(expectedValue);
    });
  });
});