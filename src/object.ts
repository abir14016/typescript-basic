const user: {
  company: "Programming Hero";
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
