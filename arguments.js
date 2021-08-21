function addNumbers() {
  //   console.log(arguments);
  let result = 0;
  for (const num of arguments) {
    result += num;
  }
  return result;
}

const sum = addNumbers(23, 13, 49, 50);
console.log(sum);

function getFullName(firstName, lastName) {
  let fullName = "";
  for (const part of arguments) {
    fullName += part + " ";
  }
  return fullName;
}
const name = getFullName("Omuk", "Songket", "bin", "Hanif", "Songket");
console.log(name);
