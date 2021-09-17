// Multiply the number in an array and get odd numbers

const list = [1, 2, 3];

const multiplyAndGetOdd = (list) => {
  const multipliedList = [];
  const oddValues = [];

  for (var i in list) {
    multipliedList.push(list[i] * 3);
  }

  const multipliedList = list.map((element) => element * 3);
  console;

  for (var i in multipliedList) {
    if (multipliedList[i] % 2 !== 0) {
      oddValues.push(multipliedList[i]);
    }
  }

  return oddValues;
};

console.log(multiplyAndGetOdd(list));
