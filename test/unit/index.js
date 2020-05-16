import { FirstClass } from "../../src/firstdir";
import { expect } from "chai";

describe("FirstClass Tests", function () {
  describe("new FirstClass()", function () {
    it("should create new FirstClass object", function () {
      expect(new FirstClass().someFunction()).to.equal("hi");
    });
  });
});
