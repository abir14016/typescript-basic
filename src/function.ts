//normal function

function add(num1: number, num2: number): number {
  return num1 + num2;
}

// const result = add(2, 2);

// console.log(result);

//arrow function
const addArrow = (num1: number, num2: number): number => num1 + num2;

const arr = [2, 4, 6];
const newArr = arr.map((elem: number) => elem * elem);
// console.log(newArr);

//function inside an object
const person: {
  name: string;
  balance: number;
  addBalance(money: number): void;
} = {
  name: "Abir",
  balance: 5,
  addBalance(money: number) {
    console.log(`new balance: ${this.balance + money}`);
  },
};

// console.log(person);

//default parameters

function add2(num1: number, num2: number = 10): number {
  //Always use default parameters in the last parameter
  return num1 + num2;
}
const result = add2(2);
// console.log(result);

//spread operator
const myFriends = ["a", "b", "c"];
const newFriends = ["d", "e", "f"];
myFriends.push(...newFriends);
// console.log(myFriends);

//rest parameters
const greetFriends = (...friends: string[]): void =>
  friends.forEach((friend) => console.log(`Hi ${friend}`));
greetFriends("Gamvir", "Naveen", "Virat", "Kumble", "Anderson");

//object destructuring
const bestFriend = {
  fName: "ABir",
  age: 30,
};
const { fName } = bestFriend;

//array destructuring
const cars = ["Saab", "Volvo", "BMW"];
const [car, ghar, c, d] = cars;
console.log(car, ghar, c, d);
