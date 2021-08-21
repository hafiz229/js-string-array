const myFaVDate = new Date("1971-3-26");
// console.log(myFaVDate);
// Date(year, month, date, hour, min, second, mili - second)
const anotherDate = new Date(1971, 3, 26, 11, 50, 40, 80);
// console.log(anotherDate);

if (myFaVDate.getTime() < anotherDate.getTime()) {
  console.log("favorite is earlier");
}
console.log(myFaVDate.getTime());
console.log(anotherDate.getTime());
