function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = ",";
  let numberString = numbers;

  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n", 2);
    delimiter = parts[0].substring(2);
    numberString = parts[1];
  }

  const numberArray = numberString
    .replace(/\n/g, delimiter)
    .split(delimiter)
    .map((num) => parseInt(num));
  return numberArray.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };
