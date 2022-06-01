// const arr = [233, 504, 89];
// let big = arr[0];
// for (var i = 0; i < arr.length; i++) {
//   if (big < arr[i]) {
//     big = arr[i];
//   }
// }
// console.log(big);

// const num1 = 52;
// const num2 = 22;
// const num3 = 72;
// let biggest = 0;
// if (num1 >= num2 && num1 >= num3) {
//   biggest = num1;
// } else if (num2 >= num3 && num2 >= num1) {
//   biggest = num2;
// } else {
//   biggest = num3;
// }
// console.log(biggest);

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype = {
  eat() {
    console.log(this.name + " is eating");
  },
};
const ruhul = new Person("Ruhul", 233);
ruhul.eat();
