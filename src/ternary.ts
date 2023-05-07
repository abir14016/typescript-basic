const age: number = 20;
const isAdult = age >= 18 ? "yes" : "No";
console.log(isAdult);

//nullish coalescing operator (undefined and null)
const isAuthenticatedUser = "";
const userName1 = isAuthenticatedUser ?? "Guest";
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : "Guest";
console.log({ userName1 }, { userName2 });

//nullish coalescing operator only works for undefind and null

type Person = {
  name: string;
  age: number;
  address: {
    city: "Chottogram";
    Road: "45 lane";
    home?: string;
  };
};

const person4: Person = {
  name: "Tamim",
  age: 45,
  address: {
    city: "Chottogram",
    Road: "45 lane",
    home: "Rajbari",
  },
};

const home = person4?.address?.home ?? "No Home";
console.log(home);
