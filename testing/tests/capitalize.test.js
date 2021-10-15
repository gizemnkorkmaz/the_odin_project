const capitalize = require("../scripts/capitalize");

test("capitalize the first letter", () => {
  expect(capitalize("capitalized")).toBe("Capitalized");
});
