function add(numbers) {
  if (numbers === "") return 0;

  const numberArray = numbers.split(",").map((num) => parseInt(num));
  return numberArray.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };
