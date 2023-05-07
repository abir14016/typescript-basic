const searchName = (value: string | null) => {
  if (value === null) {
    console.log("nothing to search");
  } else {
    console.log("searching...");
  }
};

// searchName("Abir");

//unknown type

const getMyCarSpeed = (speed: unknown) => {
  if (typeof speed === "number") {
    const convertedSpeed = (speed * 1000) / 3600;
    console.log(`my car speed is ${convertedSpeed} m/s`);
  }
  if (typeof speed === "string") {
    const [value, unit] = speed.split(" ");
    const convertedSpeed = (parseInt(value) * 1000) / 3600;
    console.log(`my car speed is ${convertedSpeed} m/s`);
  } else {
    console.log("wrong type");
  }
};

getMyCarSpeed("10 km/h");
getMyCarSpeed(true);
// getMyCarSpeed(2);

//never type
function throwError(message: string): never {
  throw new Error(message);
}

throwError("some error here");
