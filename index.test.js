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
    expect(add("//[***]\n1***2***3")).toBe(6);
  });
  test("should support multiple delimiter", () => {
    expect(add("//[*][%]\n1*2%3")).toBe(6);
  });

  test("should throw an exception for a single negative number", () => {
    try {
      add("1,-2");
    } catch (error) {
      expect(error.message).toBe("negative numbers not allowed: -2");
    }
  });
  test("should throw an exception for multiple negative numbers", () => {
    try {
      add("1,-2,-3");
    } catch (error) {
      expect(error.message).toBe("negative numbers not allowed: -2,-3");
    }
  });
  test("should support multiple custom delimiters with longer length", () => {
    expect(add("//[***][%%%]\n1***2%%%3")).toBe(6);
  });

  test("should support multiple custom delimiters with varying long lengths", () => {
    expect(add("//[abc][defgh]\n1abc2defgh3")).toBe(6);
  });
  test("should handle custom delimiters without numbers", () => {
    expect(add("//[***]")).toBe(0);
  });
});
