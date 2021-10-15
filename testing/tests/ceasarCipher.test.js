const ceasarCipher = require("../scripts/ceasarCipher");
test("encrypt the cipher", () => {
  expect(ceasarCipher("defend the east wall of the castle", 1)).toBe(
    "efgfoe uif fbtu xbmm pg uif dbtumf"
  );
});
