/**
 * Being able to use an Object as a key is an important Map feature.
 * Ser capaz de usar um Objeto como uma chave é um recurso importante do Mapa.‎
 */

// Create Objects
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// Create a new Map
const fruits = new Map();

// Add new Elements to the Map
fruits.set(apples, 500)
fruits.set(bananas, 300)
fruits.set(oranges, 200)
// deletar
// fruits.delete(apples)
// log completo
// The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:
//‎O parâmetro de descanso (...) permite que uma função trate um número indefinido de argumentos como uma matriz:‎
console.log([...fruits.entries()]);
// apenas os nomes dos objectos > console.log([...fruits.keys()]);
// apenas valores do fruit.set > console.log([...fruits.values()]);
// run terminal  node mapObjects.js