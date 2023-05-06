//normal function

function add(num1: number, num2: number): number {
  return num1 + num2;
}

const result = add(2, 2);

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

console.log(person);
