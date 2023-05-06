const user: {
  company: "Programming Hero"; //Literal type
  name: string;
  age: number;
  isMarried: boolean;
  wife?: string; //conditional type
} = {
  company: "Programming Hero",
  name: "Abul Kashem",
  age: 60,
  isMarried: true,
};

console.log(user);
console.log(user.wife);
