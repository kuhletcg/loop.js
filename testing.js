//assign a variable name then assign it to a name
// var name = "Lholho";
// name = "Clie";
// console.log(name);

//split the following: Welcome to this Javascript Guide! and join it
// var string = "Welcome to this Javascript Guide!";
// var string = string.split("").join();
// console.log(string);

//Multiply all numbers in an array by 4
// var numbers = [2, 4, 6, 8];
// var multiplied = [];
// for (var i = 0; i < numbers.length; i++) {
//   multiplied.push(numbers[i] * 4);
// }
// console.log(multiplied);

//Print out numbers from 0-20
// for (var i = 0; i <= 20; i++) {
//   console.log(i);
// }

// Reverse words
// var string = "Welcome to this Javascript Guide!";
// var reverseString = string.split(" ").reverse().join(" ");
// console.log(reverseString);

// objects
// function hasProp(name, checkName) {
//   //   var res = false;
//   if (name != checkName) {
//     console.log(`value ${name} != ${checkName} `);
//   } else {
//     console.log(`value ${name} == ${checkName} `);
//   }
// }

// var ts1 = hasProp(obj.name, "mark");
// var ts2 = hasProp(obj.name, "name");

// console.log(`ts1`, ts1);
// console.log(`ts2`, ts2);

// object
// var obj = { name: "mark", middleName: "max", lastName: "Jax" };
// var obj2 = { middleName: "max", lastName: "Jax" };

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
