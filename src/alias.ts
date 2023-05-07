//type alias for object
type CrushType = {
  name: string;
  age?: number;
  profession: string;
  address: string;
};

const crush1: CrushType = {
  name: "Kate Winslate",
  age: 22,
  profession: "Programmar",
  address: "Dhaka",
};

const crush2: CrushType = {
  name: "Harry",
  profession: "Programmar",
  address: "Dhaka",
};

//type alias for boolean
type CrushMarrid = boolean;
const isCrushMarrid: CrushMarrid = true;

//type alias for string
type CourseNameType = string;
const courseName: CourseNameType = "Web";

//type alias for function
type OperationType = (x: number, y: number) => number;

const calculate = (n1: number, n2: number, operation: OperationType) => {
  return operation(n1, n2);
};

const res = calculate(10, 20, (x, y) => x * y);

console.log(res);
