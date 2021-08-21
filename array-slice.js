const numbers = [2, 3, 4, 5, 6, 7, 34, 45, 46, 90, 123];

// slice
const numberSliced = numbers.slice(4, 8);
// console.log(numberSliced);
// console.log(numbers);

// splice to remove an element from an array
// const numberSpliced = numbers.splice(4, 2); // delete next 2 elements
// console.log(numberSpliced);
// console.log(numbers);

// splice to remove elements & add new elements
const numberSpliced2 = numbers.splice(4, 3, 101, 102, 103, 104);
console.log(numberSpliced2);
console.log(numbers);
