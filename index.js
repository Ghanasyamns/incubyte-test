function add(numbers) {
  if (numbers === "") return 0;
  let delimiter = ",";
  let numberString = numbers;

  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n", 2);
    if (parts.length < 2) return 0;
    const delimiterSection = parts[0].substring(2);
    numberString = parts[1];

    // Handle multiple delimiters in format [delim1][delim2]...
    const delimiters = [];
    let currentDelimiter = "";
    let inDelimiter = false;

    for (let char of delimiterSection) {
      if (char === "[") {
        inDelimiter = true;
        currentDelimiter = "";
      } else if (char === "]") {
        inDelimiter = false;
        delimiters.push(currentDelimiter);
      } else if (inDelimiter) {
        currentDelimiter += char;
      }
    }

    // If no delimiters found in [ ], assume single delimiter
    if (delimiters.length === 0 && delimiterSection) {
      delimiters.push(delimiterSection);
    }

    // Replace newlines and all delimiters with comma
    let normalizedString = numberString.replace(/\n/g, ",");
    for (const delim of delimiters) {
      normalizedString = normalizedString.split(delim).join(",");
    }

    delimiter = ",";
    numberString = normalizedString;
  } else {
    // Handle newlines for non-custom delimiter case
    numberString = numbers.replace(/\n/g, ",");
  }

  const numberArray = numberString
    .split(delimiter)
    .map((num) => parseInt(num))
    .filter((num) => !isNaN(num));

  // handle for negative numbers also
  const negatives = numberArray.filter((num) => num < 0);
  if (negatives.length > 0) {
    const errorMessage = "negative numbers not allowed: " + negatives.join(",");
    return new Error(errorMessage);
  }
  return numberArray.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };

console.log(add("//[*][%]\n1*2%8"));
