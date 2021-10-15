const analyse = require("../scripts/arrayAnalysis");

test("analyse the array", () => {
  expect(analyse([1, 8, 3, 4, 2, 6])).toMatchObject({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
