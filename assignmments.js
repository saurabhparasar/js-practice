// .............................................................Values and Variables

const country = "india";
const continent = "asia";
let population = 45;

// ................................................................data types

const isIsland = false;
let language;

console.log(
  typeof country,
  typeof continent,
  typeof population,
  typeof isIsland,
  typeof language
);

// .........................................................let, const and var
language = "english";

// ........................................................Basic Operators

console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);

console.log(population < 33);

let description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;
// ................................................Strings and Template Literals

description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

// ................................................Taking Decisions: if / else Statements

if (population > 33) {
  console.log(country + "'s population is above average");
} else {
  console.log(
    `${country}'s popualation is ${33 - population} million below average `
  );
}
//  ..................................................TYPE COERSION

console.log("9" - "5"); // LOGS 4
console.log("19" - "13" + "17"); // LOGS 617
console.log("19" - "13" + 17); // LOGS 23
console.log("123" < 57); // LOGS FALSE
console.log(5 + 6 + "4" + 9 - 4 - 2); // LOGS 1143

// ...................................................................Equality Operators

// let numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );

// if (numNeighbours === 1) {
//   console.log("only one border");
// } else if (numNeighbours > 1) {
//   console.log("more than one border");
// } else {
//   console.log("no border");
// }

// ...........................logical operator
if (population < 50 && language === "english" && !isIsland) {
  console.log(`you should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria`);
}

// ................................The switch Statement
switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("4th place");
    break;
  case "arabic":
    console.log("5th place");
    break;
  default:
    console.log("Great language too :D");
}
