type NoobDev = {
  name: string;
};

// type JuniorDev = {
//     name: string;
//     expertise: string;
//     experience: number
// }

type JuniorDev = NoobDev & {
  //intersection type
  expertise: string;
  experience: number;
};

enum Level {
  junior = "junior",
  mid = "mid",
  senior = "senior",
}

type NextLevelDev = JuniorDev & {
  leadershipExperience: boolean;
  level: Level;
};

const newDev: NoobDev | JuniorDev = {
  //union type
  name: "Abir",
  expertise: "Javascript",
  experience: 3,
};

const proDev: NextLevelDev = {
  name: "Robin",
  expertise: "Typescript",
  experience: 5,
  leadershipExperience: true,
  level: Level.mid,
};

console.log(proDev);
