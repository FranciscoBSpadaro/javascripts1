/**
 * The For/Of Loop
 * A instrução JavaScript gira através dos valores de um objeto iterável.for/of

for/of permite que você faça loop sobre estruturas de dados que são iteráveis, como Arrays, Strings, Maps, NodeLists e muito mais.

for/of  loop tem a seguinte sintaxe:

for (variable of iterable) {
    // code block to be executed
  }

 */
  /**
   * variável - Para cada iteração o valor da próxima propriedade é atribuído à variável. A variável pode ser declarada com,  
   * .const, let, var

iterable - Um objeto que tem propriedades iteráveis.
Looping over an Array:
   */
const cars = ['BMW', 'Volvo', 'Mini', 'Ferrari'];
let text = "";

for (let x of cars) {
  text += x + "🚘";
}

console.log(`Lista De Carros Adicionados : ${text}`)
console.log(`Lista De Carros : ${cars}`)
console.log(cars)

// Looping over a String
let language = "JavaScript";
let text1 = "";

for (let x of language) {
    text1 += x + "-";
}
console.log(`Looping de strings : ${text1}`)
console.log(`O Texto tem ${text1.length} Caractéres `)

//executar no terminal  node forLoop.js