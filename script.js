function loop1() {
  let fruits = ["apple", "bannana", "cherry"];
  for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }
}

const loop2 = () => {
  const items = [];

  for (let i = 0; i <= 3; i++) {
    let item = prompt("Enter an item:");
    items.push(item);
  }

  for (let i = 0; i < 3; i++) {
    console.log(items[i]);
  }
};

const loop3 = () => {
  const itemString = prompt("Enter 3 items, seprarated by a comma:");
  const myArray = itemString.split(",", 3);

  for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i].trim());
  }
};

const map1 = () => {
  const numString = prompt("Enter comma separated numbers (e.g. 2,4,6,3):");
  const numArrayAsStrings = numString.split(",");

  //   Version 1
  //   const numArray = [];
  //   for (let i = 0; i < numArrayAsStrings.length; i++) {
  //     const s = numArrayAsStrings[i];
  //     const num = Number(s);
  //     numArray.push(num);
  //   }

  // Version 2 most common
  //   const numArray = numArrayAsStrings.map((s) => {
  //     return Number(s);
  //   });

  // Version 3
  function convertToNumber(str) {
    return Number(str);
  }
  const numArray = numArrayAsStrings.map(convertToNumber);

  // Version 4
  //   const numArray = numArrayAsStrings.map(Number);

  console.log(numArray);
};

const map2 = () => {
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map((num) => num * 2); // Array comprehension for js

  // const dblFunction = (value) => {
  //     return value * 2;
  // }

  console.log(doubled);
};

const map3 = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const changed = [];

  for (let i = numbers[0]; i < numbers.length; i++) {
    if (i % 2 === 0) {
      console.log(`Original ${i}, Changed ${i * 2}`);
      changed.push(i * 2);
    } else {
      console.log(`Original ${i}, Changed ${i * 3}`);
      changed.push(i * 3);
    }
  }

  console.log(changed);
  // const evenDoubled = numbers.map((num) => num % 2);

  // const oddTripled = numbers.map((num) => num )
};

// const students = [{'name': 'John', 'score': 90}, {'name': 'Jane', 'score': 85}];
// const high_scorers = students.filter(student => student.score > 80).map(student => student.name);

const testNumberFilter = () => {
  const nums = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const filterednumbers = numberFilter(nums);
  console.log(filterednumbers);
};

const numberFilter = (numbers) => {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0 && numbers[i] <= 5) {
      result.push(numbers[i]);
    }
  }
  return result;
};

const filter1 = () => {
  const numsInputStr = prompt(
    "Please enter a list of numbers separates by a comma:"
  );
  const numArray = numsInputStr.split(",");
  const oddNums = [];

  for (let i = 0; i < numArray.length; i++) {
    if (Number(numArray[i]) % 2 !== 0) {
      oddNums.push(Number(numArray[i]));
    }
  }
  console.log(oddNums);
};

const numSetArray = [0, 12, 11, 9, 58, 79, 55, 13, 27, 99, 64, 68, 38];

const filter2 = (numSetArray) => {
  for (let i = 0; i < numSetArray.length; ) {
    if (numSetArray[i] < 8 || numSetArray[i] > 15) {
      numSetArray.splice(i, 1);
    } else {
      i++;
    }
  }
  return numSetArray;
};

console.log(filter2(numSetArray));

const filter3 = () => {
    const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 12];

    const odds = numArray.filter((number) => number % 2 !== 0);
    console.log(odds);
}