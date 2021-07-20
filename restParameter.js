/**
 * Function Rest Parameter
The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:
 */

function sum(...args) {
    let sum = 0
    for (let arg of args) sum += arg
    return sum
  }
  
  let x = sum(4, 9, 16, 25, 29, 100, 66, 77);

  console.log(`Soma dos Valores do Array ${x}`)


  //exemple for multiply args

  function mult(...args) {
    let mult = 0
    for (let arg of args) mult = arg * arg
    return mult
  }
  
  let x1 = mult(4, 9, 16, 25, 29, 100, 66, 77);

  console.log(`Multiplicação dos Valores do Array ${x1}`)

// com arroy function  
const mult1 = (...args) => {  let mult1 = 0
  for (let arg of args) mult1 = arg * arg
  return mult1
}
let x2 = mult1(4, 9, 16, 25, 29, 100, 66, 77);
console.log(`=> Multiplicação dos Valores do Array ${x2}`)
    //run  node restParameter.js