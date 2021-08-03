//assign a variable name then assign it to a name
var name = "Lholho";
name = "Clie";
console.log(name);

//split the following: Welcome to this Javascript Guide! and join it
var string = "Welcome to this Javascript Guide!";
var string = string.split("").join();
console.log(string);

//Multiply all numbers in an array by 4
var numbers = [2, 4, 6, 8];
var multiplied = [];
for (var i = 0; i < numbers.length; i++) {
  multiplied.push(numbers[i] * 4);
}
console.log(multiplied);

//Print out numbers from 0-20
for (var i = 0; i <= 20; i++) {
  console.log(i);
}

// Reverse words
var string = "Welcome to this Javascript Guide!";
var reverseString = string.split(" ").reverse().join(" ");
console.log(reverseString);

objects;
function hasProp(name, checkName) {
  //   var res = false;
  if (name != checkName) {
    console.log(`value ${name} != ${checkName} `);
  } else {
    console.log(`value ${name} == ${checkName} `);
  }
}

var ts1 = hasProp(obj.name, "mark");
var ts2 = hasProp(obj.name, "name");

console.log(`ts1`, ts1);
console.log(`ts2`, ts2);

object;
var obj = { name: "mark", middleName: "max", lastName: "Jax" };
var obj2 = { middleName: "max", lastName: "Jax" };

// Create a function that will give you a negative number of a given number

const negative = (num) => {
  let newN = num - num;

  if (num <= 0) {
    return num;
  } else {
    return newN - num;
  }
};

console.log(negative(9));

//  Write function that return an array of positive numbers

function getPositiveNumber(numbers) {
  let positiveNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      positiveNumbers.push(numbers[i]);
    }
  }
  return positiveNumbers;
}
console.log(getPositiveNumber([6, -1, 4, -8, 10]));

function getNumber(numbers) {
  let number = [];

  for (let i = 0; 1 < number.length; i++) {
    if (number[i] > 0) {
      numbers.push(numbers[i]);
    }
  }
  return numbers;
}
console.log(getNumber(["r", 3, "v"]));

// Return two highest  number in an array

const findLargestNumbers = (arr) => {
  let twoLargest = [];
  twoLargest.push(arr.sort((a, b) => b - a)[0]);
  twoLargest.push(arr.sort((a, b) => b - a)[1]);
  return twoLargest;
};
console.log(findLargestNumbers([14, 26, 10]));

// even numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 40, 20];

const getAllEvenNumbers = (numbers) => {
  var evenNumbers = [];

  for (var i in numbers) {
    if (numbers[i] / 2) {
      evenNumbers.push(numbers[i]);
      return evenNumbers;
    }
  }
};

const getAllEvenNumbers = (numbers) => {
  return numbers.filter((number) => number % 2 == 0);
};

console.log(getAllEvenNumbers(numbers));


//Check if an element exists in the array
function exists(value, array) {
    return array.some(e => e === value);
}

let marks = [4, 5, 7, 9, 10, 2];

console.log(exists(4, marks));
console.log(exists(11, marks));



// Check if an array has one element that is in a range
let marks = [4, 5, 7, 9, 10, 2];

const range = {
    min: 8,
    max: 10
};

let result = marks.some(function (e) {
    return e >= this.min && e <= this.max;
}, range);

console.log(result); // output is true
