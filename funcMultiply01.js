// ES5
var x1 = function(x, y) {
    return x * y
 }
 console.log(`Resultado multiplicação ${x1 (2, 2)}`)


 // ES6
const x2 = (x, y) => x * y
console.log(`Resultado multiplicação ${x2 (5, 5)}`)



/**
 * As arrow functions não têm suas próprias funções . Eles não são adequados para definir ‎‎métodos de objeto‎‎. < this >

‎As funções de seta não são içadas. Eles devem ser ‎‎definidos antes‎‎ de serem usados.‎

‎Usar < const > é mais seguro do que usar < var > , porque uma expressão de função é sempre um valor constante.‎

‎Você só pode omitir o < return > e as chaves ' {} '  se a função for uma única instrução.
Por causa disso, pode ser um bom hábito mantêr sempre um return exemplo : 
 */

const x = (x, y) => { return x * y }
console.log(`Resultado multiplicação ${x (1, 1)}`)


// run terminal  node funcMultiply01.js