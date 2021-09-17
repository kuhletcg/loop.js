// Multiply the number in an array and get odd numbers

function getOddNumber(numbers) {
  let oddNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    // multiplied.push(numbers [i] *3)
    if (numbers[i] > 0) {
      oddNumbers.push(numbers[i] * 3);
    } else {
      return oddNumbers;
    }
  }
  return oddNumbers;
}
console.log(getOddNumber([2, 4, 6, 7, 10]));
