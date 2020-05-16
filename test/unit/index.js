import { SendBlue } from "../../src/sendblue";
import { expect } from "chai";

describe("SendBlue Tests", function () {
  describe("new SendBlue()", function () {
    it("should create new SendBlue object", function () {
      expect(new SendBlue().sendMessage()).to.equal("hi");
    });
  });
});
