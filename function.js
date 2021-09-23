// Multiply the number in an array and get odd numbers

function getOddNumber(numbers) {
  let oddNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      oddNumbers.push(numbers[i] * 3);
    } else {
      return oddNumbers;
    }
  }
  return oddNumbers;
}
console.log(getOddNumber([2, 4, 6, 7, 10]));

// Calculate the total marks in a list

const grades = [80, 7, 68];

function getAvg(grades) {
  const total = grades.reduce((acc, c) => acc + c, 0);
  return total;
}

const average = getAvg(grades);
console.log(average);

//  Remove array
const array = ["Kuhle", "Luzelwande", "Esihle"];

const items = ["Athandwa", "Luzelwande", "Esihle"];
const valuesToRemove = ["Luzelwande"];
const filteredItems = items.filter((item) => !valuesToRemove.includes(item));

console.log(filteredItems);
