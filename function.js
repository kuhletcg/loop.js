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
const array = ["Athandwa", "Luzelwande", "Esihle"];

const items = ["Athandwa", "Luzelwande", "Esihle"];
const valuesToRemove = ["Luzelwande"];
const filteredItems = items.filter((item) => !valuesToRemove.includes(item));

console.log(filteredItems);

OR;

const items = ["Luzelwande", "Esihle", "Athandwa"];

const removeItem = (items, i) =>
  items.slice(0, i - 1).concat(items.slice(i, items.length));

let filteredItems = removeItem(items, 2);
filteredItems = removeItem(filteredItems, 3);

console.log(filteredItems);

// Get highest and a lowest number in an array
// const numbers = [20, 10, 3, 0]

// function getHighestLowest(number){

// }

function getHighestAndLowest(numbers) {
  let highestAndLowest = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      highestAndLowest.push(numbers[i]);
    }
  }
  return highestAndLowest;
}
console.log(highestAndLowest(numbers, [6, 03, 31, 10]));

// Return students that has passed
const students = [
  { name: "Luzelwande", mark: 59 },
  { name: "Athandwa ", mark: 45 },
  { name: "Esihle", mark: 36 },
];

const getStudentsHasPassed = (students) => {
  var totalMarks = 0;
  for (let i = 0; i < students.length; i++) {
    totalMarks += students[i].mark;
  }

  var currentTotal = totalMarks / (students.length * 50);
  return currentTotal * 50;
};
