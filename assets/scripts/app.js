// function ys(user, msg) {
//   console.log("Hello");
//   console.log(user);
//   console.log(msg);
// }
// ys("aa", "ss");

// const user = {
//   name: "man",
//   age: 23,
//   greet() {
//     console.log("hello");
//     console.log(this.age);
//   },
// };
// console.log(user.name);
// user.greet();
// class User {
//   constructor(name1, sex) {
//     this.name1 = name1;
//     this.sex = sex;
//   }
// }
// const user1 = new User("naam", "male");
// console.log(user1);
const hobbie = ["sports", "reading"];
// console.log(hobbie([0]));
console.log(hobbie[0]);

hobbie.push("work");
console.log(hobbie);
// const index = hobbie.findIndex((item) => {
//   return item === "sports";
// });
const index = hobbie.findIndex((item) => item === "sports");
console.log(index);
const edit = hobbie.map((item) => ({ text: item }));

console.log(edit);
