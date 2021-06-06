// .............................................................Values and Variables

const country = "india";
const continent = "asia";
let population = 13;

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

// 1. If your country's population is greater that 33 million, log a string like this to the
// console: 'Portugal's population is above average'. Otherwise, log a string like
// 'Portugal's population is 22 million below average' (the 22 is the average of 33
// minus the country's population)
// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original
