const { add } = require("./index");

describe("String Calculator", () => {
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("should return the number for a single number string", () => {
    expect(add("1")).toBe(1);
  });

  test("should return the sum of two comma-separated numbers", () => {
    expect(add("1,5")).toBe(6);
  });
  test("should handle any amount of comma-separated numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
  });
  test("should handle newlines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
  });
  test("should support custom delimiter", () => {
    expect(add("//;\n1;2")).toBe(3);
  });
});
