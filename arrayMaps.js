
const animais = (vaiProfogo = ['🍗','🍔']) => {return ['🐓','🐮'].map(vaiProfogo)}

console.log(animais)


// multiplicando valores de um array com map
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(item => item * 2);
console.log(doubled)

// filtrando numeros multiplicados por 2 ou 3...
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filtering = numbers1.filter(item => item % 5 === 0) // condição boleana
console.log(filtering)

// filtrando estudantes graduados dos anos 90 ou + 
const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
  ]
  
const studentGrades = students.filter((x) => x.grade >= 90)

console.log(studentGrades)

/**
 * reduce
 * O método reduz uma variedade de valores até apenas um valor. 
 * Para obter o valor de saída, ele executa uma função redutora em cada elemento da matriz.reduce()
 */
const numbers3 = [1, 2, 3, 4]

const sum = numbers3.reduce((x, y) =>  x + y ) // somou os valores do array e da um unico valor o resultado. 

console.log(sum)

/** No exemplo seguinte, é usado para transformar uma matriz de strings em um único objeto que mostra quantas vezes cada string aparece na matriz. 
    Observe esta chamada para reduzir passa um objeto vazio como parâmetro. Isso será usado como o valor inicial do acumulador 
(o primeiro argumento) passado para a função de retorno de chamada.reduce(){}initialValue o primeiro parametro é objeto e o segundo é string basta passar o cursor por cima  */

var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

const petCounts = pets.reduce(function(objeto, x){
    if (!objeto[x]) {
        objeto[x] = 1
    } else {
        objeto[x]++
    }
    return objeto
}, {})

console.log(petCounts)