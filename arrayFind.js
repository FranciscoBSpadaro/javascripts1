/**
 * Array.find()
The find() method returns the value of the first array element that passes a test function.

This example finds (returns the value of ) the first element that is larger than 18:
 */

const numbers = [4, 9, 16, 25, 29];
let finder = numbers.find(myFunction);

function myFunction(x) {
  return x > 18
}

console.log(`O Valor mais proximo do solicitado é ${finder}`)


/**
 * Array.findIndex()
The findIndex() method returns the index of the first array element that passes a test function.

This example finds the index of the first element that is larger than 18:
 */
// ES5
const numbers1 = [4, 9, 16, 25, 29];
let finder2 = numbers1.findIndex(myFunction1); // o parametro de myfunction1 está sendo chamado antes da função
// myFunction1(value, index, array) no manual pede 3 parametros 
function myFunction1(x) {
  return x > 18
}
console.log(`O indice é ${finder2}`)


// ES6 usando arrow function codigo mais organizado e fácil de entender
const numbers2 = [4, 9, 16, 25, 29]
let myFunction2 = (x) => {return x > 18 } // usando value tambem retorna o index
let finder3 = numbers2.findIndex(myFunction2)

console.log(`=> O indice é ${finder3}`)


const numbers3 = [4, 9, 16, 25, 29]
let myFunction3 = (x) => {return x > 18 }
const finder4 = numbers3.find(myFunction3)  // obs se deixar esse const finder4 com let ele iria mudar a cor pelo vscode como no exemplo acima

console.log(`=> O Valor mais proximo do solicitado ${finder4}`)
//console.table(numbers3)
console.table([numbers, numbers1, numbers2, numbers3])
console.log('%c Javascript is Beautiful 😍😍 ', ' color: pink; font-weight: bold; background-color: black;')

// run node arrayFind.js


