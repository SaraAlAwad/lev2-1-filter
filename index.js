const { data } = require("./data");
const { getPopulation, getPopulation2 } = require("./functions");

// console.log(data[0].population);
console.log(getPopulation(data));
console.log(getPopulation2(data));