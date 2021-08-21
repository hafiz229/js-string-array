const numbers = [3, 5, 5, 3, 20, 55, 20, 45];
// const numbers2 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const sortedNumbers = numbers.sort();
// console.log(sortedNumbers);
const friends = ["kabil", "josim", "razzak", "anwar", "deepjol"];
// const sortedFriends = friends.sort();
// console.log(sortedFriends);
// const reversedFriends = friends.reverse();
// console.log(reversedFriends);

const sortedReversedFriends = friends.sort().reverse();
// console.log(sortedReversedFriends);

// sorting numbers correctly
const bigNumbers = [66, 58, 6, 81, 92];
const sortedBigNumbers = bigNumbers.sort(function (a, b) {
  return a - b;
});
console.log(sortedBigNumbers);
