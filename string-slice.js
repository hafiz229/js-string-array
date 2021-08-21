// split
const anthem = "Amar Sonar Bangla Ami Tomai Valobashi";
const withoutA = anthem.split("a");
// console.log(withoutA);

// slice
const smallSlice = anthem.slice(5, 13);
// console.log(smallSlice);

// substr
const anotherPart = anthem.substr(5, 7);
// console.log(anotherPart);

// substring
const anotherAnotherPart = anthem.substring(5, 13);
// console.log(anotherAnotherPart);

// concat
/* const first = "amader ";
const second = "City";
const fullString = first.concat(second);
console.log(fullString); */

// join
const words = ["lemon", "orange", "mango", "chocolate"];
// const allJoined = words.join(" ");
const allJoined = words.join(", ");
console.log(allJoined);
