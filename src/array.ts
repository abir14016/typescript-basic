const names: string[] = ["abir", "robin", "nayan"];
names[8] = "Alan";
console.log(typeof names);

const rollNumbers: number[] = [3, 6, 8];
rollNumbers[9] = 10;
console.log(typeof rollNumbers);

let mixedElements = ["Abir", 8, true, null, undefined];

//tuples
const user: [number, string] = [5, "Abir"];
user[0] = 1;
console.log(user);
