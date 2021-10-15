const reverseString = require("../scripts/reverseString");
test("reverse the string", () => {
  expect(reverseString("reverse")).toBe("esrever");
});
