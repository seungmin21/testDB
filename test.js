const fs = require('fs')

const jsonData = fs.readFileSync("./test.json");
const pokemonData = JSON.parse(jsonData);
console.log(pokemonData)