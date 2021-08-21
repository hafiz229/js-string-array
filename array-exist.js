// isArray
function megaFriend(friends) {
  if (Array.isArray(friends) == false) {
    return "Please provide an array of strings";
  }
  let mega = friends[0];
  for (const friend of friends) {
    if (friend.length > mega.length) {
      mega = friend;
    }
  }
  return mega;
}
const friends = ["sakib", "mushfiq", "Ashraful", "Tamim"];
const myBigBuddy = megaFriend(123);
// console.log(myBigBuddy);

// indexOf
if (friends.indexOf("Sakib") != 1) {
  //   console.log("Sakib exits");
}

// includes
if (friends.includes("Sakib")) {
  //   console.log("Sakib exist");
}

// concat
const first = [1, 3, 5];
const second = [4, 6, 8, 10];
const combined = first.concat(second);
console.log(combined);
