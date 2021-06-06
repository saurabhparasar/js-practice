// .............................................................Values and Variables

const country = "india";
const continent = "asia";
let population = 130;

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
language = "hindi";

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
