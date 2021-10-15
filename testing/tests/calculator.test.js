const calculator = require("../scripts/calculator");
test("calculate addition", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("calculate subtraction", () => {
  expect(calculator.subtract(7, 2)).toBe(5);
});

test("calculate division", () => {
  expect(calculator.divide(6, 2)).toBe(3);
});

test("calculate multiplication", () => {
  expect(calculator.multiply(9, 2)).toBe(18);
});
