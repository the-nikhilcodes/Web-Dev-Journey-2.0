let teas = ["green tea", "black tea", "chai", "oolong tea"];

let selectedTeas = [];
for (let i=0; i < teas.length; i++) {
if (teas[i] === "chai") {
    break;
}
selectedTeas.push(teas[i])
}

console.log(selectedTeas);

// Expected Output:
// [ 'green tea', 'black tea' ] 


let cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "Chicago") {
    continue;
  }
  visitedCities.push(cities[i]);
}

console.log(visitedCities);

// Expected Output:
// [ 'New York', 'Los Angeles', 'Houston', 'Phoenix' ]

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let smallNumbers = [];

for (const number of numbers) {
  if (number === 6) {
    break;
  }
    smallNumbers.push(number);
}

console.log(smallNumbers);  

// Expected Output:
// [ 1, 2, 3, 4, 5 ]

let citipopulations = {
    london: 8900000,
    paris: 2140000,
    berlin: 3769000,
    madrid: 3223000,
    rome: 2873000,
};

let largeCities = {};
for (const city in citipopulations) {
  if (citipopulations[city] < 3000000) {
    continue;
  }
  largeCities[city] = citipopulations[city];
}