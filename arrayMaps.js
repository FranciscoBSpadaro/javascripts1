
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
// !"cat" = false porque só tem 1 no index , [x] = 1  atribui valor de 1 para o objeto cat
// reduce usa 2 parametros o primeiro é objeto pets e o segundo é o string reduce
const petCounts = pets.reduce(function(objeto, x){
    if (!objeto[x]) {
        objeto[x] = 1
    } else {
        objeto[x]++
    }
    return objeto
}, {})

console.log(petCounts)

/**
 * https://developer.mozilla.org/pt-BR/docs/orphaned/Web/JavaScript/Guide/Expressions_and_Operators
 * negação logica (!) NOT lógico (!) !expr  (Negação lógica) Retorna falso caso o único operando possa ser convertido para verdadeiro; 
 * senão, retorna verdadeiro.
 * var n1 = !true
   console.log(n1) =  false 
   var n2 = !"cat"
   console.log(n2) = false */
console.log(' Agora alguns emojis 😁')
const pets1 = ['🐶', '🐱', '🐺', '🐶', '🐵', '🐱', '🐯', '🐵', '🐸', '🦄']

const petCounts1 = pets1.reduce(function(obj, x){
    if (!obj[x]) {
        obj[x] = 1
    } else {
        obj[x]++
    }
    return obj
}, {})  // {} retorno do objeto + reduce
console.log("Contagem  de pets repetidos")
console.log(petCounts1)


console.log("contando caracteres dos indices no array com lenght")

const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  console.log(materials.map(x => x.length),"Caractéres");
  

  